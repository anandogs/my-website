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
  "Anando Ghose builds AI agents, finance and reporting automations and the AI infrastructure they run on, leads developers, and teaches teams to use AI at work. His background is in corporate finance and retail e-commerce.";

/** Third person, so it can be quoted as it stands. */
export const bio = [
  "Anando Ghose builds AI agents, finance and reporting automations, and the AI infrastructure they run on. He leads developers and teaches teams to use AI at work. He is a self-taught programmer who learned through CS50, Harvard's free online course, and he has an MBA from the Indian School of Business.",
  "Most of his professional work is for finance teams: agents that follow up on unpaid invoices, review expenses or answer revenue questions in chat, reporting packs and board decks that build themselves, and the platforms, guardrails and training that let a team adopt AI safely.",
  "He came to this from the business side. He started at Fabindia, a craft and lifestyle retail brand, where from 2009 to 2013 he managed the technology side of e-commerce and worked as executive assistant to the managing director. He then spent four years in corporate finance at a global IT services company, in finance integration and financial planning and analysis. Around 2018 he moved into automation, starting with that company's management reporting, and taught himself to program along the way.",
  "Outside work he plants trees on a farm and builds automated watering for them, makes small apps for himself and websites for friends, and surfs.",
];

/** The same, in his own voice, for the work page and its Markdown twin. */
export const bioFirst = [
  "I build AI agents, finance and reporting automations, and the AI infrastructure they run on. I lead developers and teach teams to use AI at work. I am a self-taught programmer who learned through CS50, Harvard's free online course, and I have an MBA from the Indian School of Business.",
  "Most of my professional work is for finance teams: agents that follow up on unpaid invoices, review expenses or answer revenue questions in chat, reporting packs and board decks that build themselves, and the platforms, guardrails and training that let a team adopt AI safely.",
  "I came to this from the business side. I started at Fabindia, a craft and lifestyle retail brand, where from 2009 to 2013 I managed the technology side of e-commerce and worked as executive assistant to the managing director. I then spent four years in corporate finance at a global IT services company, in finance integration and financial planning and analysis. Around 2018 I moved into automation, starting with that company's management reporting, and taught myself to program along the way.",
  "Outside work I plant trees on a farm and build automated watering for them, make small apps for myself and websites for friends, and surf.",
];

const professional = work.filter((w) => !w.personal && !w.career);
const career = work.filter((w) => w.career);
const personal = work.filter((w) => w.personal);

const section = (areas: typeof work) =>
  areas
    .map((w) => `### ${w.area}\n\n${w.built.map((b) => `- ${b}`).join("\n")}\n\nTechnology: ${w.tech.join(", ")}.`)
    .join("\n\n");

/** The whole of the work page as Markdown. `updated` is an ISO date. */
export const workMarkdown = (updated: string) => `# Anando Ghose: what I have built

> ${summary}

${bioFirst.join("\n\n")}

Last updated: ${updated}. Contact: ${EMAIL}. Website: ${SITE}/

## Professional work

Kinds of systems, described in general terms. I keep the details for a conversation.

${section(professional)}

## Earlier career

${career.map((w) => `${w.built.map((b) => `- ${b}`).join("\n")}\n\nTools: ${w.tech.join(", ")}.`).join("\n\n")}

## Personal projects

My own projects, outside work: for my garden, for myself, for friends and for small local organisations. Several are prototypes.

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
