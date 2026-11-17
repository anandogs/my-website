// What Anando has built, at the level he is happy to say in public: kinds of
// systems, not how any one of them works. Server-only — the "What are you looking
// for?" endpoint reads it; nothing here is sent to the browser. Keep it general:
// no organisation, product or people names, no process detail, no figures.
export interface Capability {
  area: string;
  built: string[];
  tech: string[];
}

export const work: Capability[] = [
  {
    area: "Finance operations automation",
    built: [
      "A collections platform with dashboards and AI agents that help a finance team follow up on unpaid invoices (deployed, built as part of a team)",
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
      "An internal catalog where teams find and install agents, skills and MCP servers (deployed)",
      "An MCP server registry and server templates with sign-in and container deployment",
      "Reusable skills for coding agents, such as masking data before a model sees it, pulling ERP and HR data, building slide decks and drafting mail",
      "A platform where business users run their own scripts and an agent explains and repairs failures, behind a code-safety check",
      "Cloud cost guardrails and budget alerts for AI workloads (deployed)",
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
    area: "Small tools",
    built: [
      "Local meeting transcription and summaries that keep recordings off external services",
      "A process chart viewer and a calendar sync utility",
      "Prototypes: a rate prediction model and a knowledge graph of operating procedures",
    ],
    tech: ["Python", "Whisper", "Svelte", "scikit-learn", "Neo4j"],
  },
];
