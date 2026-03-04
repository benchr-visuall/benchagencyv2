# BenchCMS Template

A static website generator assisted by AI. This template is optimized for AI-driven development of static websites.

## Workflow

1. **Populate Context**: Place all specifications, branding, and assets into the `resources/` folder. This is the single source of truth.
2. **Build**: Instruct your AI assistant to generate the website. It will follow the conventions in `AGENTS.md` to implement the website using the provided resources.

## Configuration

To enable contact forms, rename `.env.example` to `.env.local` and add your `RESEND_API_KEY`.

## Stack

- Next.js 16 (App Router)
- Tailwind CSS 4
- TypeScript
- Zod
- Resend
