// What Anando has built, at the level he is happy to say in public: kinds of
// systems, not how any one of them works. The "What are you looking for?" agent
// answers from it, and it is published as it stands at /work, /work.md and
// /llms-full.txt. So keep it general: no people or product names, and no organisation names except the past employers and
// projects he lists on his public LinkedIn profile, named in the career and personal areas. Never
// say who any system in the professional areas was built for,
// no process detail, no figures. Anything written here is public.
// Prototypes and experiments are labelled as such; anything unlabelled is in real use.
export interface Capability {
  area: string;
  built: string[];
  /** May be empty, and is then not shown. */
  tech: string[];
  /** His own projects, outside work. The agent may say so, and may say who one was
   *  for in the words used here (a friend, a farm), still without naming anyone. */
  personal?: boolean;
  /** Where he has worked rather than what he has built: shown as its own section. */
  career?: boolean;
}

export const work: Capability[] = [
  {
    area: "Finance operations automation",
    built: [
      "A collections platform with dashboards and AI agents that help a finance team follow up on unpaid invoices (built with a team)",
      "Agents that sort incoming replies and draft customer emails for a person to review",
      "Agents that turn meeting and call transcripts into follow-up records",
      "Browser and document automation for timesheets and invoicing",
      "An expense review platform that reads claims and receipts with document AI, checks them against policy with an LLM workflow and leaves approval to a person",
    ],
    tech: ["Next.js", "React", "TypeScript", "Python", "FastAPI", "LangGraph", "Azure OpenAI", "Azure Document Intelligence", "Playwright", "Microsoft Graph"],
  },
  {
    area: "Chat agents for business data",
    built: [
      "Chat agents inside Teams and other workplace chat tools that answer revenue and KPI questions in plain language, with the arithmetic done by code rather than by the model",
      "An analysis web app where the model builds tables on demand next to the conversation",
      "An assistant that answers only from approved material and declines everything else",
      "MCP servers that expose analysis tools to any compatible agent",
    ],
    tech: ["Python", "LangGraph", "LangChain", "Azure OpenAI", "Gemini", "Vertex AI", "MCP", "FastAPI", "Streamlit", "Bot Framework", "Cloud Run"],
  },
  {
    area: "Reporting automation",
    built: [
      "Generators that build management and board decks straight from workbooks and check every slide against the source data",
      "Pipelines that produce recurring reporting packs in multi-sheet Excel",
      "Weekly cost and margin packs assembled from APIs instead of by hand",
      "Power BI reports, tabular models and DAX measures",
    ],
    tech: ["Python", "pandas", "python-pptx", "OpenXML", "openpyxl", "Power BI", "DAX", "VBA"],
  },
  {
    area: "Workforce and cost analytics",
    built: [
      "A staffing KPI dashboard with data uploads controlled by role",
      "Pipelines for headcount, compensation and people-cost forecasting",
      "A simulator that shows how policy changes affect cost and margin",
    ],
    tech: ["Next.js", "TypeScript", "Python", "pandas", "Flask", "Google Cloud Storage", "Power BI"],
  },
  {
    area: "AI platform and training",
    built: [
      "An internal catalogue where teams find and install agents, skills and MCP servers",
      "A registry of MCP servers, plus server templates with sign-in and container deployment",
      "Reusable skills for coding agents, such as masking data before a model sees it, pulling ERP and HR data, building slide decks and drafting email",
      "A platform where business users run their own scripts behind a code-safety check, and an agent explains and repairs failures",
      "Cloud cost guardrails and budget alerts for AI workloads",
      "A security review of internet-facing apps, run with a coding agent",
      "A self-hosted deployment of an open-source agent with a chat gateway",
      "Handbooks and setup guides for teams adopting AI models and coding agents",
    ],
    tech: ["MCP", "Python", "FastAPI", "Azure Functions", "Azure Container Apps", "Azure AI Foundry", "Vertex AI", "Docker", "Bicep", "PowerShell"],
  },
  {
    area: "Programme and project management",
    built: [
      "Running a finance AI programme, with tooling I built to track its use cases, commitments and follow-ups",
      "Planning and tracking tools for a team of developers",
      "Sorting a backlog of proposed AI agents into true agents and ordinary automation",
      "Specifications, process maps and delivery boards for planned agents",
    ],
    tech: ["Python", "Flask", "Azure DevOps", "BPMN", "Power Automate"],
  },
  {
    area: "Data engineering",
    built: [
      "Pipelines that turn large Excel workbooks into validated, queryable datasets with historical snapshots",
      "Data extraction from a cloud data warehouse and from Spark",
      "No-code tools that let finance users define and run their own data consolidation",
    ],
    tech: ["Python", "pandas", "Parquet", "SQL", "PySpark", "Databricks", "Apps Script", "React"],
  },
  {
    area: "Small tools",
    built: [
      "Meeting transcription and summaries that run on my own machine, keeping recordings off external services",
      "A process chart viewer and a calendar sync utility",
      "A rate prediction model and a knowledge graph of operating procedures (prototypes)",
    ],
    tech: ["Python", "Whisper", "Svelte", "scikit-learn", "Neo4j"],
  },
  {
    area: "Earlier career",
    career: true,
    built: [
      "Fabindia, a craft and lifestyle retail brand (2009 to 2013): managed the technology side of its e-commerce, helped set up the project that built the mobile site, sold through online marketplaces and automated spreadsheet work; also executive assistant to the managing director",
      "Virtusa, a global IT services company (2014 to 2023, the later years on contract): four years in corporate finance, where I brought an acquired company's financial data into the parent's systems, shortened purchase-to-pay and order-to-cash cycles and worked in financial planning and analysis; from around 2018, automated its management reporting",
      "Rangsutra Crafts, a craft social enterprise (2019 to 2021): ran its online store, payments, shipping and operating procedures",
      "Yuvabe (2022 to 2024): worked as tech lead and full-stack engineer for an early-stage startup",
    ],
    tech: [],
  },
  {
    area: "IoT and home automation",
    personal: true,
    built: [
      "A microcontroller watering valve for my trees that opens on a message over the network and shuts itself off after a set time (prototype)",
      "Experiments in soil-moisture sensing on a microcontroller: reading and calibrating the sensors and bench-testing a servo",
      "A phone lockbox guarded by an AI assistant that asks for a reason before unlocking and logs every unlock (prototype)",
    ],
    tech: ["ESP8266", "NodeMCU", "Arduino", "MicroPython", "MQTT", "MCP", "Python", "SQLite"],
  },
  {
    area: "Farm and community projects",
    personal: true,
    built: [
      "An interactive 3D map of a farm, built from a land survey, where you can walk around and tap a tree to see what it is",
      "An organic farm's website, rebuilt several times over the years",
      "A registration and produce-sales app for farmers (prototype)",
      "An agent that answers questions about government schemes in Indian languages, drawing on a knowledge base and web search (prototype)",
      "An introductory AI session for Tamil-speaking facilitators, with an English-Tamil voice translator app",
      "A calculator that turns a carbon figure into everyday equivalents (prototype)",
    ],
    tech: ["three.js", "Next.js", "Astro", "React", "Django", "FastAPI", "LangGraph", "Flutter"],
  },
  {
    area: "Personal apps",
    personal: true,
    built: [
      "A buy-in tracker for home poker games that works out who pays whom at the end of the night",
      "A daily habit tracker with streaks",
      "A pipeline that moves heart-rate variability and sleep data from my phone into a database, where an AI coach reads it to write my weekly training plans",
      "A goal tracker that checks tasks against the time actually logged",
      "A command-line tool that helps a group of friends agree on a movie",
    ],
    tech: ["Next.js", "React", "TypeScript", "Firebase", "Python", "SQLite", "Flask", "Rust", "iOS Shortcuts"],
  },
  {
    area: "Websites for friends and small organisations",
    personal: true,
    built: [
      "Websites for a surf school, a theatre artist, a yoga teacher, Breakneck (an adventure-travel group) and an impact-measurement consultancy",
      "The RSVP site for my own wedding",
      "An impact page on the Rangsutra Crafts online store",
      "LeMiRide and LeMiWander, a booking app and a travel site for a bike-rental and travel startup (prototypes)",
      "A stock-management app and store scripts for a small retail business",
    ],
    tech: ["Astro", "Svelte", "Gatsby", "Next.js", "Vue", "Contentful", "Shopify", "Django", "Flutter"],
  },
];
