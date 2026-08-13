# Marketing Skills & Neural AI Agent Suite 🚀

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Agent Skills Spec](https://img.shields.io/badge/Agent_Skills_Spec-v1.0-emerald.svg)](https://agentskills.io)
[![Claude Code Plugin](https://img.shields.io/badge/Claude_Code-Plugin_Ready-7C3AED.svg)](#option-1-claude-code-plugin)
[![OpenAI Codex Plugin](https://img.shields.io/badge/OpenAI_Codex-Plugin_Ready-10B981.svg)](#option-2-openai-codex-plugin)
[![CLI Tools](https://img.shields.io/badge/CLI_Tools-51_Zero--Dep-orange.svg)](tools/REGISTRY.md)

A comprehensive collection of **95+ production-ready AI Agent Skills**, **51 Zero-Dependency Node.js CLI Tools**, **MCP Protocol Adapters**, and dual **Claude Code & OpenAI Codex Plugins**. Built for technical marketers, founders, and growth engineers who want AI coding agents to execute conversion optimization, copywriting, SEO, paid acquisition, revenue operations, and growth loops autonomously.

---

## ⚡ Quick Start (One-Command Install)

Install skills directly across any supported agent (Claude Code, OpenAI Codex, Cursor, Antigravity, Windsurf):

```bash
# Install all skills to your project
npx skills add imMamdouhaboammar/marketingskills

# Or install specific skills
npx skills add imMamdouhaboammar/marketingskills --skill cro copywriting seo-audit

# List all available skills
npx skills add imMamdouhaboammar/marketingskills --list
```

---

## 🧠 Neural Connection Architecture

This repository operates on a 4-Layer **Neural Connection Architecture** ([`NEURAL_SYSTEM.md`](NEURAL_SYSTEM.md)). The central context nucleus (`product-marketing`) activates first, routing signals to specialized intelligence clusters, domain skills, and execution synapses.

```
                    ┌─────────────────────────────────────────┐
                    │     Layer 1: Context Nucleus            │
                    │        product-marketing                │
                    └────────────────────┬────────────────────┘
                                         │
        ┌────────────────────────────────┼────────────────────────────────┐
        ▼                                ▼                                ▼
┌───────────────────────┐    ┌───────────────────────┐    ┌───────────────────────┐
│ Layer 2: Intelligence │    │  Layer 3: Domain      │    │  Layer 4: Execution   │
│ Strategic & Analytics │ ➔  │  CRO, SEO, Copy, Ads  │ ➔  │ 51 CLI Tools + MCPs   │
│ Research & Psychology │    │  Growth & Virality    │    │ (tools/clis/*.js)     │
└───────────────────────┘    └───────────────────────┘    └───────────────────────┘
```

> 📘 Read the full specification & synaptic map in [NEURAL_SYSTEM.md](NEURAL_SYSTEM.md).

---

## 🧩 Plugin Marketplace Support

### Option 1: Claude Code Plugin
Install directly via Claude Code's native plugin manager:
```bash
/plugin marketplace add imMamdouhaboammar/marketingskills
/plugin install marketing-skills
```

### Option 2: OpenAI Codex Plugin
Install via OpenAI Codex plugin manifests (`.codex-plugin/plugin.json` & `.codex-plugin/marketplace.json`):
```bash
/plugin marketplace add imMamdouhaboammar/marketingskills
/plugin install marketing-skills
```

---

## 📚 Core Skills Index (49 Core Skills)

| Skill | Category | Description |
|-------|----------|-------------|
| [product-marketing](skills/product-marketing/) | Nucleus | Foundation context document (read by all skills first) for product brief, positioning, and target ICP |
| [cro](skills/cro/) | Conversion | Conversion rate optimization audit and heuristic analysis for pages and forms |
| [copywriting](skills/copywriting/) | Copy & Content | Conversion copy, landing pages, homepages, feature pages, and headline formulas |
| [copy-editing](skills/copy-editing/) | Copy & Content | Edits, polishes, and refreshes existing marketing copy and content |
| [seo-audit](skills/seo-audit/) | SEO & Discovery | Comprehensive technical, on-page, and content SEO audits |
| [ai-seo](skills/ai-seo/) | SEO & Discovery | Optimizes content for AI search engines (Perplexity, ChatGPT, AI Overviews) |
| [site-architecture](skills/site-architecture/) | SEO & Discovery | URL structure, internal linking, and page hierarchy mapping |
| [programmatic-seo](skills/programmatic-seo/) | SEO & Discovery | Template-driven landing pages at scale from structured datasets |
| [schema](skills/schema/) | SEO & Discovery | JSON-LD structured data implementation (Product, FAQ, Article, Organization) |
| [ads](skills/ads/) | Paid Acquisition | Google Ads, Meta Ads, LinkedIn Ads campaign setup, structure, and bidding |
| [ad-creative](skills/ad-creative/) | Paid Acquisition | Ad creative generation — headlines, primary text, hooks, and visual prompts |
| [analytics](skills/analytics/) | Analytics | Tracking plans, GA4, Mixpanel, event naming, and conversion measurement |
| [attribution](skills/attribution/) | Analytics | Multi-touch attribution modeling, UTM parameters, and channel performance |
| [ab-testing](skills/ab-testing/) | Experimentation | Experiment design, sample size calculation, hypothesis framing, and test analysis |
| [cold-email](skills/cold-email/) | B2B Outreach | High-converting B2B cold email copy, follow-up sequences, and reply-rate optimization |
| [emails](skills/emails/) | Lifecycle Email | Drip campaigns, onboarding emails, win-back flows, and newsletter design |
| [social](skills/social/) | Content & Media | Social content strategy, LinkedIn posts, X/Twitter threads, and engagement loops |
| [video](skills/video/) | Content & Media | Programmatic video scripts, short-form video concepts, and AI video prompts |
| [image](skills/image/) | Content & Media | Marketing image generation prompts, social cards, hero graphics, and visual assets |
| [sms](skills/sms/) | Messaging | SMS marketing flows, abandoned cart texts, compliance, and event notifications |
| [referrals](skills/referrals/) | Growth Loops | Referral program design, affiliate mechanics, reward structures, and viral coefficient optimization |
| [free-tools](skills/free-tools/) | Growth Engineering | Lead-gen free tools, calculators, widgets, and viral interactive tools |
| [churn-prevention](skills/churn-prevention/) | Retention | Cancellation flows, save offers, exit surveys, and dunning / failed payment recovery |
| [community-marketing](skills/community-marketing/) | Growth | Community building, Discord/Slack engagement, advocate programs, and user groups |
| [lead-magnets](skills/lead-magnets/) | Lead Generation | High-converting lead magnets, ebooks, templates, and gated asset strategy |
| [co-marketing](skills/co-marketing/) | Partnerships | Co-marketing campaign design, partner webinars, cross-promotions, and integration launches |
| [revops](skills/revops/) | Sales & Operations | Lead lifecycle, MQL/SQL scoring, CRM pipelines, and revenue operations alignment |
| [sales-enablement](skills/sales-enablement/) | Sales | Sales decks, one-pagers, battlecards, objection handling scripts, and demo flows |
| [launch](skills/launch/) | GTM & Launch | Product Hunt, Hacker News, press, and multi-channel launch execution playbooks |
| [pricing](skills/pricing/) | Monetization | Pricing strategy, value metric selection, tier packaging, and monetization audits |
| [competitors](skills/competitors/) | Competitive | Competitor comparison pages, "VS" pages, alternative landing pages, and positioning |
| [competitor-profiling](skills/competitor-profiling/) | Competitive | URL-based competitive profiling, teardowns, and positioning matrix extraction |
| [prospecting](skills/prospecting/) | Outbound | Target prospect list building, ICP discovery, and public demand-signal mining |
| [offers](skills/offers/) | Offer Design | Offer creation, risk reversal, bonus stack, pricing psychology, and value framing |
| [public-relations](skills/public-relations/) | Earned Media | Press releases, media pitching lists, journalist outreach, and embargo timing |
| [directory-submissions](skills/directory-submissions/) | Growth | Directory submission strategy (SaaS, AI agents, Product Hunt, LaunchingNext) |
| [signup](skills/signup/) | Conversion | Frictionless signup flow, friction audit, and registration conversion optimization |
| [onboarding](skills/onboarding/) | Conversion | Post-signup onboarding, activation milestones, product tour, and time-to-value |
| [popups](skills/popups/) | Conversion | Exit-intent popups, slide-ins, banners, and lead capture overlay design |
| [paywalls](skills/paywalls/) | Conversion | In-app paywalls, upgrade modals, feature gates, and trial end conversion flows |
| [aso](skills/aso/) | Mobile Growth | App Store Optimization (ASO) for iOS App Store and Google Play |
| [marketing-ideas](skills/marketing-ideas/) | Brainstorming | Growth tactic generator, marketing experiment ideation, and campaign concepts |
| [marketing-psychology](skills/marketing-psychology/) | Behavioral Sci | Cialdini principles, mental models, cognitive bias application in marketing |
| [customer-research](skills/customer-research/) | User Research | Voice-of-customer synthesis, interview scripts, survey design, and pain mining |
| [marketing-plan](skills/marketing-plan/) | Strategy | Full AARRR-structured marketing strategy and execution roadmap |
| [marketing-council](skills/marketing-council/) | Advisory Board | Multi-expert advisory panel simulation (CRO, Copy, SEO, Paid Ads, Brand) |
| [marketing-loops](skills/marketing-loops/) | Autonomous Loop | Recurring self-running AI agent marketing execution loops |

---

## 🛠️ Execution Tools Registry (`tools/`)

The repository includes **51 Zero-Dependency Node.js CLI Tools** (`tools/clis/`) and MCP integration guides (`tools/integrations/`):

- **Analytics & Attribution**: `ga4.js`, `mixpanel.js`, `amplitude.js`, `segment.js`, `plausible.js`, `adobe-analytics.js`
- **SEO & Data**: `google-search-console.js`, `semrush.js`, `ahrefs.js`, `dataforseo.js`, `keywords-everywhere.js`, `rankparse.js`
- **Enrichment & Outbound**: `clearbit.js`, `apollo.js`, `zoominfo.js`, `clay.js`, `hunter.js`, `snov.js`, `lemlist.js`, `instantly.js`
- **CRM & Sales**: `close.js`, `hubspot.md`, `salesforce.md`, `outreach.js`
- **Payments & Referrals**: `stripe.js`, `paddle.js`, `rewardful.js`, `tolt.js`, `dub.js`, `mention-me.js`, `partnerstack.js`
- **Email & SMS**: `mailchimp.js`, `customer-io.js`, `sendgrid.js`, `resend.js`, `klaviyo.js`, `postmark.js`, `kit.js`, `beehiiv.js`, `twilio.js`
- **Ads & Social**: `google-ads.js`, `meta-ads.js`, `linkedin-ads.js`, `tiktok-ads.js`, `buffer.js`
- **Scraping & AI Search**: `firecrawl.md`, `browserbase.md`, `exa.js`, `airops.js`

> 📗 Detailed API endpoints, authentication keys, and execution examples in [`tools/REGISTRY.md`](tools/REGISTRY.md).

---

## 🧪 Validation & Quality Assurance

All skills follow the strict [Agent Skills specification](https://agentskills.io/specification.md) and pass continuous validation checks:

```bash
./validate-skills.sh
```

---

## 📄 License

This repository is open source under the [MIT License](LICENSE).
