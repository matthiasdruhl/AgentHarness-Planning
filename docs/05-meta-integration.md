# 05 — Meta Architecture Scientist: server-only model integration

**P0 differentiation:** Meta is the *research intelligence engine* rather than a superficial architecture suggestion API. It must form **falsifiable hypotheses**, propose **counterexamples that could disprove them**, and interpret **sanitized independent evidence** when such evidence exists. These are bounded, schema-validated text/data operations, never tool authority or grading.

Read the authoritative [Meta Scientist protocol](META-ARCHITECTURE-SCIENTIST.md), [machine schema](../contracts/schemas/forecode-v1.schema.json), [endpoint registry](../contracts/api-registry.json) and [Contract Freeze v1](CONTRACT-FREEZE-v1.md) before implementing. The three new endpoint families are **additive** v1 records; existing `interpret_intent` and `propose_architectures` remain supported.

## Calls and responsibilities

| Call | Permitted input | Output | Priority |
|---|---|---|---|
| `interpret_intent` | opt-in text | unconfirmed intent draft | P0 |
| `propose_architectures` | confirmed intents, visible scoped graph | A status quo and targeted B proposal | P0 |
| `hypothesize` | confirmed intents, proposed A/B, graph, explicitly visible non-heldout scenarios | `MetaHypothesisV1` with observable claim and falsification | **P0** |
| `challenge` | confirmed intents, graph, candidate/hypothesis, visible non-heldout scenarios | `MetaChallengeV1` counterexample **proposal**, never heldout | **P0** |
| `interpret_evidence` | two server-allowlisted IDs: hypothesis + sanitized trusted summary | `MetaEvidenceInterpretationV1`, no verdict authority | P0 **only if real receipts exist** |
| `choose_next_experiment` | visible human-approved bounded pool | advisory suggestion only | P1; no public endpoint in v1 |

## Model transport and controls

Server-only configurable eligible Meta model via actual supported participant account; validate real model ID and structured response *before* any live claim. Provider configuration (`META_MODEL_API_KEY`, `META_MODEL`, `META_API_BASE_URL`) is illustrative until access is confirmed. CI uses templates/mocks without paid inference. Keep every model call consented, bounded, timed out, spending capped, sanitized and versioned with provider provenance. Never expose raw hidden grader, system credentials, repo secrets, private user content or unreviewed source to Meta. A model cannot create an approved executable scenario or certify an outcome.

## Engineering / cost balance

Reuse existing M6 ticket IDs (see [milestone](../milestones/m6.md)). The hypothesis and challenge should add **two high-value, independently visible Meta contributions** rather than a multi-agent swarm. Evidence interpretation is a conditional third call after a protected run. Real agent remains Codex in Docker Sandbox; no model switching is required to make Meta central. If Meta API is unavailable, show a **labeled template/recorded fallback** and do not claim live Meta use.

## Defensible claims

B benefits architecture: requires matched A/B using protected oracle. Meta **caused an incremental benefit**: needs equally informed strong non-Meta roadmap-aware control under same downstream agent/task/budget/Verify and counts Meta inference overhead. Good prompt responses alone are not measured benefit. Store losing/neutral cases; show counterarguments and clear limits.

See [full protocol](META-ARCHITECTURE-SCIENTIST.md) and [evaluation](09-evaluation-plan.md).
