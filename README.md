# NielsenIQ x SpaceXAI

Passworded site. Grok Bot from SpaceXAI, for NielsenIQ sellers.

## What it is

Three sample GTM jobs on one page. Each job has a short problem statement, a scene-in-time storyboard, a final artifact, and an interactive Grok Bot demo with chat on the left and the agent computer on the right.

Sample data is generic. It does not claim NielsenIQ account facts.

## Run locally

```bash
cp .env.example .env.local
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Default password is `land2expand` (override with `SITE_PASSWORD`).

## Clips

Optional demo clips live under `private/media/` and are served only through the passworded `/api/media/...` route.

## Deploy

Preview only. Project slug `nielseniq`. Set `SITE_PASSWORD=land2expand`.
