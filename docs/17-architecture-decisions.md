# 17 — Architecture decision records

| ID | Decision | Why / revisit |
|---|---|---|
| ADR-001 | Public brand Forecode (provisional); keep planning repo name | Revisit after trademark/domain check |
| ADR-002 | Unified Foresight + Verify is only active product | Previous Verify-only work remains legacy reference |
| ADR-003 | Robust scenario regret, not uncalibrated probabilistic Expectiminimax | Revisit only with defensible transition probabilities |
| ADR-004 | No large Monte Carlo in P0 | Static ranking and few measured futures suffice |
| ADR-005 | Vetted TS/Next booking fixture only | General agent integrations too risky in 10 days |
| ADR-006 | Separate trusted evaluator from agent writable workspace | Prevent test tampering and false completion |
| ADR-007 | Same Verify for both Foresight A/B arms | Disentangle architecture effect from guard effect |
| ADR-008 | Developer-local isolated real code runs; web read-only | No public arbitrary code execution |
| ADR-009 | Meta proposes intent/scenarios/candidates, never certifies tests | Keeps reasoning separate from evidence |
| ADR-010 | Measured/estimated/recorded provenance compulsory | Prevent result inflation |
| ADR-011 | Archive historical docs only as marked legacy redirects | Avoid duplicate active requirements |
| ADR-012 | Developer intents opt-in, editable and revocable | Avoid speculative requirement becoming mandate |

For changes: record date, decision, alternative, security/evaluation impact, affected docs. Never update an ADR without updating dependent tasks and contracts.

## ADR-013 — existing Docker Sandboxes/Codex, booking-first test (2026-10-25)
**Decision:** use the owner's **user-reported initialized** Docker Sandboxes Codex environment as first *inspection target*; prove a dedicated sanitized booking-v1 workload with protected separate grader before implementing any external SCBench bridge. Preserve original sandbox and avoid default reinstall/destructive recreation. A cloned/mountless dedicated experiment sandbox is preferred when the existing workspace is direct-mounted or contains sensitive files. Its installation is reported, **not security attested**.
**Why:** fastest route to fair measured Forecode evidence with minimal new infrastructure; public benchmark integration is higher risk and optional. Docker microVM guest may have sudo, but host isolation, SSH forwarding, host-managed credentials, egress, version/CA patch level and hidden-oracle separation require actual tests.
**Alternatives:** hardened native Codex adapter or disposable remote Linux only on documented blocker; halt agent trials if no safe option.
**Impacts:** M0.3, M2.1–2.5, M7 first A/B, optional SCBench; [operator runbook](DOCKER-SANDBOX-BOOKING-FIRST.md), [sandbox adapter](../benchmarks/SCBENCH-SANDBOX-ADAPTER-PLAN.md). No application runtime change.

## ADR-014 — machine-readable contract freeze v1 (2026-10-25)
**Decision:** JSON Schema 2020-12 [catalog](../contracts/schemas/forecode-v1.schema.json) + [API registry](../contracts/api-registry.json) freeze structural fields; [normative cross-record spec](CONTRACT-FREEZE-v1.md) governs graph identity, consent/revisions, deterministic modeled point weights and minimax regret, A/B vs Meta comparison, protected JCS-digested evaluator receipts, and verdict precedence. Do not independently invent a schema in each implementation module.
**Alternatives:** compact prose examples only (ambiguous for Codex); mixing ordinal ranks and numeric regret (invalid); untrusted HTTP verification (unsafe). Reject alternatives.
**Consequences:** require schema and semantic positive/negative fixtures in CI and strict Zod parity in the separate app repo. Breaking changes after kickoff are versioned and migrated. The planning examples remain synthetic, not measured evidence.

## ADR-015 — Meta Architecture Scientist replaces thin suggestion-only integration (2026-10-25)
**Decision:** Meta becomes Forecode's *first-class reasoning engine*: a bounded falsifiable `meta-hypothesis.v1`, a self-challenging `meta-challenge.v1` (explicitly proposed/not heldout), and a conditional `meta-evidence-interpretation.v1` from trusted sanitized receipt summaries. Existing candidate, deterministic scoring, sandboxed Codex, evaluator authority, and evidence receipt semantics do **not** transfer to Meta. New types/endpoints are additive, not silent edits to existing versioned schemas.
**Reason:** the earlier architecture allowed Meta to look like a replaceable recommendation wrapper. The new workflow makes hypothesis/counterexample formation and evidence interpretation directly judge-visible, while maintaining falsifiability and strong non-Meta ablation for claims of added value.
**Alternatives:** replace Codex with Meta code runner (risky existing sandbox integration), let Meta grade itself (invalid integrity), multi-agent automatic debate/refactor (scope/safety), generate holdouts from model prompts (not independent). All rejected for P0.
**Consequences:** add [Meta Scientist protocol](META-ARCHITECTURE-SCIENTIST.md), versioned contracts, CI negative tests, M6/API/demo handoff. Interpretation omittable if no real receipts. Retain 68 existing ticket IDs, SCBench P1, Nov 2 freeze.
