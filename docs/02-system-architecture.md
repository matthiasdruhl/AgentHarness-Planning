# 02 — Unified architecture

```text
Developer intents ──> Registry (local demo / typed JSON)
Repository snapshot ──> TS dependency + Next route analyzer
          │                     │
          └──> Meta Scientist (server only): candidates + falsifiable hypothesis
                                  + adversarial challenge *proposals*
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

## Contract Freeze v1 — exact trust/dependency chain
[M1–M7 interface freeze](CONTRACT-FREEZE-v1.md) defines exact identity and hash relationships. Protected experiment artifacts must bind `evaluatedTreeSha256`, `fixtureSha256`, `evaluatorSha256`, `testSuiteSha256`, `requiredPolicySha256` and run/check ID references. `evaluator-receipt.v1` is a protected separate artifact; no web/API client can mint it by supplying JSON. Diagram ordering is logical only; graph can precede intent collection. Heuristic scenario scores use frozen additive modeled points and minimax regret; observable run measurements never mix with those estimates.

## Meta Scientist first-class logical branch (Oct 25)
Meta observes *confirmed* intents and a sanitized graph, proposes A/B candidates with a falsifiable hypothesis, and generates a **public, proposed** counterexample. The developer/trusted controller—not Meta—chooses reviewed frozen tasks and executes Codex only inside verified isolation. Protected grader emits trusted receipts independently. **Only after** a real receipt exists may a server sanitization layer expose scoped observations to a Meta **interpretation** call. That interpretation is advisory and never rewrites the certificate. See [Meta Scientist protocol](META-ARCHITECTURE-SCIENTIST.md). This is a bounded loop, not unattended agentic self-refactoring or silent selection of tests.

## Controlled coding-agent abstraction (ADR-016)
The **developer-local-only** experiment controller may select a `CodexSandboxRunner` (first safety-smoke target) or a conditional `MuseCodeRunner`. Both receive a reviewed fixed task, sanitized source snapshot, caps, tool policy and candidate ID and return observed process metadata, redacted log/patch and exact final tree digest. Neither agent proposes certified outcomes, sees held-out grader material, controls evaluator policy nor runs from the web app. Within any matched A/B or Meta comparator study pin **one** runner and model/config across all arms; cross-agent differences are a separate experiment. This note adds **no** new v1 API/schema. [Muse runner protocol](MUSE-CODE-INTEGRATION.md).
