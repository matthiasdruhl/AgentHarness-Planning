# 19 — Official sources and API reference bookmark set

Prepared and checked **October 20, 2026**. URLs point to external living documentation; contents may change. This document summarizes what was confirmed and what must be rechecked. Do not copy full copyrighted documentation into this repository.

## Hackathon event
- [Meta Global AI Developer Hackathon — official event page](https://cerebralvalley.ai/e/meta-ai-developer-hackathon). Confirmed: dates Oct 26–Nov 4, two tracks, two themes, supported Meta technologies, organizer statement that full rules will publish before Oct 26.
- [Meta for Developers — Meta Connect 2026 recap](https://developers.meta.com/blog/meta-connect-recap/). Confirmed: event announced, Meta Model API and Muse developer platform, event credits messaging.
- Organizer's official rules (link **pending publication/acceptance portal**); do not substitute unofficial summaries.

## Meta Model API (first-party)
- [Model API overview](https://dev.meta.ai/docs/overview): models, base URL `https://api.meta.ai/v1`, bearer `MODEL_API_KEY`.
- [Quickstart](https://dev.meta.ai/docs/quickstart): SDK setup and first call.
- [Chat Completions recipe](https://dev.meta.ai/docs/cookbook/quickstart-chat-completions): OpenAI SDK compatibility, `muse-spark-1.3`.
- [Models](https://dev.meta.ai/docs/models): up-to-date available IDs/context.
- [Structured output](https://dev.meta.ai/docs/structured-output): Chat Completions `response_format: json_schema`, TypeScript example, supported shape.
- [Structured-output cookbook](https://dev.meta.ai/docs/cookbook/structured-output): Pydantic/JSON recipes and schema validation recommendations.
- [Tool calling](https://dev.meta.ai/docs/tool-calling): optional reference; **not required** by hackathon MVP.
- [Error handling](https://dev.meta.ai/docs/error-handling): 400/401/402/403/429/5xx handling and retries.
- [API pricing and rate limits](https://dev.meta.ai/docs/overview): follow linked current pricing page from overview; verify rate at time of measurement instead of fixing costs in docs.

## Implementation references (canonical projects)
- [Next.js documentation](https://nextjs.org/docs): App Router route handlers and Node runtime.
- [Zod](https://zod.dev/): runtime input contracts and inferred TS types.
- [OpenAI Node SDK](https://github.com/openai/openai-node): compatible client transport (Meta remains the actual model service).
- [Vitest](https://vitest.dev/): pure engine test runner.
- [Playwright](https://playwright.dev/): judge-flow browser smoke.
- [Vercel docs](https://vercel.com/docs): environment variables, function timeouts, traffic controls.

## Offline references to include in implementation repository
Not scraped copies of external sites. Keep concise docs with source link and last-verified date:
- `docs/meta-client-notes.md` — exact known-working client payload after live smoke.
- `docs/benchmark-methodology.md` — evaluation dataset provenance and metrics.
- `docs/demo-runbook.md` — reproducible presenter steps.
- `docs/compliance-check.md` — final organizer rules decisions.
- `docs/deployment-runbook.md` — URL, env variable names (no values), rollback instructions.

## Accuracy rules
New API features or prices may appear during the event. Re-verify official endpoints and SDK compatibility before implementation; update this file with a dated note and code reference. Any unofficial interpretation of contest rules is marked as interpretation, not official policy.

## Verify positioning and evaluation references
Primary design contract: [28](28-verify-product-north-star.md); consistency map: [29](29-repositioning-consistency.md). Existing external publications are **related work**, not evidence of AgentHarness scores. AgentRx, HAL and SWE-bench report different tasks/metrics; do not copy their headline accuracies into a completion-verification benchmark comparison. Meta Muse's role is candidate analysis and constrained regression suggestions. Official platform/model documentation and access should be checked again at kickoff rather than assumed stable.
