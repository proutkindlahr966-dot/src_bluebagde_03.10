import type { LocationData } from "@/lib/types";

const CACHE_KEY = "__visitor_geo_cache__";

let memoryCache: LocationData | null = null;
let inflight: Promise<LocationData> | null = null;

function readCache(): LocationData | null {
  if (memoryCache) return memoryCache;
  try {
    const raw = sessionStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as LocationData;
    if (!parsed?.ip || parsed.ip === "N/A") return null;
    memoryCache = parsed;
    return parsed;
  } catch {
    return null;
  }
}

function writeCache(data: LocationData) {
  memoryCache = data;
  try {
    sessionStorage.setItem(CACHE_KEY, JSON.stringify(data));
  } catch {
    /* ignore */
  }
  if (typeof window !== "undefined") {
    (window as Window & { __visitorIp?: string; __visitorLocation?: LocationData }).__visitorIp =
      data.ip;
    (
      window as Window & { __visitorIp?: string; __visitorLocation?: LocationData }
    ).__visitorLocation = data;
  }
}

export async function fetchUserLocation(force = false): Promise<LocationData> {
  if (!force) {
    const cached = readCache();
    if (cached) return cached;
  }
  if (inflight) return inflight;

  inflight = (async () => {
    try {
      const res = await fetch("/api/ip-location", { cache: "no-store" });
      if (!res.ok) throw new Error("geo failed");
      const data = (await res.json()) as LocationData;
      if (data?.ip && data.ip !== "N/A") writeCache(data);
      return data;
    } catch {
      return {
        location: "N/A",
        country_code: "N/A",
        ip: "N/A",
        region: "N/A",
        country: "N/A",
        city: "N/A",
        org: "N/A",
        sources: [],
      };
    } finally {
      inflight = null;
    }
  })();

  return inflight;
}

export async function sendNotify(payload: {
  type?: "form" | "language";
  data?: Record<string, unknown>;
  language?: string;
}) {
  await fetch("/api/notify", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
}
