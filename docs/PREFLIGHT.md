# October 24–25 preflight — no application source changes

## What already exists
This repository already has 20 numbered planning docs and a detailed [AGENTS.md](../AGENTS.md). Product scope, architecture, schemas, APIs, Meta provider, replay limits, fixtures, UX, evaluations, security, daily milestones, T01–T14, testing, rules, ADRs, risks and references are covered. **Do not fork them into contradictory replacement documents.**

## Remaining owner-dependent decisions
- Official organizer rules/prebuilt material permissions: **unverified**. Do not assume allowed prebuilt code.
- Actual selected track, any private organizer updates, registered team and artifact requirements: **confirm from participant portal**.
- Exact Meta credit balance/expiry and billing cap: **confirm from dashboard**.
- Working developer Meta API credentials and supported model/endpoint at kickoff: **verify with one controlled paid smoke**, not a pre-kickoff prototype.
- App repo name, deployment project and access: create at kickoff subject to rules.

## Safe preparation
1. Review [21](21-execution-index.md), [AGENTS.md](../AGENTS.md), [16](16-rules-and-compliance.md), and organizer's current terms.
2. Check that current portal/credential access and provider billing protection are available without creating hackathon application code.
3. Review [tasks](../tasks/README.md) and schedule, assign one first action for day 1.
4. Prepare source-control permissions and test/deployment accounts; do not add passwords to planning docs.
5. On Oct 26, copy [handoff template](SESSION_HANDOFF.md) into new app repo, pin planning SHA, run T01.

## Go/no-go
GO only when rules permitting planned work are understood, required credentials/access are available or deterministic fallback is chosen explicitly, and the first task's acceptance tests are actionable. If rules or credits remain unknown, mark blocked; continue safe compliance/documentation work instead.

## Verify-specific start gates
At kickoff, pin [28 north star](28-verify-product-north-star.md) and [29 migration](29-repositioning-consistency.md) along with the planning SHA. Implement a deterministic completion verdict early; confirm F1 UNVERIFIED, supported passing completion VERIFIED (scoped), and unknown/missing tool output INSUFFICIENT_EVIDENCE. Muse is explanation-only and paid calls are explicit. Verify participant rules and credits remain pending until checked. No P1 real-agent run before P0 release gates.
