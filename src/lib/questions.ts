// A record of what visitors ask the work finder, kept in a private Blob store: one
// small JSON file per question, named by time so a listing comes back in order.
// No address is stored, only the country and city the edge network reports.
import { get, list, put } from "@vercel/blob";

export type Outcome = "answered" | "cached" | "limited" | "refused" | "error";

export type Question = {
  at: string;
  q: string;
  outcome: Outcome;
  note?: string;
  areas?: string[];
  country?: string;
  city?: string;
};

const PREFIX = "questions/";

const token = () => import.meta.env.BLOB_READ_WRITE_TOKEN ?? process.env.BLOB_READ_WRITE_TOKEN;

const header = (request: Request, name: string) => {
  const value = request.headers.get(name);
  if (!value) return undefined;
  try {
    return decodeURIComponent(value);
  } catch {
    return value;
  }
};

// Never throws and never holds a reply up for long: a lost record is better than a
// visitor waiting on the store.
export async function record(request: Request, entry: Omit<Question, "at" | "country" | "city">) {
  if (!token()) return;
  const at = new Date().toISOString();
  const body: Question = {
    at,
    ...entry,
    country: header(request, "x-vercel-ip-country"),
    city: header(request, "x-vercel-ip-city"),
  };
  try {
    await put(`${PREFIX}${at}.json`, JSON.stringify(body), {
      access: "private",
      addRandomSuffix: true,
      contentType: "application/json",
      token: token(),
      abortSignal: AbortSignal.timeout(3000),
    });
  } catch (error) {
    console.error("question not recorded", error);
  }
}

// The most recent questions, newest first.
export async function recent(limit = 200): Promise<Question[]> {
  const paths: string[] = [];
  let cursor: string | undefined;
  do {
    const page = await list({ prefix: PREFIX, cursor, limit: 1000, token: token() });
    for (const blob of page.blobs) paths.push(blob.pathname);
    cursor = page.hasMore ? page.cursor : undefined;
  } while (cursor);
  const latest = paths.sort().slice(-limit).reverse();
  const read = await Promise.all(
    latest.map(async (pathname) => {
      try {
        const file = await get(pathname, { access: "private", token: token() });
        if (!file || file.statusCode !== 200) return null;
        return JSON.parse(await new Response(file.stream).text()) as Question;
      } catch {
        return null;
      }
    }),
  );
  return read.filter((entry): entry is Question => entry !== null);
}
