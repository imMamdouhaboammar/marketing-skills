#!/usr/bin/env bun
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { execFile } from "child_process";
import { promisify } from "util";

import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { SSEServerTransport } from "@modelcontextprotocol/sdk/server/sse.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
  ListResourcesRequestSchema,
  ReadResourceRequestSchema
} from "@modelcontextprotocol/sdk/types.js";

dotenv.config();

const execFileAsync = promisify(execFile);
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT_DIR = path.resolve(__dirname, "..");
const SKILLS_DIR = path.join(ROOT_DIR, "skills");
const CLIS_DIR = path.join(ROOT_DIR, "tools", "clis");
const INTEGRATIONS_DIR = path.join(ROOT_DIR, "tools", "integrations");
const REGISTRY_FILE = path.join(ROOT_DIR, "tools", "REGISTRY.md");

const SERVER_NAME = "marketing-skills-mcp";
const SERVER_VERSION = "2.10.0";

// Helper: Parse YAML frontmatter simple key-values
function parseFrontmatter(content) {
  const match = content.match(/^---\s*\n([\s\S]*?)\n---/);
  if (!match) return { name: "", description: "" };
  const lines = match[1].split("\n");
  const result = {};
  for (const line of lines) {
    const colonIdx = line.indexOf(":");
    if (colonIdx !== -1) {
      const key = line.slice(0, colonIdx).trim();
      let value = line.slice(colonIdx + 1).trim();
      if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
        value = value.slice(1, -1);
      }
      result[key] = value;
    }
  }
  return result;
}

