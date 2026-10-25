# 02 — Unified architecture

```text
Developer intents ──> Registry (local demo / typed JSON)
Repository snapshot ──> TS dependency + Next route analyzer
          │                     │
          └──> Meta adapter: structured candidate/scenarios (server-only)
                                      │ schema/provenance validation
                                      v
                         Robust regret evaluator (pure)
                                      │
                           architecture candidates A/B
                                      v
                 Developer-local sandbox experiment runner
                 + trusted hidden acceptance oracle
                                      v
                       Verify evidence/verdict engine
                                      v
                  Immutable evidence ledger + certificate
                                      v
                       Read-only demo web dashboard
```

## Trust boundaries
The web dashboard may parse bounded user-supplied metadata but cannot execute imported source, shell commands, agent prompts or generated actions. The developer-local CLI runs **only pinned and reviewed tasks** in verified disposable isolation. Trusted evaluator holds hidden acceptance tests outside agent-writable workspace. Meta-generated scenarios are data, not commands.

## P0 modules
`src/lib/contracts` Zod typed models; `src/lib/graph` TS AST/import and Next route metadata; `src/lib/decision` deterministic scenario scoring; `src/lib/verify` normalized check results; `src/server/meta` isolated inference; `src/lib/report` pure certificate serializer; `scripts/experiments` developer-only CLI with budget + isolation. UI steps: intent → candidates/graph → decision → evidence/comparison → export.

## Deterministic graph limits
Imports/exports, path aliases, package boundaries, and route entrypoints supported explicitly. Dynamic imports, framework runtime registration, indirect service injection and execution-time correctness are unproven unless separate integration tests cover them. `ts-morph` is candidate parser; no static score is a measured development cost.

## Experiment reproducibility
Pin git tree, commit, benchmark fixture SHA-256, agent model/version/config, tool allowlist, time budget and evaluator version. Baseline/candidate both start from verified current requirements. Held-out specs frozen in advance. No claim of causality from non-matched runs.

## Architecture decisions
Use transparent robust scenario/regret comparison, **not** probabilistic Expectiminimax unless real calibrated scenario probabilities exist. Alpha-beta is not promised; visual decision tree can show candidate/scenario outcomes.

## Canonical ownership and evidence
Controlled fixture is **fixtures/booking-v1/**, certificate serializer **src/lib/report/**, trusted sanitized read-only evaluator artifact loader **src/server/artifacts/**. The developer-local runner and protected oracle remain separate. Final-tree freshness and modeled-effort unit restrictions live in [implementation contract](CANONICAL-IMPLEMENTATION-CONTRACT.md).
