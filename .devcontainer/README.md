# Dev Container Configuration

This directory contains the development container configuration for Kollectiv Studios.

## Overview

The devcontainer is configured with:
- **Node.js**: v22 (LTS) - Latest Node.js LTS for best performance
- **Package Manager**: npm
- **Dev Server**: Vite (ports 5173, 5174)
- **Linting**: ESLint with React Hooks support
- **Styling**: Tailwind CSS
- **VS Code Extensions**: Preconfigured for React, ESLint, Tailwind, and Git

## Getting Started

### Prerequisites

- Docker and Docker Compose installed
- Visual Studio Code with Dev Containers extension

### Using Dev Container

1. **Open in Dev Container**:
   - Open the workspace in VS Code
   - Click the green icon in the bottom-left corner (Remote Window)
   - Select "Reopen in Container"
   - VS Code will build and start the container, then automatically run `npm install`

2. **Start Development Server**:
   ```bash
   npm run dev
   ```
   The dev server will be available at `http://localhost:5173`

3. **Build for Production**:
   ```bash
   npm run build
   ```

4. **Lint Code**:
   ```bash
   npm run lint
   ```

## VS Code Features

The following extensions are automatically installed:

- **ESLint**: Code linting and formatting
- **Tailwind CSS**: IntelliSense for Tailwind classes
- **Prettier**: Code formatter
- **dotenv**: Environment variable support
- **React View Decorators**: React development tools

## File Structure

- `devcontainer.json` - Main Dev Container configuration
- `Dockerfile` - Custom Docker image with additional build tools
- `docker-compose.yml` - Docker Compose configuration for easy container management

## Environment

- **Node**: 22.x
- **npm**: Latest
- **OS**: Debian Bookworm (Linux)

## Port Forwarding

The dev container forwards the following ports:
- **5173**: Vite development server
- **5174**: Vite HMR (Hot Module Replacement)

## Mounted Directories

- Your project workspace
- `node_modules` (cached volume for performance)
- SSH keys and Git config (optional, for Git operations)

## Troubleshooting

### Port Already in Use
If port 5173 or 5174 is already in use:
```bash
# Change the port in vite.config.js or use:
npm run dev -- --port 3000
```

### Rebuild Container
To rebuild the container after changes to Dockerfile:
```bash
# In VS Code Command Palette:
Dev Containers: Rebuild Container
```

### Clear npm Cache
```bash
npm cache clean --force
rm -rf node_modules
npm install
```

## Additional Notes

- The container runs as the `node` user for security
- Git configuration and SSH keys are mounted for seamless Git operations
- Node modules are stored in a named volume to improve performance
