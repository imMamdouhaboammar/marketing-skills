# Marketing Skills for AI Agents

[![Version](https://img.shields.io/badge/version-2.10.0-blue.svg)](VERSIONS.md)
[![Agent Skills Spec](https://img.shields.io/badge/spec-Agent%20Skills-0052CC.svg)](https://agentskills.io)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Claude Code](https://img.shields.io/badge/plugin-Claude%20Code-7C3AED.svg)](#claude-code-plugin)
[![Codex Plugin](https://img.shields.io/badge/plugin-OpenAI%20Codex-10A37F.svg)](#codex-plugin)

A comprehensive suite of **49 specialized AI Agent Skills**, **51 Zero-Dependency CLI Tools**, and **MCP Integrations** built for technical marketers, founders, and AI coding agents. 

Designed to equip agents like **Claude Code**, **OpenAI Codex**, **Cursor**, **Windsurf**, and **Gemini** with expert-level frameworks for Conversion Rate Optimization (CRO), SEO, AI-Search Optimization (GEO), Paid Ads, Revenue Operations (RevOps), Cold Email, Copywriting, Product Marketing, and Growth Engineering.

---

## 📋 Table of Contents

- [🧠 Neural System Architecture](#-neural-system-architecture)
- [✨ Key Capabilities](#-key-capabilities)
- [📦 Available Skills (49 Skills)](#-available-skills-49-skills)
- [🛠️ Execution Tools & Integrations (51 CLIs + MCP)](#️-execution-tools--integrations-51-clis--mcp)
- [🚀 Quick Start & Installation](#-quick-start--installation)
  - [Option 1: Vercel Skills CLI (Recommended)](#option-1-vercel-skills-cli-recommended)
  - [Option 2: Claude Code Plugin](#option-2-claude-code-plugin)
  - [Option 3: OpenAI Codex Plugin](#option-3-openai-codex-plugin)
  - [Option 4: Cross-Agent Universal Copy (.agents/skills)](#option-4-cross-agent-universal-copy-agentsskills)
- [🧪 Verification & Testing](#-verification--testing)
- [📄 License & Credits](#-license--credits)

---

## 🧠 Neural System Architecture

All skills and execution tools in this repository form an interconnected **Neural Connection Network**. The `product-marketing` skill serves as the central context nucleus, propagating brand positioning, target personas, and value propositions across all specialized cognitive clusters down to CLI motor execution synapses.

```
                      ┌──────────────────────────────────────────────────────────┐
                      │              AGENT INTERFACE GATEWAYS                    │
                      │   Claude Code (/plugin)  │  Codex (.codex-plugin)       │
                      │   Universal Spec (.agents/skills)                        │
                      └──────────────────────────┬───────────────────────────────┘
                                                 │ (Signal Ingestion)
                                                 ▼
                      ┌──────────────────────────────────────────────────────────┐
                      │            LAYER 1: CORE CONTEXT NUCLEUS                 │
                      │                 product-marketing                        │
                      │       (Positioning, ICP, Value Prop, Product Brief)      │
                      └──────────────────────────┬───────────────────────────────┘
                                                 │
                   ┌─────────────────────────────┴─────────────────────────────┐
                   ▼                                                           ▼
┌───────────────────────────────────────────┐             ┌───────────────────────────────────────────┐
│   LAYER 2A: STRATEGIC INTELLIGENCE        │             │   LAYER 2B: ANALYTICS & ATTRIBUTION       │
│  customer-research │ marketing-psychology │             │    analytics  │  attribution  │  ab-testing │
│  competitor-profiling │ competitors       │             └─────────────────────┬─────────────────────┘
│  marketing-plan │ marketing-council       │                                   │
└──────────────────┬────────────────────────┘                                   │
                   │                                                            │
 ┌─────────────────┼───────────────────────────┬────────────────────────────────┤
 ▼                 ▼                           ▼                                ▼
┌─────────────────────┐ ┌─────────────────────────┐ ┌───────────────────────┐ ┌───────────────────────┐
│  LAYER 3.1: SEO &   │ │ LAYER 3.2: CONVERSION   │ │ LAYER 3.3: COPY &     │ │ LAYER 3.4: PAID &     │
│     DISCOVERY       │ │      ENGINEERING        │ │   MEDIA GENERATION    │ │     GROWTH LOOPS      │
└──────────┬──────────┘ └────────────┬────────────┘ └───────────┬───────────┘ └───────────┬───────────┘
           │                         │                          │                         │
           └─────────────────────────┼──────────────────────────┴─────────────────────────┘
                                     │ (Synaptic Motor Trigger)
                                     ▼
                      ┌──────────────────────────────────────────────────────────┐
                      │             LAYER 4: MOTOR EXECUTION SYNAPSES            │
                      │  51 Zero-Dependency Node.js CLIs + Native MCP & Composio │
                      └──────────────────────────────────────────────────────────┘
```

> Read the full architectural specification in **[`NEURAL_SYSTEM.md`](NEURAL_SYSTEM.md)**.

---

## ✨ Key Capabilities

- 🎯 **Conversion Engineering & CRO**: Audit landing pages, optimize signup flows, design in-app paywalls, and architect A/B experiments.
- 🔍 **SEO & Generative Engine Optimization (GEO)**: Optimize for traditional Google search and AI search engines (ChatGPT, Perplexity, Gemini, Claude).
- ✍️ **High-Converting Copywriting**: Frameworks for homepages, landing pages, cold emails, lifecycle email flows, and social content.
- 📈 **Growth Engineering & Virality**: Build viral referral programs, lead magnets, free tools, cancellation flows, and co-marketing partnerships.
- ⚙️ **Revenue Operations & GTM**: Lead scoring, sales enablement collateral, pricing strategy, launch playbooks, and competitive battlecards.

---

## 📦 Available Skills (49 Skills)

| Skill | Category | Description |
|-------|----------|-------------|
| [**`product-marketing`**](skills/product-marketing/) | **Core Nucleus** | Establishes the foundational product marketing context read by all other skills. |
| [**`ab-testing`**](skills/ab-testing/) | Paid & Analytics | Plan, design, and run hypothesis-driven A/B tests and growth experiments. |
| [**`ad-creative`**](skills/ad-creative/) | Paid & Ads | Generate, iterate, and scale high-performing ad copy and creative formats. |
| [**`ads`**](skills/ads/) | Paid & Ads | Campaign management across Google Ads, Meta, LinkedIn Ads, TikTok, and Twitter. |
| [**`ai-seo`**](skills/ai-seo/) | Search & GEO | Optimize content for AI search engines, LLM citations, and AI Overviews. |
| [**`analytics`**](skills/analytics/) | Paid & Analytics | Audit and implement tracking schemas across GA4, Mixpanel, Segment, PostHog. |
| [**`aso`**](skills/aso/) | Search & App | App Store Optimization (ASO) for Apple App Store and Google Play listings. |
| [**`attribution`**](skills/attribution/) | Paid & Analytics | Multi-touch attribution modeling and conversion signal reconciliation. |
| [**`churn-prevention`**](skills/churn-prevention/) | Growth & Retention | Build cancellation flows, save offers, and payment recovery mechanisms. |
| [**`co-marketing`**](skills/co-marketing/) | Growth & Partnerships | Identify co-marketing partners and structure joint marketing campaigns. |
| [**`cold-email`**](skills/cold-email/) | Copy & Outreach | Draft B2B cold outreach sequences optimized for high reply rates. |
| [**`community-marketing`**](skills/community-marketing/) | Growth & Community | Build and leverage communities on Reddit, Discord, and Slack to drive growth. |
| [**`competitor-profiling`**](skills/competitor-profiling/) | Strategy & Intel | Deep URL-based competitor analysis, positioning matrices, and teardowns. |
| [**`competitors`**](skills/competitors/) | Strategy & Sales | Build comparison pages ("vs") and alternative landing pages for SEO/Sales. |
| [**`content-strategy`**](skills/content-strategy/) | Content & Search | Topic cluster modeling, editorial planning, and content gap identification. |
| [**`copy-editing`**](skills/copy-editing/) | Copy & Content | Edit and polish marketing copy for conciseness, tone, and conversion power. |
| [**`copywriting`**](skills/copywriting/) | Copy & Content | Write persuasive landing page copy, value propositions, and messaging. |
| [**`cro`**](skills/cro/) | Conversion Engineering | Complete Conversion Rate Optimization audit for landing pages and web flows. |
| [**`customer-research`**](skills/customer-research/) | Strategy & Intel | Synthesize customer interviews, reviews, and survey feedback into actionable insights. |
| [**`directory-submissions`**](skills/directory-submissions/) | GTM & Outreach | Submit products to SaaS, AI agent, startup, and review directories. |
| [**`emails`**](skills/emails/) | Copy & Lifecycle | Design automated email drip sequences, onboarding flows, and newsletters. |
| [**`free-tools`**](skills/free-tools/) | Growth & Engineering | Plan and design free tools for lead generation and programmatic SEO. |
| [**`image`**](skills/image/) | Media & Creative | Generate and optimize marketing images, social cards, and ad visuals. |
| [**`influencer-marketing`**](skills/influencer-marketing/) | Growth & Paid | Discover creators, structure creator briefs, and track ROI. |
| [**`launch`**](skills/launch/) | GTM & Strategy | Product Hunt, Hacker News, press, and email launch playbooks. |
| [**`lead-magnets`**](skills/lead-magnets/) | Growth & Conversion | Design high-converting lead magnets, cheatsheets, and gated assets. |
| [**`marketing-council`**](skills/marketing-council/) | Strategy & Intel | Multi-agent board of advisors simulating CMO, CRO, SEO, and Brand experts. |
| [**`marketing-ideas`**](skills/marketing-ideas/) | Strategy & Intel | Brainstorm growth experiments, channel tactics, and marketing initiatives. |
| [**`marketing-loops`**](skills/marketing-loops/) | Strategy & Ops | Architect self-running, autonomous AI marketing loops and recurring tasks. |
| [**`marketing-plan`**](skills/marketing-plan/) | Strategy & GTM | Comprehensive AARRR-structured marketing strategy and roadmap. |
| [**`marketing-psychology`**](skills/marketing-psychology/) | Strategy & Intel | Apply behavioral economics, cognitive biases, and psychological triggers. |
| [**`offers`**](skills/offers/) | Conversion & Sales | Structure high-perceived-value offers, risk reversals, and guarantee framing. |
| [**`onboarding`**](skills/onboarding/) | Conversion Engineering | Post-signup activation flows, product tours, and time-to-value optimization. |
| [**`paywalls`**](skills/paywalls/) | Conversion Engineering | Design and test in-app paywalls, upgrade modals, and feature gates. |
| [**`popups`**](skills/popups/) | Conversion Engineering | High-converting popups, slide-ins, exit-intent modals, and banners. |
| [**`pricing`**](skills/pricing/) | Strategy & GTM | Pricing model design, tier packaging, value metric selection, and monetization. |
| [**`programmatic-seo`**](skills/programmatic-seo/) | Search & Engineering | Scale landing pages dynamically using database-driven templates. |
| [**`prospecting`**](skills/prospecting/) | Sales & Outreach | Demand-signal prospecting, lead list building, and ICP qualification. |
| [**`public-relations`**](skills/public-relations/) | GTM & Outreach | Press release writing, media list curation, embargo pitches, and media relations. |
| [**`referrals`**](skills/referrals/) | Growth & Retention | Design word-of-mouth viral loops, referral rewards, and affiliate programs. |
| [**`revops`**](skills/revops/) | Sales & Operations | Revenue operations, lead lifecycle stages, and CRM handoff automation. |
| [**`sales-enablement`**](skills/sales-enablement/) | Sales & Strategy | Sales decks, battlecards, one-pagers, demo scripts, and objection handlers. |
| [**`schema`**](skills/schema/) | Search & Technical | JSON-LD schema markup generation (Product, FAQ, Article, Organization). |
| [**`seo-audit`**](skills/seo-audit/) | Search & Technical | Comprehensive technical, on-page, and content SEO audit. |
| [**`signup`**](skills/signup/) | Conversion Engineering | Frictionless registration form design and friction reduction. |
| [**`site-architecture`**](skills/site-architecture/) | Search & Technical | Information architecture, URL structure, and internal linking hierarchy. |
| [**`sms`**](skills/sms/) | Copy & Lifecycle | SMS/MMS marketing flows, transactional texts, and compliance guidelines. |
| [**`social`**](skills/social/) | Copy & Content | Multi-platform social content for LinkedIn, Twitter/X, and Instagram. |
| [**`video`**](skills/video/) | Media & Creative | Video scripts, AI avatar generation (HeyGen), and programmatic video. |

---

## 🛠️ Execution Tools & Integrations (51 CLIs + MCP)

This repository includes a dedicated zero-dependency tooling layer in [`tools/`](tools/) registered in [`tools/REGISTRY.md`](tools/REGISTRY.md):

- **51 Zero-Dependency Node.js CLIs (`tools/clis/*.js`)**: Execute API calls directly (`node tools/clis/ga4.js`, `node tools/clis/stripe.js`, `node tools/clis/resend.js`).
- **Native MCP Protocol Tools**: Direct integration with MCP-enabled tools (`ga4`, `stripe`, `resend`, `mailchimp`, `google-ads`, `zapier`).
- **Composio OAuth Layer (`tools/composio/`)**: Unified MCP server access to OAuth-heavy applications (HubSpot, Salesforce, Meta Ads, LinkedIn Ads, Slack).

---

## 🚀 Quick Start & Installation

### Option 1: Vercel Skills CLI (Recommended)

Install skills instantly using [skills CLI](https://github.com/vercel-labs/skills):

```bash
# Install all marketing skills globally or locally
npx skills add imMamdouhaboammar/marketing-skills

# Install specific skills
npx skills add imMamdouhaboammar/marketing-skills --skill cro copywriting seo-audit

# List available skills
npx skills add imMamdouhaboammar/marketing-skills --list
```

### Option 2: Claude Code Plugin

Install directly in **Claude Code**:

```bash
# Add the marketplace
/plugin marketplace add imMamdouhaboammar/marketing-skills

# Install all skills
/plugin install marketing-skills
```

### Option 3: OpenAI Codex Plugin

Install in **OpenAI Codex** via `.codex-plugin`:

```bash
# Register marketplace in Codex
/plugin marketplace add imMamdouhaboammar/marketing-skills

# Install marketing-skills plugin
/plugin install marketing-skills
```

### Option 4: Cross-Agent Universal Copy (.agents/skills)

Copy the skills folder directly into any project using the universal `.agents/skills/` standard:

```bash
git clone https://github.com/imMamdouhaboammar/marketing-skills.git
mkdir -p .agents/skills
cp -r marketing-skills/skills/* .agents/skills/
```

---

## 🧪 Verification & Testing

Every skill in this repository strictly adheres to the [Agent Skills Specification](https://agentskills.io/specification.md). You can validate skill compliance at any time:

```bash
# Audit all skills against spec
./validate-skills.sh

# Run Node syntax check on execution CLIs
node --check tools/clis/ga4.js
```

---

## 📄 License & Credits

- **License**: [MIT License](LICENSE)
- **Created By**: Mamdouh Abo Ammar & Corey Haines
- **Specification**: Follows the open [Agent Skills Standard](https://agentskills.io)
