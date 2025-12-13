# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Core Development Rules

### 1. Planning & Task Management
- **Always** think through the problem first and read relevant codebase files
- Create a plan in `tasks/todo.md` with a checklist of todo items
- **Always** get user approval on the plan before beginning work
- Check off tasks as you complete them
- Add a review section to `tasks/todo.md` with a summary of changes when complete

### 2. Code Changes & Simplicity
- **Make every task and code change as simple as possible**
- Impact as little code as possible - only modify necessary files
- Avoid massive or complex changes
- Each change should be surgical and focused
- No temporary fixes - find and fix root causes properly
- Think like a senior developer - be thorough and thoughtful

### 3. Communication
- At every step, provide high-level explanations of changes made
- Explain the reasoning behind decisions
- Keep the user informed of progress

### 4. Code Quality
- **DO NOT BE LAZY** - if there's a bug, find the root cause and fix it
- Never introduce workarounds or temporary solutions
- Ensure changes don't introduce new bugs
- Prioritize clarity and maintainability

## Project Overview

Aviation Expeditions is a Next.js website for booking and exploring aerial adventures and scenic flights.

## Development Commands

```bash
npm install              # Install dependencies
npm run dev             # Start development server (http://localhost:3000)
npm run build           # Build for production
npm start               # Start production server
npm run lint            # Run linting
```

## Architecture

### Next.js App Router Structure
- Uses Next.js 15 with App Router (not Pages Router)
- `/app/` directory contains all routes and pages
- Each route is a directory with a `page.tsx` file
- Layout is defined in `/app/layout.tsx` with DM Sans font configuration
- Global styles in `/app/globals.css`

### Color System

Custom Tailwind color palette defined in `tailwind.config.ts`:
- **aurora**: Sky blues (primary action color - #0ea5e9)
- **forest**: Pine forest greens (secondary - #22c55e)
- **midnight**: Deep blues/grays (text/dark sections - #1e293b)
- **snow**: Clean whites/off-whites (backgrounds)

Each color has shades 50-900. Use `aurora-600`, `forest-700`, etc. in Tailwind classes.

### Typography

Font configured in `/app/layout.tsx`:
```typescript
const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});
```

Applied to body via `className={dmSans.className}`.

## Styling Conventions

### Utility Classes (in globals.css)
- `.btn-primary` - Aurora blue button with hover effects
- `.btn-secondary` - Forest green button with hover effects
- `.section-padding` - Consistent vertical/horizontal padding (py-16 px-4)
- `.container-custom` - Max-width container (max-w-7xl mx-auto)

Use these for consistency rather than recreating styles.

## Pages Structure

Plan to include:
- `/` (Homepage) - Hero, Featured expeditions, CTA
- `/expeditions` - Browse all aerial expeditions
- `/expeditions/[id]` - Detail page for specific expedition
- `/about` - Company story and team
- `/contact` - Contact form
- Other pages as needed

## CRITICAL: Only Modify Aviation Expeditions Files

**⚠️ IMPORTANT - NEVER MODIFY OTHER PROJECTS:**

Only make changes to files within the `/aviation-expeditions/` directory. **NEVER modify files in other project directories** like `/svens-hostel/` or any standalone files outside this folder.

Before starting work:
1. **Verify you are in the aviation-expeditions directory** - Check the file paths of any files you're about to edit
2. **Start the dev server from the correct folder**: `cd /Users/markwoods/aviation-expeditions && npm run dev`
3. **Confirm localhost:3000 displays "Aviation Expeditions"** before making ANY changes
4. **If uncertain** which project to work on, ask the user to clarify before proceeding

**Current Setup:**
- **Aviation Expeditions files**: `/Users/markwoods/aviation-expeditions/` (Only modify files here)
- **Sven's Basecamp Hostel**: `/Users/markwoods/svens-hostel/` (Do NOT modify)
- **Other projects**: Do NOT modify

## CRITICAL: Localhost File Verification

**⚠️ IMPORTANT:** Before making ANY changes to CSS, HTML, or frontend files:

1. **Verify which files localhost is serving** by opening DevTools (F12) → Network tab → reload page → check the document request
2. **Confirm the file path** shown in the browser's address bar matches the files you're about to edit
3. **Do NOT assume** localhost is serving files from `/aviation-expeditions/` - it may be serving standalone HTML files from `/Users/markwoods/`

**Current Setup:**
- **Standalone HTML files** (being served at localhost:3000): `/Users/markwoods/index.html`, `/Users/markwoods/booking.html`, `/Users/markwoods/about-sven.html`, etc.
- **Next.js project files**: `/Users/markwoods/aviation-expeditions/app/` (NOT currently being served)

**If making changes:**
- For CSS: Update `/Users/markwoods/index.html` (inline `<style>` tag) - NOT `/aviation-expeditions/app/globals.css`
- For HTML structure: Update `/Users/markwoods/index.html` - NOT files in `/aviation-expeditions/app/`

## Important Notes

- **No backend**: Site is fully static/frontend-only (unless integrating with external booking service)
- **Images**: Store in `/public/images/` - use Next.js Image component when adding real photos
- **Client components**: Use `"use client"` directive for interactive components
- **Git workflow**: Always commit changes with clear messages
- **No linting/testing**: Not currently configured in this project

## Deployment

Ready to deploy to Vercel, Netlify, or any static host.
