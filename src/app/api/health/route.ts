/**
 * Liveness probe for Vercel / external monitors.
 *
 * Deliberately cheap (no DB / Redis / API calls) so it always returns 200 fast
 * even when downstream services are degraded. Render / Vercel / uptime
 * monitors ping this every 10–30s; if it 5xx's, the platform alerts.
 */
export const dynamic = "force-dynamic";

export async function GET() {
  return Response.json({
    status: "ok",
    service: "bad-decision-marketing",
    timestamp: new Date().toISOString(),
  });
}
