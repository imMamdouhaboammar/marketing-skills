# 🚀 Marketing Skills Remote & Stdio MCP Server

> **Model Context Protocol (MCP) Server** for Marketing Skills & 60+ Zero-Dependency Marketing CLI Tools.
> Fully compatible with **ChatGPT Web**, **Claude Desktop**, **Cursor**, **Zed**, **Windsurf**, and any MCP-enabled AI Client.

---

## 🇸🇦 الدليل بالعربية (Arabic Guide)

### 🌟 ما الذي يمنحه هذا الـ MCP Server لعملاء الذكاء الاصطناعي؟
يقوم هذا الخادم بتحويل مستودع `marketingskills` بالكامل إلى أدوات تفاعلية (Tools) يتيح للذكاء الاصطناعي استخدامها:
1. **استكشاف وقراءة المهارات التسويقية (`list_marketing_skills`, `get_marketing_skill`):** قراءة الأدلة والـ Playbooks المتاحة مثل CRO، تحسين محركات البحث SEO، كتابة المحتوى، وإعلانات الفيس بوك وجوجل.
2. **تشغيل أكثر من 60 أداة تسويقية (`run_marketing_cli`):** إمكانية جلب بيانات واستدعاء واجهات البرمجة (APIs) لـ GA4, Resend, Ahrefs, Semrush, Google Ads, Mailchimp, Stripe, Klaviyo وغيرها مباشرة.
3. **البحث في المعرفة التسويقية (`search_marketing_knowledge`):** البحث السريع في كل أدلة ومستندات المستودع.

---

### 🌐 1. تشغيل Remote MCP للاستخدام مع ChatGPT Web

#### ⚡ الرابط المباشر الشغال أونلاين (Live Production URL):
* **رابط الاتصال المباشر (SSE Endpoint):**
  ```text
  https://marketingskills-2100.vercel.app/sse
  ```
* **رابط الفحص (Health Check):**
  ```text
  https://marketingskills-2100.vercel.app/health
  ```

#### 1️⃣ التشغيل المحلي (Local Testing):
```bash
bun install
bun run start:remote
```
سيعمل الخادم على: `http://localhost:3000/sse`

#### 2️⃣ الاستضافة المجانية على Render (Free Hosting):
1. قم برفع هذا المستودع إلى **GitHub**.
2. سجل في منصة **[Render.com](https://render.com)**.
3. اضغط على **New +** ثم اختر **Web Service**.
4. اختر المستودع الخاص بك. منصة Render ستكتشف وجود `Dockerfile` أو `render.yaml` تلقائياً.
5. اضغط **Deploy**.
6. بعد انتهاء النشر، ستحصل على رابط HTTPS مجاني، مثلاً:
   `https://marketing-skills-mcp.onrender.com`

#### 3️⃣ الربط مع ChatGPT Web:
1. افتح **ChatGPT Web** وإلى قسم **Custom GPTs** أو **Actions / MCP Connectors**.
2. أضف رابط الـ SSE الخاص بك:
   `https://marketing-skills-mcp.onrender.com/sse`
3. سيتعرف ChatGPT فوراً على كل الأدوات والمهارات التسويقية المتاحة!

---

### 💻 2. التشغيل المحلي لـ Claude Desktop / Cursor (Stdio Mode)

إذا أردت تشغيله محلياً عبر `stdio` بدون استضافة سحابية:

اضف التكوين التالي في ملف `claude_desktop_config.json` أو إعدادات Cursor:

```json
{
  "mcpServers": {
    "marketing-skills": {
      "command": "bun",
      "args": [
        "run",
        "/path/to/marketingskills-2.10.0/tools/remote-mcp-server.js",
        "--stdio"
      ]
    }
  }
}
```

---

## 🇬🇧 English Guide

### ⚡ Quick Start

```bash
# 1. Install dependencies
bun install

# 2. Run Remote SSE Server (Default on port 3000)
bun run start:remote

# 3. Run Stdio Server
bun run start:stdio
```

---

## 🛠️ Available MCP Tools

| Tool Name | Description |
|-----------|-------------|
| `list_marketing_skills` | Returns list of all available marketing skills (CRO, Email, SEO, Ads, etc.) |
| `get_marketing_skill` | Reads full playbook or subfile for a specific skill |
| `list_marketing_clis` | Lists 60+ zero-dependency marketing CLI integrations |
| `get_marketing_tool_docs` | Retrieves documentation and setup instructions for any CLI tool |
| `run_marketing_cli` | Executes a marketing CLI tool safely with passed arguments |
| `search_marketing_knowledge` | Performs keyword search across all skills and tool docs |

---

## 🔐 Environment Variables Configuration

Set environment variables in a `.env` file or directly in your hosting platform dashboard (e.g. Render / Railway):

```bash
PORT=3000

# Example Credentials for Marketing CLIs:
RESEND_API_KEY=re_123456789
GA4_ACCESS_TOKEN=ya29.a0...
AHREFS_API_KEY=ahrefs_token_...
SEMRUSH_API_KEY=semrush_key_...
GOOGLE_ADS_TOKEN=ya29...
GOOGLE_ADS_DEVELOPER_TOKEN=dev_token_...
GOOGLE_ADS_CUSTOMER_ID=123-456-7890
```

---

## 🐳 Docker Deployment

```bash
# Build image
docker build -t marketing-skills-mcp .

# Run container
docker run -p 3000:3000 --env-file .env marketing-skills-mcp
```
