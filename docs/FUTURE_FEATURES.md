# Future Features

## AIFX Signal — AI Industry Watch (Agent Driven)

Status: Planned (Post-Launch)

The "AI Creator Industry Watch" section will eventually be powered by an AI agent that publishes one curated signal per day.

Goals:
- Provide a compact daily read on provenance, AI packaging, and media trust
- Surface important developments for creators and standards
- Keep the AIFX homepage feeling alive and current

Architecture (planned):
- AI agent runs once per day
- Agent searches AI news related to:
  - provenance
  - AI authorship
  - media authenticity
  - creator pipelines
  - verification standards
- Agent produces structured JSON output

Example output file:
/public/data/aifx-signal.json

Example structure:
```json
{
  "updated_at": "YYYY-MM-DD",
  "items": [
    {
      "title": "",
      "summary": "",
      "source_name": "",
      "source_url": "",
      "category": "Provenance"
    }
  ]
}
```

Website behavior:
The homepage reads this JSON feed and renders the signal cards dynamically.

Implementation idea:
GitHub Actions scheduled daily to generate the feed.

Priority:
Post-launch feature.

