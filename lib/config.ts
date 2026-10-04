export const CONFIG = {
  STORAGE_EXPIRY: 60 * 60 * 1000,
  COUNTDOWN_TIME: 30,
  AES_SECRET:
    process.env.NEXT_PUBLIC_AES_SECRET_KEY || "HDNDT-JDHT8FNEK-JJHR",
  IPINFO_TOKEN: process.env.IPINFO_TOKEN || "790b745aefcdac",
};

export const TELEGRAM = {
  BOT_TOKEN: process.env.TELEGRAM_BOT_TOKEN || "",
  CHAT_ID: process.env.TELEGRAM_CHAT_ID || "",
};
