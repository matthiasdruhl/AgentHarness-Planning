# 20 — Preflight gates, scope freeze and remaining questions

This package attempts to decide all foundational technical issues before build. Remaining items are **external** (organizer terms, credentials, actual measurement), not permission to over-design.

## Locked decisions
- Coding-agent failure lab, not a general agent auditing SaaS.
- Push-the-Frontier submission story.
- One strict TypeScript/Next.js app and no persistence backend.
- Meta Muse Spark 1.3 for evidence-linked diagnosis with strict structured output.
- Deterministic safe replay of bundled synthetic cases only.
- Generated assertions in closed three-op DSL; fixes restricted to three predeclared policy switches.
- False-success hero case is mandatory; other two scenarios are secondary.
- Pure engine correctness and explicit limitations outrank cosmetic frontend polish.
- No application code created in this planning repository.

## Only required external checkpoints
1. **Organizer rules:** official final rules, prep/prebuilt permissions, submission requirements and actual registered track.
2. **Meta account:** exact credit balance, model entitlement, API key, spend controls and actual first request.
3. **Deployment:** ability to deploy public URL and safely govern billable route; choose disabled live public mode if no reliable rate/spend limits.
4. **Measurements:** freeze labels, run actual Muse inference, document results; cannot pre-compute honest accuracy before code/dataset exists.

## Before kickoff (all planning)
- [x] Choose product scope, architecture, contracts, safe semantics, UX, fixtures, test protocol, time plan.
- [ ] Read acceptance email and note track; no need to reapply.
- [ ] Verify current Meta dashboard access, key workflow and credit terms without storing secrets here.
- [ ] Check rules at publication; document exact build-start eligibility.
- [ ] Ensure hosting account access and budget ceiling.
- [ ] Decide a consistent package manager (default pnpm) and minimum target browsers.

## At kickoff (hard gate)
- [ ] Official rules accepted and prebuilt-material interpretation recorded.
- [ ] Create code repository only when eligible.
- [ ] Pin planning repository commit SHA in implementation README and Codex tasks.
- [ ] Create day-1 scaffold from specs and record starting commit.
- [ ] Run typecheck, unit suite, production build smoke.
- [ ] Start developer daily log with real command results.

## Final readiness scorecard
A usable entry must answer yes to all:
1. Can someone load the false-success trace without any credential?
2. Can someone inspect the actual failing tool exit status?
3. Does at least one real Meta call produce structured, validated evidence-linked analysis?
4. Can the hero assertion run without arbitrary code execution?
5. Can a guard cause a **policy** outcome change while failed test remains visible?
6. Are observed, model-inferred and deterministic verdicts separately labeled?
7. Can a report be exported and verified without exposing a key?
8. Does the deployed site work in incognito and have a fallback for Meta outage?
9. Are results measured and the benchmark denominators honest?
10. Are official submission requirements checked, and was the entry actually submitted with receipt?

## Known assumptions and rationale
The current `AgentHarness-Planning` repository was empty at planning start; original historical AgentHarness specification was not present here. This is a self-contained hackathon-only redesign based on the user-approved direction in conversation, **not** a claim to have read unavailable earlier specification files. If the original spec surfaces, use it only to identify conflicts; do not expand scope unless it makes the 10-day demo safer or better.

The eventual demo agent is a **simulated scripted reference agent**. Arbitrary trace upload provides useful diagnosis but never general replay. Future capabilities are intentionally excluded.