// Instantiate MCP Server Instance
function createMcpServer() {
  const server = new Server(
    {
      name: SERVER_NAME,
      version: SERVER_VERSION,
    },
    {
      capabilities: {
        tools: {},
        resources: {}
      },
    }
  );

  // List available tools
  server.setRequestHandler(ListToolsRequestSchema, async () => {
    return {
      tools: [
        {
          name: "list_marketing_skills",
          description: "List all marketing skills available in the repository with their descriptions and categories.",
          inputSchema: {
            type: "object",
            properties: {}
          }
        },
        {
          name: "get_marketing_skill",
          description: "Get detailed instructions and playbooks for a specific marketing skill (e.g. 'cro', 'emails', 'ad-creative', 'ab-testing', 'seo-audit').",
          inputSchema: {
            type: "object",
            properties: {
              skill_name: {
                type: "string",
                description: "Name of the skill directory (e.g., 'cro', 'emails', 'seo-audit')"
              },
              subfile: {
                type: "string",
                description: "Optional subfile path relative to skill folder, e.g. 'references/checklist.md'"
              }
            },
            required: ["skill_name"]
          }
        },
        {
          name: "list_marketing_clis",
          description: "List all 60+ zero-dependency CLI integrations available (e.g. GA4, Ahrefs, Semrush, Google Ads, Resend, Mailchimp, Klaviyo, Stripe).",
          inputSchema: {
            type: "object",
            properties: {}
          }
        },
        {
          name: "get_marketing_tool_docs",
          description: "Get integration documentation, API key setup instructions, and available endpoints for a specific marketing tool CLI.",
          inputSchema: {
            type: "object",
            properties: {
              tool_name: {
                type: "string",
                description: "Tool identifier (e.g., 'ga4', 'resend', 'ahrefs', 'google-ads', 'klaviyo')"
              }
            },
            required: ["tool_name"]
          }
        },
        {
          name: "run_marketing_cli",
          description: "Execute a marketing CLI tool from tools/clis/ (e.g. 'ahrefs', 'resend', 'ga4', 'semrush'). Requires corresponding environment variable credentials.",
          inputSchema: {
            type: "object",
            properties: {
              tool_name: {
                type: "string",
                description: "Tool script name or basename (e.g. 'ahrefs', 'resend', 'ga4.js')"
              },
              args: {
                type: "array",
                items: { type: "string" },
                description: "Command line arguments (e.g. ['backlinks', 'list', '--target', 'example.com'] or ['--help'])"
              }
            },
            required: ["tool_name"]
          }
        },
        {
          name: "search_marketing_knowledge",
          description: "Search across all marketing skills, playbooks, and tool documentation for specific keywords.",
          inputSchema: {
            type: "object",
            properties: {
              query: {
                type: "string",
                description: "Search query (e.g., 'conversion rate', 'bounce rate', 'email subject line', 'facebook ads')"
              }
            },
            required: ["query"]
          }
        }
      ]
    };
  });

  // Handle Tool Calls
  server.setRequestHandler(CallToolRequestSchema, async (request) => {
    const { name, arguments: args } = request.params;

    if (name === "list_marketing_skills") {
      if (!fs.existsSync(SKILLS_DIR)) {
        return { content: [{ type: "text", text: "No skills directory found." }] };
      }

      const dirs = fs.readdirSync(SKILLS_DIR).filter(d => {
        const full = path.join(SKILLS_DIR, d);
        return fs.statSync(full).isDirectory() && fs.existsSync(path.join(full, "SKILL.md"));
      });

      const skills = dirs.map(d => {
        const skillPath = path.join(SKILLS_DIR, d, "SKILL.md");
        const content = fs.readFileSync(skillPath, "utf-8");
        const fm = parseFrontmatter(content);
        return {
          name: d,
          title: fm.name || d,
          description: fm.description || "No description provided."
        };
      });

      return {
        content: [{
          type: "text",
          text: JSON.stringify({ total: skills.length, skills }, null, 2)
        }]
      };
    }

    if (name === "get_marketing_skill") {
      const skillName = args.skill_name.trim();
      const subfile = args.subfile ? args.subfile.trim() : "SKILL.md";
      const targetPath = path.normalize(path.join(SKILLS_DIR, skillName, subfile));

      if (!targetPath.startsWith(SKILLS_DIR)) {
        throw new Error("Access denied: path outside skills directory.");
      }

      if (!fs.existsSync(targetPath)) {
        throw new Error(`Skill file not found: ${skillName}/${subfile}`);
      }

      const content = fs.readFileSync(targetPath, "utf-8");
      return {
        content: [{ type: "text", text: content }]
      };
    }

    if (name === "list_marketing_clis") {
      if (!fs.existsSync(CLIS_DIR)) {
        return { content: [{ type: "text", text: "No CLI directory found." }] };
      }

      const files = fs.readdirSync(CLIS_DIR).filter(f => f.endsWith(".js"));
      const tools = files.map(f => {
        const toolName = path.basename(f, ".js");
        return {
          name: toolName,
          script: f,
          command: `node tools/clis/${f}`
        };
      });

      return {
        content: [{
          type: "text",
          text: JSON.stringify({ total: tools.length, tools }, null, 2)
        }]
      };
    }

    if (name === "get_marketing_tool_docs") {
      const toolName = args.tool_name.trim().replace(/\.js$/, "");
      const docPath = path.join(INTEGRATIONS_DIR, `${toolName}.md`);

      if (fs.existsSync(docPath)) {
        const content = fs.readFileSync(docPath, "utf-8");
        return { content: [{ type: "text", text: content }] };
      }

      // Fallback to CLI readme or registry
      if (fs.existsSync(REGISTRY_FILE)) {
        const content = fs.readFileSync(REGISTRY_FILE, "utf-8");
        return {
          content: [{
            type: "text",
            text: `Detailed doc for '${toolName}' not found in tools/integrations/. Here is the master registry:\n\n${content}`
          }]
        };
      }

      throw new Error(`Documentation for tool '${toolName}' not found.`);
    }

    if (name === "run_marketing_cli") {
      let toolName = args.tool_name.trim();
      if (!toolName.endsWith(".js")) toolName += ".js";

      const scriptPath = path.normalize(path.join(CLIS_DIR, toolName));
      if (!scriptPath.startsWith(CLIS_DIR) || !fs.existsSync(scriptPath)) {
        throw new Error(`CLI Tool script not found: ${toolName}`);
      }

      const passedArgs = Array.isArray(args.args) ? args.args : [];

      try {
        // Execute via bun/node in safe child process
        const { stdout, stderr } = await execFileAsync(process.execPath || "node", [scriptPath, ...passedArgs], {
          env: { ...process.env, PAGER: "cat" },
          timeout: 30000,
          cwd: ROOT_DIR
        });

        const output = (stdout || stderr || "Command completed with no output.").trim();
        return {
          content: [{ type: "text", text: output }]
        };
      } catch (err) {
        const errOutput = (err.stdout || "") + "\n" + (err.stderr || "") + "\n" + err.message;
        return {
          content: [{ type: "text", text: `CLI Execution Error:\n${errOutput.trim()}` }],
          isError: true
        };
      }
    }

    if (name === "search_marketing_knowledge") {
      const query = args.query.toLowerCase().trim();
      const results = [];

      // Search skills
      if (fs.existsSync(SKILLS_DIR)) {
        const dirs = fs.readdirSync(SKILLS_DIR);
        for (const d of dirs) {
          const skillFile = path.join(SKILLS_DIR, d, "SKILL.md");
          if (fs.existsSync(skillFile)) {
            const content = fs.readFileSync(skillFile, "utf-8");
            if (content.toLowerCase().includes(query)) {
              results.push({ type: "skill", name: d, path: `skills/${d}/SKILL.md` });
            }
          }
        }
      }

      // Search tool integrations
      if (fs.existsSync(INTEGRATIONS_DIR)) {
        const files = fs.readdirSync(INTEGRATIONS_DIR);
        for (const f of files) {
          if (f.endsWith(".md")) {
            const docFile = path.join(INTEGRATIONS_DIR, f);
            const content = fs.readFileSync(docFile, "utf-8");
            if (content.toLowerCase().includes(query)) {
              results.push({ type: "tool_doc", name: path.basename(f, ".md"), path: `tools/integrations/${f}` });
            }
          }
        }
      }

      return {
        content: [{
          type: "text",
          text: JSON.stringify({ query, totalMatches: results.length, matches: results }, null, 2)
        }]
      };
    }

    throw new Error(`Tool standard handler for '${name}' not implemented.`);
  });

  // Resources Handler
  server.setRequestHandler(ListResourcesRequestSchema, async () => {
    return {
      resources: [
        {
          uri: "marketing://registry",
          name: "Marketing Tools Registry",
          mimeType: "text/markdown",
          description: "Full index of 60+ marketing tools, capabilities, and MCP readiness."
        },
        {
          uri: "marketing://versions",
          name: "Marketing Skills Changelog & Versions",
          mimeType: "text/markdown",
          description: "Version history and skill list update tracker."
        }
      ]
    };
  });

  server.setRequestHandler(ReadResourceRequestSchema, async (request) => {
    const uri = request.params.uri;
    if (uri === "marketing://registry") {
      const content = fs.readFileSync(REGISTRY_FILE, "utf-8");
      return { resources: [{ uri, mimeType: "text/markdown", text: content }] };
    }
    if (uri === "marketing://versions") {
      const versionsFile = path.join(ROOT_DIR, "VERSIONS.md");
      const content = fs.readFileSync(versionsFile, "utf-8");
      return { resources: [{ uri, mimeType: "text/markdown", text: content }] };
    }
    throw new Error(`Resource not found: ${uri}`);
  });

  return server;
}

