# 12 — Ten-day execution plan and critical path

Official event page: kickoff **Oct 26, 2026**, submission deadline **Nov 4, 9:00 PM Eastern**. The event page labels EST even though US daylight saving changes on November 1; verify the live countdown and submit early. Plan daily based on calendar dates, not guessed timezone conversions. Acceptance is already confirmed. Organizer official rules expected before kickoff.

## Before kickoff, Oct 20–25 — planning only
Finalize these docs, review organizer messages, choose indie/startup track already registered, secure Meta API credentials and spend visibility, verify Vercel access, prepare content-free architecture and test-case descriptions. **Do not presume prebuilt implementation is eligible** until official terms are reviewed. Avoid spending billable credits for the unfinished build if credits have activation restrictions.

## Day-by-day P0 plan
| Date | Day | Deliverable | Exit gate |
|---|---|---|---|
| Oct 26 | 1 | Rules accepted; application repo scaffold, packages, Zod schemas, mock fixtures, UI shell | build/typecheck passes; rules checklist signed |
| Oct 27 | 2 | Canonical event ingest, timeline, deterministic signals, golden fixture tests | load 3 fixtures; reject bad JSON; no network needed |
| Oct 28 | 3 | Meta live provider route, structured output, evidence-ID validation, fallback | primary trace analyzed with a real Muse call and real provenance |
| Oct 29 | 4 | DSL assertion interpreter and simulated replay engine | 3 scenario baselines deterministic, safety tests pass |
| Oct 30 | 5 | Allowlisted mitigation comparison and report schema/export | hero baseline FAIL -> guard PASS with truthful caveat |
| Oct 31 | 6 | Complete four-stage UX, evidence jump links, user-visible errors | full mocked E2E workflow passes |
| Nov 1 | 7 | Labeled negative controls and model evaluation, provider budget check | benchmark protocol reproducible; real measurements saved |
| Nov 2 | 8 | Deployed production smoke, security review, browser accessibility | **feature freeze**; stable public/controlled URL |
| Nov 3 | 9 | Demo recording, screenshots, README, judge narrative, submission draft | reviewer not on team can complete hero flow |
| Nov 4 | 10 | Final smoke, artifact provenance, submit well before 9 PM ET | screenshot/receipt of submission + deployed demo works |

## Critical path
Rules gate -> valid trace+fixture -> deterministic baseline -> Meta validated finding -> policy verification -> judge UX -> deployed demo -> submission. Avoid parallel work on dependent contracts. Optional design refinements may run alongside unit testing after Day 4.

## Effort budget
Target about 55–70 focused hours across 10 days if solo, with an explicit buffer on the last 2 days; adapt to actual availability. Each day starts with 15-minute smoke test and ends with commit and state log. Do not spend a full day polishing styling while a core loop is missing.

## Scope-cut order if behind schedule
1. Cut extra animation, charts, complex visuals and custom styling.
2. Cut 18-case benchmark expansion; preserve 12-case minimum or report lower honest N.
3. Cut unsupported claim/unsafe replay UI if necessary, but keep fixture inspection and unit tests.
4. Cut optional export formatting beyond JSON; keep evidence-based minimal report.
5. Keep **at all costs** the primary real Muse analysis, input/evidence validation, deterministic hero replay and truthful before/after demo.

## Hard stop conditions
- No live Meta credentials by Day 3: unblock immediately; recorded demonstration is fallback but weaker as submission and must be labeled.
- Replay not working by Oct 30: freeze additional scenarios and focus only false-success.
- Production unsafe public inference: turn live off publicly and show protected live video; add hard spending control before enabling.
- No demo video by Nov 3 afternoon: stop features and record working functionality.

## Daily engineering log template
Date; commit SHA; objectives achieved; commands/tests actually run; pass/fail; live Meta calls/tokens/estimated spend; known defects; changed scope; next day's first action.

## Optional P1 scheduling
T15 real-agent comparison is a conditional stretch experiment after P0 works and deployment/security/credits are secure. A small pilot may fit around Days 6–7, but never delay P0 evaluation, Day 8 deployment or Nov 2 feature freeze. If blocked or incomplete by freeze, mark NOT RUN and submit the deterministic demonstration. Details: [27](27-real-agent-experiment.md).
