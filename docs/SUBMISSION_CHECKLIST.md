# Meta hackathon submission checklist

**Status as of 2026-10-24:** This document is a checklist, **not** evidence any organizer requirement is satisfied. [16](16-rules-and-compliance.md) contains last verified facts and unresolved rules.

## Day-zero legal/eligibility gate
- [ ] Read and accept official final rules via event portal; record version/date/link.
- [ ] Verify whether pre-event docs, templates, prompts, fixtures and code can be reused.
- [ ] Verify participant track/team, technology requirements, required disclosure, IP/licenses, external assets and services.
- [ ] Verify accepted submission type, code-repo visibility, deployed app availability, demo video length/format, submission fields, deadline timezone, and any judging requirements.
- [ ] Confirm participant Meta API credit activation, spend limits and expiration in dashboard.

## Build exit gate
- [ ] `trace.v1` importer validates boundaries and rejects unknown version/duplicates/oversize.
- [ ] 3 bundled fixtures render, conservative checks linked to exact events.
- [ ] At least one genuinely live Meta structured analysis with validated evidence; fallback visibly recorded.
- [ ] Bounded safe DSL and replay **only** for supported scenarios; no untrusted code execution.
- [ ] Baseline/guard comparison accurately distinguishes guard compliance from source bug correctness.
- [ ] Provenance-bearing JSON export; no leaking secrets/private trace data.
- [ ] Relevant CI unit/integration/build checks green, Playwright hero path recorded separately.
- [ ] Production deployment smoke and budget protection verified.

## Submission production gates
- [ ] Judge-friendly README (pitch, setup, screenshots, architectures, limitations).
- [ ] Demo video/screens recorded and links tested from another device/incognito.
- [ ] Required public/private source and acknowledgments checked against rules.
- [ ] Final artifact URL, commit SHA, model/provenance information and test evidence recorded.
- [ ] Submission form successfully sent **before** organizer countdown; receipt/screenshots saved privately.
- [ ] Post-submission URL still loads and key flows function.

Published plan cites Nov 4, 2026 at 9 PM Eastern, but live organizer countdown overrides any ambiguous EST/EDT label. See [12](12-ten-day-plan.md).

## AgentHarness Verify P0 acceptance additions
- [ ] First-view F1 UNVERIFIED verdict appears before Meta inference and links directly to failed test and success claim.
- [ ] Supported legitimate completion reports scoped VERIFIED; absent/ambiguous evidence reports INSUFFICIENT_EVIDENCE.
- [ ] Muse is visibly labeled as diagnosis/candidate test, never completion-verdict authority.
- [ ] Scripted policy PASS does not imply source bug fixed; report and UI state this.
- [ ] Measured agent-behavior results are shown only if optional T15 genuinely ran, with false blocks and task solve rate.
- [ ] Final product name in submitted materials is **AgentHarness Verify**; repository's historical AgentHarness-Planning name is unchanged.
