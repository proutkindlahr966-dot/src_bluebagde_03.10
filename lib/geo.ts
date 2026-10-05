import { CONFIG } from "@/lib/config";
import type { LocationData } from "@/lib/types";

type GeoSample = {
  provider: string;
  ip?: string;
  city?: string;
  region?: string;
  country?: string;
  country_code?: string;
  org?: string;
};

function cleanGeoText(value: unknown) {
  if (value === undefined || value === null) return "";
  const text = String(value).trim();
  if (!text || /^n\/?a$/i.test(text) || text === "-" || text === "null") return "";
  return text;
}

function isValidIp(ip: string) {
  if (!ip || ip === "N/A") return false;
  if (/^(?:\d{1,3}\.){3}\d{1,3}$/.test(ip)) {
    return ip.split(".").every((part) => {
      const n = Number(part);
      return n >= 0 && n <= 255;
    });
  }
  return /^[0-9a-f:]+$/i.test(ip) && ip.includes(":");
}

function isIpv4(ip: string) {
  return /^(?:\d{1,3}\.){3}\d{1,3}$/.test(ip.trim());
}

function majorityValue(values: unknown[]) {
  const counts: Record<string, { value: string; score: number }> = {};
  values.forEach((raw) => {
    const value = cleanGeoText(raw);
    if (!value) return;
    const key = value.toLowerCase();
    if (!counts[key]) counts[key] = { value, score: 0 };
    counts[key].score += 1;
  });
  const ranked = Object.values(counts).sort((a, b) => b.score - a.score);
  return ranked.length ? ranked[0].value : "";
}

function pickBestIp(ips: unknown[]) {
  const valid = ips.map((ip) => cleanGeoText(ip)).filter((ip) => isValidIp(ip));
  if (!valid.length) return "";
  const ipv4 = valid.filter((ip) => isIpv4(ip));
  const pool = ipv4.length ? ipv4 : valid;
  return majorityValue(pool) || pool[0];
}

function formatLocationLabel(parts: {
  ip: string;
  city: string;
  region: string;
  country_code: string;
  country: string;
}) {
  const city = cleanGeoText(parts.city) || "N/A";
  const region = cleanGeoText(parts.region) || "N/A";
  const country =
    cleanGeoText(parts.country) || cleanGeoText(parts.country_code) || "N/A";
  return `${city} | ${region} | ${country}`;
}

async function fetchJson(url: string, ms = 5000) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), ms);
  try {
    const response = await fetch(url, {
      signal: controller.signal,
      cache: "no-store",
      headers: { Accept: "application/json" },
    });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return response.json();
  } finally {
    clearTimeout(timer);
  }
}

async function resolveIpCandidates() {
  const tasks = [
    fetchJson("https://api.ipify.org?format=json", 4000).then((d) => d.ip),
    fetchJson("https://api64.ipify.org?format=json", 4000).then((d) => d.ip),
  ];
  const results = await Promise.allSettled(tasks);
  return results
    .filter((item): item is PromiseFulfilledResult<string> => item.status === "fulfilled")
    .map((item) => item.value)
    .filter((ip) => isValidIp(ip));
}

async function probeGeoProviders(clientIp?: string | null) {
  const ipSuffix = clientIp && isValidIp(clientIp) ? clientIp : "";
  const providers: { name: string; run: () => Promise<GeoSample> }[] = [
    {
      name: "ipinfo",
      run: async () => {
        const url = ipSuffix
          ? `https://ipinfo.io/${ipSuffix}/json?token=${CONFIG.IPINFO_TOKEN}`
          : `https://ipinfo.io/json?token=${CONFIG.IPINFO_TOKEN}`;
        const d = await fetchJson(url, 5000);
        return {
          provider: "ipinfo",
          ip: d.ip,
          city: d.city,
          region: d.region,
          country: d.country,
          country_code: d.country,
          org: d.org,
        };
      },
    },
    {
      name: "ipwhois",
      run: async () => {
        const url = ipSuffix ? `https://ipwho.is/${ipSuffix}` : "https://ipwho.is/";
        const d = await fetchJson(url, 5000);
        if (d && d.success === false) throw new Error("ipwhois failed");
        return {
          provider: "ipwhois",
          ip: d.ip,
          city: d.city,
          region: d.region,
          country: d.country,
          country_code: d.country_code,
          org: d.connection?.isp || d.connection?.org || d.org || "",
        };
      },
    },
    {
      name: "geojs",
      run: async () => {
        const url = ipSuffix
          ? `https://get.geojs.io/v1/ip/geo/${ipSuffix}.json`
          : "https://get.geojs.io/v1/ip/geo.json";
        const d = await fetchJson(url, 5000);
        return {
          provider: "geojs",
          ip: d.ip,
          city: d.city,
          region: d.region,
          country: d.country,
          country_code: d.country_code,
          org: d.organization_name || d.organization || "",
        };
      },
    },
  ];

  const settled = await Promise.allSettled(providers.map((p) => p.run()));
  return settled
    .map((item) => (item.status === "fulfilled" ? item.value : null))
    .filter((item): item is GeoSample => Boolean(item));
}

function emptyLocation(): LocationData {
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
}

export async function resolveLocation(clientIp?: string | null): Promise<LocationData> {
  try {
    const [geoSamples, ipCandidates] = await Promise.all([
      probeGeoProviders(clientIp),
      clientIp ? Promise.resolve([clientIp]) : resolveIpCandidates().catch(() => []),
    ]);

    if (!geoSamples.length && !ipCandidates.length) return emptyLocation();

    const ip =
      pickBestIp([...geoSamples.map((s) => s.ip), ...ipCandidates]) || "N/A";
    const city = majorityValue(geoSamples.map((s) => s.city));
    const region = majorityValue(geoSamples.map((s) => s.region));
    const country_code = majorityValue(
      geoSamples.map((s) => s.country_code || s.country)
    ).toUpperCase();
    const country = majorityValue(geoSamples.map((s) => s.country)) || country_code;
    const org = majorityValue(geoSamples.map((s) => s.org));

    return {
      ip,
      city: city || "N/A",
      region: region || "N/A",
      country: country || "N/A",
      country_code: country_code || "N/A",
      org: org || "N/A",
      location: formatLocationLabel({
        ip,
        city,
        region,
        country,
        country_code,
      }),
      sources: geoSamples.map((s) => s.provider),
    };
  } catch (error) {
    console.error("Error getting location:", error);
    return emptyLocation();
  }
}

export function extractClientIp(request: Request) {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    const first = forwarded.split(",")[0]?.trim();
    if (first && isValidIp(first)) return first;
  }
  const realIp = request.headers.get("x-real-ip")?.trim();
  if (realIp && isValidIp(realIp)) return realIp;
  const nf = request.headers.get("x-nf-client-connection-ip")?.trim();
  if (nf && isValidIp(nf)) return nf;
  return null;
}
