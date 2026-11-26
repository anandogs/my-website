// What visitors have asked the work finder, for Anando only: /api/questions?key=…
// The key is QUESTIONS_KEY; without it set, or with the wrong one, this is a 404.
import type { APIRoute } from "astro";
import { createHash, timingSafeEqual } from "node:crypto";
import { recent } from "../../lib/questions";

export const prerender = false;

const digest = (value: string) => createHash("sha256").update(value).digest();

const escape = (value: unknown) =>
  String(value ?? "").replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`);

const notFound = () => new Response("Not found", { status: 404 });

export const GET: APIRoute = async ({ request, url }) => {
  const expected = import.meta.env.QUESTIONS_KEY ?? process.env.QUESTIONS_KEY;
  const given =
    url.searchParams.get("key") ?? request.headers.get("authorization")?.replace(/^Bearer /, "") ?? "";
  if (!expected || !given || !timingSafeEqual(digest(given), digest(expected))) return notFound();

  let entries;
  try {
    entries = await recent();
  } catch {
    return new Response("The store could not be read.", { status: 502 });
  }

  const headers = { "cache-control": "no-store", "x-robots-tag": "noindex" };
  if (url.searchParams.get("format") === "json") {
    return new Response(JSON.stringify(entries, null, 2), {
      headers: { ...headers, "content-type": "application/json" },
    });
  }

  const rows = entries
    .map(
      (e) => `<tr>
<td>${escape(e.at.slice(0, 16).replace("T", " "))}</td>
<td>${escape([e.city, e.country].filter(Boolean).join(", "))}</td>
<td>${escape(e.outcome)}</td>
<td>${escape(e.q)}</td>
<td>${escape(e.note)}${e.areas?.length ? `<br><small>${escape(e.areas.join(" · "))}</small>` : ""}</td>
</tr>`,
    )
    .join("\n");
  const page = `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex"><title>Questions</title>
<style>
body{font:14px/1.45 system-ui,sans-serif;margin:16px;color:#222;background:#fff}
table{border-collapse:collapse;width:100%}
th,td{text-align:left;vertical-align:top;padding:6px 10px;border-bottom:1px solid #ddd}
td:nth-child(-n+3){white-space:nowrap}
small{color:#666}
@media (prefers-color-scheme: dark){body{color:#ddd;background:#111}th,td{border-color:#333}small{color:#999}}
</style></head><body>
<h1>${entries.length} most recent questions (times in UTC)</h1>
<table><thead><tr><th>When</th><th>Where</th><th>Outcome</th><th>Question</th><th>Reply</th></tr></thead>
<tbody>
${rows}
</tbody></table>
</body></html>`;
  return new Response(page, { headers: { ...headers, "content-type": "text/html; charset=utf-8" } });
};
