# Reliability and submission — T12 to T14

## T12 Security and budget gate (after core loop; Day 8)
**Read:** [10 security](../docs/10-security-and-privacy.md), [14 tests](../docs/14-test-matrix.md), [RESOURCE_BUDGET](../docs/RESOURCE_BUDGET.md).
**Goal:** exercise prompt injection, huge traces, invalid IDs, key exposure, budget misuse, unsupported replay, 429/timeouts and output escaping.
**Acceptance:** fail-closed test evidence; public live endpoint controlled or disabled; ordinary CI spends $0 provider credit. No secrets or raw trace logs.

## T13 Deploy (after T12; Day 8)
**Read:** [11 deployment](../docs/11-development-and-deployment.md), [12 calendar](../docs/12-ten-day-plan.md).
**Goal:** production deploy with server-only env and no-store responses; reliable offline deterministic path.
**Acceptance:** incognito URL smoke, health route not revealing secrets, deployed E2E hero path, rollback documented.

## T14 Demo + submit (after T13; Days 9–10)
**Read:** [15 submission](../docs/15-demo-and-submission.md), [SUBMISSION_CHECKLIST](../docs/SUBMISSION_CHECKLIST.md), [16 rules](../docs/16-rules-and-compliance.md).
**Goal:** record honest 2–3 minute evidence-led walkthrough; capture final commit, live inference proof if available, test artifacts and official form requirements.
**Acceptance:** video, links, artifact provenance and organizer receipt inspected; submit before verified countdown. Never mark complete until organizer confirms receipt.
