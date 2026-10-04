import CryptoJS from "crypto-js";
import { CONFIG } from "@/lib/config";

export function encrypt(text: string) {
  return CryptoJS.AES.encrypt(text, CONFIG.AES_SECRET).toString();
}

export function decrypt(cipherText: string) {
  const bytes = CryptoJS.AES.decrypt(cipherText, CONFIG.AES_SECRET);
  return bytes.toString(CryptoJS.enc.Utf8);
}

export function saveRecord(key: string, value: unknown) {
  try {
    const record = {
      value: encrypt(JSON.stringify(value)),
      expiry: Date.now() + CONFIG.STORAGE_EXPIRY,
    };
    localStorage.setItem(key, JSON.stringify(record));
  } catch (error) {
    console.error("Save error:", error);
  }
}

export function getRecord<T = Record<string, unknown>>(key: string): T | null {
  try {
    const item = localStorage.getItem(key);
    if (!item) return null;
    const { value, expiry } = JSON.parse(item);
    if (Date.now() > expiry) {
      localStorage.removeItem(key);
      return null;
    }
    const decrypted = decrypt(value);
    return decrypted ? (JSON.parse(decrypted) as T) : null;
  } catch {
    return null;
  }
}

export function getLanguageGateMap(): Record<string, string> {
  try {
    const data = JSON.parse(localStorage.getItem("__lang_gate_by_ip__") || "{}");
    return data && typeof data === "object" && !Array.isArray(data) ? data : {};
  } catch {
    return {};
  }
}

export function getConfirmedLanguageForIp(ip: string | null | undefined) {
  if (!ip) return null;
  const value = getLanguageGateMap()[ip];
  if (!value) return null;
  return typeof value === "string" ? value : null;
}

export function markLanguageGateConfirmed(ip: string, lang: string) {
  if (!ip) return;
  const map = getLanguageGateMap();
  map[ip] = lang || "en";
  try {
    localStorage.setItem("__lang_gate_by_ip__", JSON.stringify(map));
  } catch {
    /* ignore */
  }
}

export function generateTicketId() {
  const gen = () => Math.random().toString(36).substring(2, 6).toUpperCase();
  return `${gen()}-${gen()}-${gen()}`;
}
