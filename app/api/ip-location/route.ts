import { NextResponse } from "next/server";
import { extractClientIp, resolveLocation } from "@/lib/geo";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const clientIp = extractClientIp(request);
  const location = await resolveLocation(clientIp);
  return NextResponse.json(location);
}
