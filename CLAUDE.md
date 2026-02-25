# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is `eslint-config-outfunnel`, a shareable ESLint configuration package that defines Outfunnel's JavaScript style guide. It provides pre-configured ESLint rules for both Node.js and browser environments.

## Commands

```bash
npm install          # Install dependencies
npm run lint         # Run both editorconfig (eclint) and ESLint checks
npm run eslint       # Run ESLint only
npm run eclint       # Run editorconfig linting only
npm run ncu          # Check for package updates
```

## Publishing New Versions

```bash
npm version [patch|minor|major] -m "Version commit message"
```
Merge to master triggers GitHub Action to build, publish, and tag automatically.

## Architecture

### Entry Points
- `index.js` - Base configuration extending all rule modules
- `node.js` - Node.js environment config (extends index + node rules)
- `browser.js` - Browser environment config (extends index, adds browser env)

### Rule Modules (`rules/`)
Each file exports a single rules configuration object:
- `best-practices.js` - Code quality rules
- `errors.js` - Possible errors detection
- `es6.js` - ES6+ syntax rules
- `fp.js` - Functional programming rules (eslint-plugin-fp)
- `imports.js` - Import/export rules (eslint-plugin-import)
- `jsdoc.js` - JSDoc comment rules (eslint-plugin-jsdoc)
- `node.js` - Node.js specific rules (eslint-plugin-node)
- `proper-ternary.js` - Ternary operator rules (@getify/eslint-plugin-proper-ternary)
- `sonar.js` - Code smell detection (eslint-plugin-sonarjs)
- `strict.js` - Strict mode rules
- `style.js` - Code formatting rules
- `variables.js` - Variable declaration rules

## Code Style

- **Indentation**: Tabs for JS files, 2 spaces for JSON/YAML/Markdown
- **Line endings**: Unix (LF)
- **Quotes**: Single quotes
- **Semicolons**: Required
- **Trailing commas**: None

## Versioning Policy

- **Major**: Breaking changes (tightening rules) and/or major ESLint version updates
- **Minor**: Relaxation of rules, fine-tuning, or tightening rules to warn level only
- **Patch**: Fixing minor oversights
