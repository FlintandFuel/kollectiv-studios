FROM mcr.microsoft.com/devcontainers/javascript-node:1-22-bookworm

# Install additional development tools
RUN apt-get update && apt-get install -y --no-install-recommends \
    build-essential \
    && rm -rf /var/lib/apt/lists/*

# Install global npm packages (optional)
RUN npm install -g npm@latest

# Set working directory
WORKDIR /workspace
