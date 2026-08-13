FROM oven/bun:alpine

WORKDIR /app

# Copy package metadata & lockfile
COPY package.json bun.lock ./

# Install production dependencies
RUN bun install --production

# Copy repository source code
COPY . .

# Expose HTTP port for Remote SSE MCP
EXPOSE 3000

ENV PORT=3000
ENV NODE_ENV=production

# Run Remote MCP Server
CMD ["bun", "run", "tools/remote-mcp-server.js"]