// ----------------------------------------------------
// Main Execution Mode Dispatcher (Remote SSE vs Stdio)
// ----------------------------------------------------
const isStdioMode = process.argv.includes("--stdio") || process.env.MCP_TRANSPORT === "stdio";

if (isStdioMode) {
  // Stdio Mode for local CLI / Desktop apps
  const server = createMcpServer();
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("Marketing Skills MCP Server running in STDIO mode.");
} else {
  // Remote SSE Mode for ChatGPT Web, Cloud Services, Remote AI Clients
  const app = express();
  app.use(cors());
  app.use(express.json());

  const mcpServer = createMcpServer();
  const transports = new Map();

  // Root & Health Check Endpoints
  app.get("/", (req, res) => {
    res.json({
      status: "online",
      server: SERVER_NAME,
      version: SERVER_VERSION,
      mcp_sse_endpoint: "/sse",
      mcp_message_endpoint: "/messages",
      documentation: "Connect your AI Client (ChatGPT Web, Claude, Cursor) to the /sse endpoint."
    });
  });

  app.get("/health", (req, res) => {
    res.json({ status: "healthy", timestamp: new Date().toISOString() });
  });

  // SSE Transport Handlers
  app.get("/sse", async (req, res) => {
    console.log(`[Remote MCP] New SSE connection established from ${req.ip}`);
    const transport = new SSEServerTransport("/messages", res);
    transports.set(transport.sessionId, transport);
    await mcpServer.connect(transport);

    req.on("close", () => {
      console.log(`[Remote MCP] SSE Connection closed (sessionId: ${transport.sessionId})`);
      transports.delete(transport.sessionId);
    });
  });

  app.post("/messages", async (req, res) => {
    const sessionId = req.query.sessionId;
    const transport = transports.get(sessionId);
    if (transport) {
      await transport.handlePostMessage(req, res);
    } else {
      res.status(404).json({ error: "Session expired or not found" });
    }
  });

  const PORT = process.env.PORT || 3000;
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`
=====================================================
🚀 Marketing Skills Remote MCP Server is LIVE!
-----------------------------------------------------
  Server Name: ${SERVER_NAME} v${SERVER_VERSION}
  Port:        ${PORT}
  SSE URL:     http://localhost:${PORT}/sse
  Health:      http://localhost:${PORT}/health
=====================================================
    `);
  });
}
