// What Anando has built, at the level he is happy to say in public: kinds of
// systems, not how any one of them works. The "What are you looking for?" agent
// answers from it, and it is published as it stands at /work, /work.md and
// /llms-full.txt. So keep it general: no organisation, product or people names (Fabindia, a past employer, is the one exception),
// no process detail, no figures. Anything written here is public.
// Prototypes and experiments are labelled as such; anything unlabelled is in real use.
export interface Capability {
  area: string;
  built: string[];
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
      "A collections platform with dashboards and AI agents that help a finance team follow up on unpaid invoices (built as part of a team)",
      "Agents that draft customer emails for a person to review, and that sort incoming replies",
      "Agents that turn meeting and call transcripts into structured follow-up records",
      "Browser and document automation for timesheets and invoicing",
      "An expense review platform that reads claims and receipts with document AI and checks them against policy with an LLM workflow, with a person approving",
    ],
    tech: ["Next.js", "React", "TypeScript", "Python", "FastAPI", "LangGraph", "Azure OpenAI", "Azure Document Intelligence", "Playwright", "Microsoft Graph"],
  },
  {
    area: "Chat agents for business data",
    built: [
      "Chat agents inside Teams and other workplace chat tools that answer revenue and KPI questions in plain language, with the arithmetic done by code rather than by the model",
      "An analysis web app where the model builds tables on demand next to the conversation",
      "A guardrailed question-and-answer assistant that answers only from approved material and declines everything else",
      "MCP servers that expose analysis tools to any compatible agent",
    ],
    tech: ["Python", "LangGraph", "LangChain", "Azure OpenAI", "Gemini", "Vertex AI", "MCP", "FastAPI", "Streamlit", "Bot Framework", "Cloud Run"],
  },
  {
    area: "Reporting automation",
    built: [
      "Generators that build management and board decks straight from workbooks, with automated checks of every slide against the source data",
      "Pipelines that produce recurring multi-sheet Excel reporting packs",
      "Weekly cost and margin packs assembled from APIs instead of by hand",
      "Power BI reports, tabular models and DAX measures",
    ],
    tech: ["Python", "pandas", "python-pptx", "OpenXML", "openpyxl", "Power BI", "DAX", "VBA"],
  },
  {
    area: "Workforce and cost analytics",
    built: [
      "A staffing KPI dashboard with role-based data upload",
      "Pipelines for headcount, compensation and people-cost forecasting",
      "A simulator for the cost and margin impact of policy changes",
    ],
    tech: ["Next.js", "TypeScript", "Python", "pandas", "Flask", "Google Cloud Storage", "Power BI"],
  },
  {
    area: "AI platform and team enablement",
    built: [
      "An internal catalog where teams find and install agents, skills and MCP servers",
      "An MCP server registry and server templates with sign-in and container deployment",
      "Reusable skills for coding agents, such as masking data before a model sees it, pulling ERP and HR data, building slide decks and drafting mail",
      "A platform where business users run their own scripts and an agent explains and repairs failures, behind a code-safety check",
      "Cloud cost guardrails and budget alerts for AI workloads",
      "A security review of internet-facing apps, run with a coding agent",
      "A self-hosted deployment of an open-source agent with a chat gateway",
      "Handbooks and setup guides for teams adopting AI models and coding agents",
    ],
    tech: ["MCP", "Python", "FastAPI", "Azure Functions", "Azure Container Apps", "Azure AI Foundry", "Vertex AI", "Docker", "Bicep", "PowerShell"],
  },
  {
    area: "Program and project management",
    built: [
      "Running a finance AI program: use cases, stand-ups, commitments and follow-ups, with tooling built to keep track of it",
      "Planning and tracking tools for a team of developers",
      "Assessing a backlog of proposed AI agents to separate true agents from ordinary automation",
      "Functional specifications, process maps and delivery boards for planned agents",
    ],
    tech: ["Python", "Flask", "Azure DevOps", "BPMN", "Power Automate"],
  },
  {
    area: "Data engineering",
    built: [
      "Pipelines that turn large Excel workbooks into validated, queryable datasets with historical snapshots",
      "Extraction from a cloud data warehouse and Spark",
      "Self-serve tools that let finance users define and run their own data consolidation without code",
    ],
    tech: ["Python", "pandas", "Parquet", "SQL", "PySpark", "Databricks", "Apps Script", "React"],
  },
  {
    area: "Earlier career in finance and retail",
    career: true,
    built: [
      "Fabindia, a craft and lifestyle retail brand (2009 to 2013): managed the technology side of its e-commerce, which included helping set up the engagement that built the mobile site, selling through online marketplaces and automating spreadsheet work; also executive assistant to the managing director",
      "A global IT services company: four years in corporate finance, bringing an acquired company's financial data into the parent's systems, shortening purchase-to-pay and order-to-cash cycles and working in financial planning and analysis; then, from around 2018, automating its management reporting",
      "A craft social enterprise (2019 to 2021): ran its online store, payments, shipping and operating procedures",
      "An early-stage startup: tech lead and full-stack engineer",
    ],
    tech: ["Excel", "Power BI", "Power Query", "Python", "Shopify"],
  },
  {
    area: "Small tools",
    built: [
      "Local meeting transcription and summaries that keep recordings off external services",
      "A process chart viewer and a calendar sync utility",
      "Prototypes: a rate prediction model and a knowledge graph of operating procedures",
    ],
    tech: ["Python", "Whisper", "Svelte", "scikit-learn", "Neo4j"],
  },
  {
    area: "IoT and home automation",
    personal: true,
    built: [
      "A plant-watering valve on a microcontroller that opens when it gets a message over the home network and shuts itself off after a set time (my own garden, prototype)",
      "Soil-moisture sensing on a microcontroller: reading the sensors, calibrating them, and bench-testing a servo (experiments)",
      "A phone lockbox guarded by an AI assistant, which asks for a reason before unlocking and keeps a log of every time (prototype)",
    ],
    tech: ["ESP8266", "NodeMCU", "Arduino", "MicroPython", "MQTT", "MCP", "Python", "SQLite"],
  },
  {
    area: "Farm and community projects",
    personal: true,
    built: [
      "An interactive 3D map of a farm, built from a land survey, where you can walk around and tap a tree to see what it is",
      "The website of an organic farm, rebuilt several times over the years",
      "A registration and produce-sales app for farmers (prototype)",
      "A question-answering agent about government schemes that replies in Indian languages, from a knowledge base and web search (prototype)",
      "An introduction-to-AI session for Tamil-speaking facilitators, with a voice translator app between English and Tamil",
      "A calculator that turns a carbon figure into everyday equivalents (prototype)",
    ],
    tech: ["three.js", "Next.js", "Astro", "React", "Django", "FastAPI", "LangGraph", "Flutter"],
  },
  {
    area: "Personal apps",
    personal: true,
    built: [
      "A buy-in tracker for home poker games that works out who pays whom at the end of the night (used with friends)",
      "A daily habit tracker with streaks",
      "A pipeline that takes heart-rate variability and sleep data from my phone into a database, which an AI coach reads to write my weekly training plans",
      "A goal tracker that checks tasks against the time actually logged",
      "A command-line tool that helps a group of friends agree on a movie",
    ],
    tech: ["Next.js", "React", "TypeScript", "Firebase", "Python", "SQLite", "Flask", "Rust", "iOS Shortcuts"],
  },
  {
    area: "Websites for friends and small organisations",
    personal: true,
    built: [
      "Websites for a surf school, a theatre artist, a yoga teacher, an adventure-travel group and an impact-measurement consultancy",
      "An RSVP site for a friend's wedding",
      "An impact page on a craft social enterprise's online store",
      "A booking app and travel site for a bike-rental startup (prototype)",
      "A stock-management app and store scripts for a small retail business",
    ],
    tech: ["Astro", "Svelte", "Gatsby", "Next.js", "Vue", "Contentful", "Shopify", "Django", "Flutter"],
  },
];
