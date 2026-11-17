import type { SceneId } from "./scenes";

// Every word of the homepage write-up lives here; the page hard-codes none of it.
// The tagline is always shown; the scene block swaps with what he's doing on stage.
export interface SceneCopy {
  body: string;
  link?: { label: string; href: string };
}

export const tagline = "I'd be building agents and automating everything even if it wasn't my job.";

export const copy: Record<SceneId, SceneCopy> = {
  work: {
    body: "I lead developers, teach teams to use AI, and build agents, automations and the infrastructure they run on. If it's getting done twice, it's getting automated.",
  },
  farm: {
    body: "I plant trees as an excuse to build an automated watering system: an ESP32 and a 12V solenoid valve. Now I'm plotting every tree on the farm and collecting data on each one.",
    link: { label: "Walk around the farm with Imly and Wolf", href: "https://harmony-farm-map.vercel.app/" },
  },
  surf: {
    body: "I love to play, and to keep learning new things. I started surfing after I turned 30 and I'm still a beginner at it. I try to show up to everything else that way too.",
  },
};
