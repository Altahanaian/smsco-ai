# SMSCO Platform

## Setup

1. Install dependencies:

   ```
   npm install
   ```

2. Copy the example env file and set your keys:

   ```
   cp .env.example .env.local
   ```

3. Run development server:
   ```
   npm run dev
   ```

## Deployment

- Push to GitHub `main` to trigger CI/CD workflow.
- Ensure GitHub secrets: `VERCEL_TOKEN`, `VERCEL_ORG_ID`, `VERCEL_PROJECT_ID`, `AI_API_KEY`.
