# TechSol Website - Frontend Repository

Welcome to the frontend repository for **TechSol**, an IT solutions company helping startups, SMEs, and enterprises build, scale, and automate with reliable, modern, and cost-effective technology solutions.

## Overview
This repository contains the source code for the TechSol landing page and main website interface. It is built using:
- **React 18** (with React Hooks)
- **TypeScript**
- **Vite** (for fast local development and optimized production builds)
- **Vanilla CSS** (with CSS variables for theming)

## Prerequisites
Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/en/) (v16+ recommended)
- [pnpm](https://pnpm.io/) (used for package management)

## Getting Started

1. **Install dependencies:**
   ```bash
   pnpm install
   ```

2. **Start the development server:**
   ```bash
   pnpm run dev
   ```
   The site will be available locally at `http://localhost:3206/`.

3. **Build for production:**
   ```bash
   pnpm run build
   ```
   This will generate an optimized build in the `dist/` directory.

## Project Structure
- `src/components/`: Modular React components (Hero, Navbar, Stats, Services, Portfolio, etc.)
- `src/App.tsx`: Main application entry and layout assembly
- `src/index.css`: Global styles and CSS variable definitions (colors, fonts, etc.)
- `public/`: Static assets (favicon, images, etc.)

## Deployment
This static site is ready to be deployed to platforms like Vercel, Netlify, or GitHub Pages. Just set the build command to `pnpm run build` and the publish directory to `dist`.
