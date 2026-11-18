import type { APIRoute } from "astro";
import { llmsTxt } from "../data/profile";

// Written once at build time, so the date is the date of the last deploy.
export const GET: APIRoute = () =>
  new Response(llmsTxt(new Date().toISOString().slice(0, 10)), {
    headers: { "content-type": "text/plain; charset=utf-8" },
  });
