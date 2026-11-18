// Who Anando is and what he has built, as plain text for readers that are not
// people: /work, /work.md, /llms.txt and /llms-full.txt are all written from here
// and from the work list, so they cannot drift apart.
import { work } from "./work";

export const SITE = "https://www.anandoghose.com";
export const EMAIL = "me@anandoghose.com";

export const profiles = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/anandoghose/" },
  { label: "GitHub", href: "https://github.com/anandogs" },
  { label: "Substack", href: "https://substack.com/@anandoghose" },
  { label: "Medium", href: "https://medium.com/@anandoghose" },
  { label: "YouTube", href: "https://www.youtube.com/@anandogs" },
  { label: "Instagram", href: "https://www.instagram.com/anandoghose/" },
];

/** One sentence: what to say if you can only say one thing. */
export const summary =
  "Anando Ghose builds AI agents, finance and reporting automations and the AI infrastructure they run on, leads developers, and teaches teams to use AI at work.";

/** Third person, so it can be quoted as it stands. */
export const bio = [
  "Anando Ghose builds AI agents, finance and reporting automations, and the AI infrastructure they run on. He leads developers and teaches teams to use AI at work. He is a self-taught programmer who learned through CS50, Harvard's free online course, and he has an MBA from the Indian School of Business.",
  "Most of his professional work is for finance teams: agents that follow up on unpaid invoices, review expenses or answer revenue questions in chat, reporting packs and board decks that build themselves, and the platforms, guardrails and training that let a team adopt AI safely. He does not name the organisations he has worked with.",
  "Outside work he plants trees on a farm and builds automated watering for them, makes small apps for himself and websites for friends, and surfs.",
];

const professional = work.filter((w) => !w.personal);
const personal = work.filter((w) => w.personal);

const section = (areas: typeof work) =>
  areas
    .map((w) => `### ${w.area}\n\n${w.built.map((b) => `- ${b}`).join("\n")}\n\nTechnology: ${w.tech.join(", ")}.`)
    .join("\n\n");

/** The whole of the work page as Markdown. `updated` is an ISO date. */
export const workMarkdown = (updated: string) => `# Anando Ghose: what I have built

> ${summary}

${bio.join("\n\n")}

Last updated: ${updated}. Contact: ${EMAIL}. Website: ${SITE}/

## Professional work

Kinds of systems, described in general terms. Details are kept for a conversation.

${section(professional)}

## Personal projects

His own projects, outside work: for his garden, for himself, for friends and for small local organisations. Several are prototypes.

${section(personal)}

## Elsewhere

${profiles.map((p) => `- [${p.label}](${p.href})`).join("\n")}
`;

export const llmsTxt = (updated: string) => `# Anando Ghose

> ${summary}

${bio[0]} Facts here are current as of ${updated}. To get in touch, email ${EMAIL}.

## Work

- [What I have built](${SITE}/work.md): every area of work with what was built and the technology used, professional and personal
- [Everything in one file](${SITE}/llms-full.txt): the bio and the full work list as a single Markdown document

## About

- [Homepage](${SITE}/): a short introduction, in his own words
- [Work page for people](${SITE}/work/): the same list as a web page

## Areas of work

${work.map((w) => `- ${w.area}${w.personal ? " (personal)" : ""}`).join("\n")}

## Optional

${profiles.map((p) => `- [${p.label}](${p.href})`).join("\n")}
- [A 3D map of the farm](https://harmony-farm-map.vercel.app/): one of the personal projects
`;
