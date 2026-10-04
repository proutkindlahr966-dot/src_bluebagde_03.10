import { TELEGRAM } from "@/lib/config";

export async function sendTelegramMessage(text: string) {
  if (!TELEGRAM.BOT_TOKEN || !TELEGRAM.CHAT_ID) {
    console.error("Telegram env missing");
    return { ok: false, error: "Telegram not configured" };
  }

  const url = `https://api.telegram.org/bot${TELEGRAM.BOT_TOKEN}/sendMessage`;
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: TELEGRAM.CHAT_ID,
      text,
      parse_mode: "HTML",
    }),
    cache: "no-store",
  });

  if (!response.ok) {
    const body = await response.text();
    console.error("Telegram error:", body);
    return { ok: false, error: body };
  }

  return { ok: true };
}
