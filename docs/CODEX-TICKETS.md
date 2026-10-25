# Forecode — canonical executable Codex ticket queue

**Total:** 68 concrete tickets, numbered `M0.1.1` through `M10.5.1`. Use [milestone files](../milestones/README.md) for full objectives/acceptance; F01–F14 are only parent categories. Dates are targets, **dependencies and safety gates dominate calendar order**.

## Reusable Codex execution prompt
> Read AGENTS.md, docs/21-execution-index.md, docs/IMPLEMENTATION-MASTER-PLAN.md, docs/CONTRACT-REGISTRY.md, docs/10-security-and-privacy.md and milestones/MX.md for the assigned ticket ID. Implement only that ticket in the separate app repository once organizer rules allow. Keep data schema/API ownership unchanged. Add success, failure and security tests. Run actual supported scripts; report changed paths, test command/exit code, SHA, evidence artifacts, remaining blockers and next ready ticket. If sandbox isolation not independently verified, do not execute agents.

## Ticket queue
| Ticket | Milestone | Parent F-ticket | Deliverable | Acceptance |
|---|---|---|---|---|
| [M0.1.1](../milestones/m0.md#M01-rules-and-eligibility) | Oct 25–26 | F01 | Rules and eligibility (`docs/16-rules-and-compliance.md`) | Document official-rule source/date, permitted assets and unresolved restrictions; stop on missing permission |
| [M0.2.1](../milestones/m0.md#M02-meta-access-and-budgets) | Oct 25–26 | F01 | Meta access and budgets (`docs/05-meta-integration.md`) | Record real model identifier, response format, account access and budget; never commit key |
| [M0.3.1](../milestones/m0.md#M03-sandbox-selection) | Oct 25–26 | F01 | Sandbox selection (`docs/10-security-and-privacy.md`) | Isolation proof or explicit no-execution contingency |
| [M0.4.1](../milestones/m0.md#M04-benchmark-freeze) | Oct 25–26 | F01 | Benchmark freeze (`docs/09-evaluation-plan.md`) | Hash evaluator/holdout before optimizer exposure and identify custodian |
| [M0.5.1](../milestones/m0.md#M05-repository-launch-gate) | Oct 25–26 | F01 | Repository launch gate (`AGENTS.md`) | Signed go/no-go checklist; do not build app before rule clearance |
| [M1.1.1](../milestones/m1.md#M11-nextjs-initialization) | Oct 26 | F01 | Next.js initialization (`src/app/, package.json`) | Clean install, typecheck, lint, tests and production build pass |
| [M1.2.1](../milestones/m1.md#M12-module-boundaries) | Oct 26 | F01 | Module boundaries (`src/lib/, src/server/, scripts/experiments/`) | Public routes cannot import experiment execution modules |
| [M1.3.1](../milestones/m1.md#M13-schema-implementation) | Oct 26 | F01 | Schema implementation (`src/lib/contracts/`) | Valid examples parse; additional fields, unknown operations and paths are rejected |
| [M1.4.1](../milestones/m1.md#M14-ci-and-test-harness) | Oct 26 | F01 | CI and test harness (`tests/, .github/workflows/`) | Mock provider tests pass without credentials |
| [M1.5.1](../milestones/m1.md#M15-configuration-and-errors) | Oct 26 | F01 | Configuration and errors (`src/server/config/, src/lib/errors/`) | Missing key gives controlled status; no secret included in logs |
| [M2.1.1](../milestones/m2.md#M21-vetted-booking-fixture) | Oct 27 | F02/F03 | Vetted booking fixture (`fixtures/booking/`) | Initial behavior passes protected acceptance suite |
| [M2.2.1](../milestones/m2.md#M22-protected-acceptance-oracle) | Oct 27 | F02/F03 | Protected acceptance oracle (`scripts/evaluator/, fixtures/holdout/`) | Agent cannot write or read hidden oracle during optimization; tamper attempt rejected |
| [M2.3.1](../milestones/m2.md#M23-disposable-sandbox) | Oct 27 | F02/F03 | Disposable sandbox (`scripts/experiments/isolation/`) | Fail closed without isolation; no host secret or privileged mounts |
| [M2.4.1](../milestones/m2.md#M24-agent-run-lifecycle) | Oct 27 | F02/F03 | Agent run lifecycle (`scripts/experiments/runner/`) | Timeout, kill switch and cleanup verified on forced failure |
| [M2.5.1](../milestones/m2.md#M25-artifact-collection) | Oct 27 | F02/F03 | Artifact collection (`scripts/experiments/artifacts/`) | JSON manifest and hashes reproducibly emitted; absent token data null |
| [M2.6.1](../milestones/m2.md#M26-baseline-reproducibility) | Oct 27 | F02/F03 | Baseline reproducibility (`reports/, scripts/experiments/`) | Two run manifests (or honest reason not run); all failures retained |
| [M3.1.1](../milestones/m3.md#M31-verdict-normalization) | Oct 28 | F04 | Verdict normalization (`src/lib/verify/results.ts`) | Missing/invalid check insufficient; failing required check rejected |
| [M3.2.1](../milestones/m3.md#M32-type-and-build-checks) | Oct 28 | F04 | Type and build checks (`scripts/evaluator/checks/`) | Passing/invalid fixtures produce independent correct status |
| [M3.3.1](../milestones/m3.md#M33-functional-acceptance) | Oct 28 | F04 | Functional acceptance (`scripts/evaluator/acceptance/`) | Agent-edited local tests cannot change oracle verdict |
| [M3.4.1](../milestones/m3.md#M34-boundary-enforcement) | Oct 28 | F04 | Boundary enforcement (`src/lib/verify/boundaries.ts`) | Forbidden import rejected; allowed layer import accepted |
| [M3.5.1](../milestones/m3.md#M35-stub-and-reachability-hints) | Oct 28 | F04 | Stub and reachability hints (`src/lib/verify/diagnostics.ts`) | Test mocks and unrelated TODOs do not cause categorical rejection |
| [M3.6.1](../milestones/m3.md#M36-bounded-feedback) | Oct 28 | F04 | Bounded feedback (`scripts/experiments/feedback.ts`) | Retry cap enforced; hidden answers never included |
| [M3.7.1](../milestones/m3.md#M37-threat-and-verdict-tests) | Oct 28 | F04 | Threat and verdict tests (`tests/verify/`) | Forged agent success is not verified; path escapes rejected |
| [M4.1.1](../milestones/m4.md#M41-intent-persistence-model) | Oct 29 | F05/F06 | Intent persistence model (`src/lib/intents/`) | Confirmed/tentative/rejected parsed; provenance required |
| [M4.2.1](../milestones/m4.md#M42-state-transitions) | Oct 29 | F05/F06 | State transitions (`src/lib/intents/store.ts`) | Editing/rejecting invalidates cached scenario decisions |
| [M4.3.1](../milestones/m4.md#M43-meta-extraction) | Oct 29 | F05/F06 | Meta extraction (`src/server/meta/intent.ts`) | Malformed model output rejected; draft never auto-confirmed |
| [M4.4.1](../milestones/m4.md#M44-confirmation-interface) | Oct 29 | F05/F06 | Confirmation interface (`src/app/intent/`) | User can accept/discard each proposal and inspect its source |
| [M4.5.1](../milestones/m4.md#M45-dependency-and-provenance) | Oct 29 | F05/F06 | Dependency and provenance (`src/lib/intents/provenance.ts`) | Deleted references no longer drive recommendations |
| [M4.6.1](../milestones/m4.md#M46-privacy-and-negative-tests) | Oct 29 | F05/F06 | Privacy and negative tests (`tests/intents/, tests/meta/`) | Unconsented text never sent to provider; recorded mode identified |
| [M5.1.1](../milestones/m5.md#M51-ast-loader) | Oct 30 | F07/F08 | AST loader (`src/lib/graph/parse.ts`) | Known import fixtures map correctly, unresolved modules flagged |
| [M5.2.1](../milestones/m5.md#M52-dependency-graph) | Oct 30 | F07/F08 | Dependency graph (`src/lib/graph/build.ts`) | Stable IDs, reproducible edges and no invented connections |
| [M5.3.1](../milestones/m5.md#M53-next-route-entrypoints) | Oct 30 | F07/F08 | Next route entrypoints (`src/lib/graph/routes.ts`) | Route fixture recognized; imported module alone not called integrated |
| [M5.4.1](../milestones/m5.md#M54-boundary-contracts) | Oct 30 | F07/F08 | Boundary contracts (`src/lib/graph/contract.ts`) | Unknown action rejected; distinct layers enforced |
| [M5.5.1](../milestones/m5.md#M55-blast-radius-scorer) | Oct 30 | F07/F08 | Blast-radius scorer (`src/lib/decision/impact.ts`) | Deterministic score, not falsely labeled development hours |
| [M5.6.1](../milestones/m5.md#M56-regret-evaluator) | Oct 30 | F07/F08 | Regret evaluator (`src/lib/decision/regret.ts`) | Same-input deterministic output; mismatched units rejected |
| [M5.7.1](../milestones/m5.md#M57-graph-control-fixtures) | Oct 30 | F07/F08 | Graph control fixtures (`tests/graph/, tests/decision/`) | Cycles terminate; unknowns and uncertainty remain explicit |
| [M6.1.1](../milestones/m6.md#M61-candidate-proposal) | Oct 31 | F06/F08 | Candidate proposal (`src/server/meta/candidates.ts`) | Schema-valid bounded A/B with risks and provenance |
| [M6.2.1](../milestones/m6.md#M62-future-scenarios) | Oct 31 | F06/F08 | Future scenarios (`src/server/meta/scenarios.ts`) | Scenario traces to authorized intent and assumptions |
| [M6.3.1](../milestones/m6.md#M63-adversarial-challenger) | Oct 31 | F06/F08 | Adversarial challenger (`src/server/meta/challenger.ts`) | No access to hidden holdout or synthetic command execution |
| [M6.4.1](../milestones/m6.md#M64-proposal-cross-validation) | Oct 31 | F06/F08 | Proposal cross-validation (`src/lib/contracts/validation.ts`) | Untrusted model proposals cannot bypass typed allowlist |
| [M6.5.1](../milestones/m6.md#M65-decision-orchestration) | Oct 31 | F06/F08 | Decision orchestration (`src/lib/foresight/`) | A/B scored on same scenarios; model does not select winner alone |
| [M6.6.1](../milestones/m6.md#M66-explanations-and-provenance) | Oct 31 | F06/F08 | Explanations and provenance (`src/lib/foresight/explain.ts`) | Distinguish hypotheses/estimates from measurements |
| [M6.7.1](../milestones/m6.md#M67-template-baseline) | Oct 31 | F06/F08 | Template baseline (`src/lib/foresight/templates.ts`) | Live vs templates auditable; model outage does not fake live output |
| [M7.1.1](../milestones/m7.md#M71-pair-manifest) | Nov 1 | F09/F10 | Pair manifest (`scripts/experiments/manifest.ts`) | Invalid unequal-condition pair fails validation |
| [M7.2.1](../milestones/m7.md#M72-initial-correctness) | Nov 1 | F09/F10 | Initial correctness (`scripts/evaluator/baseline.ts`) | Both pass same initial independent oracle or comparison marked invalid |
| [M7.3.1](../milestones/m7.md#M73-roadmap-extension) | Nov 1 | F09/F10 | Roadmap extension (`scripts/experiments/paired.ts`) | Observed checks and run evidence for both variants |
| [M7.4.1](../milestones/m7.md#M74-frozen-holdout) | Nov 1 | F09/F10 | Frozen holdout (`scripts/evaluator/holdout.ts`) | Holdout hash predates selection; no optimizer leakage |
| [M7.5.1](../milestones/m7.md#M75-compare-telemetry) | Nov 1 | F09/F10 | Compare telemetry (`src/lib/evaluation/metrics.ts`) | Missing usage not represented as zero; raw outcomes retained |
| [M7.6.1](../milestones/m7.md#M76-upfront-costs) | Nov 1 | F09/F10 | Upfront costs (`src/lib/evaluation/cost.ts`) | Total cost shows boundary upfront cost and future change separately |
| [M7.7.1](../milestones/m7.md#M77-reproducibility-report) | Nov 1 | F09/F10 | Reproducibility report (`reports/, src/lib/evaluation/report.ts`) | No cherry-picked race; controlled evidence links and manifests |
| [M8.1.1](../milestones/m8.md#M81-unified-workflow) | Nov 2 | F10/F11 | Unified workflow (`src/lib/workflow/`) | Every transition has typed input/output and error state |
| [M8.2.1](../milestones/m8.md#M82-foresight-ui-flow) | Nov 2 | F10/F11 | Foresight UI flow (`src/app/foresight/`) | User can inspect assumptions and alternatives |
| [M8.3.1](../milestones/m8.md#M83-verify-experiment-flow) | Nov 2 | F10/F11 | Verify experiment flow (`src/app/experiments/`) | No execution API; A/B checks displayed with provenance |
| [M8.4.1](../milestones/m8.md#M84-evidence-ledger) | Nov 2 | F10/F11 | Evidence ledger (`src/lib/evidence/`) | Every displayed measured fact references run/check ID |
| [M8.5.1](../milestones/m8.md#M85-foresight-certificate) | Nov 2 | F10/F11 | Foresight certificate (`src/lib/report/certificate.ts`) | Schema validation and hash links pass |
| [M8.6.1](../milestones/m8.md#M86-integration-security) | Nov 2 | F10/F11 | Integration security (`tests/e2e/, tests/security/`) | Smoke passes; public route cannot execute shell |
| [M8.7.1](../milestones/m8.md#M87-deployment-freeze) | Nov 2 | F10/F11 | Deployment freeze (`deployment/, CI`) | Production build and clean-browser workflow pass; feature freeze recorded |
| [M9.1.1](../milestones/m9.md#M91-four-act-walkthrough) | Nov 3 | F11/F12 | Four-act walkthrough (`src/app/demo/`) | No unsupported numbers; genuine provenance visible |
| [M9.2.1](../milestones/m9.md#M92-architecture-comparison) | Nov 3 | F11/F12 | Architecture comparison (`src/app/components/`) | Accessible textual equivalent and estimates disclaimer |
| [M9.3.1](../milestones/m9.md#M93-split-screen-evidence) | Nov 3 | F11/F12 | Split-screen evidence (`src/app/components/experiments/`) | Recorded not labeled live; errors shown |
| [M9.4.1](../milestones/m9.md#M94-certificate-presentation) | Nov 3 | F11/F12 | Certificate presentation (`src/app/components/certificate/`) | Links to check IDs, model data and upfront cost |
| [M9.5.1](../milestones/m9.md#M95-benchmark-writeup) | Nov 3 | F11/F12 | Benchmark writeup (`reports/README.md`) | No invented claims, reproducibility steps present |
| [M9.6.1](../milestones/m9.md#M96-record-and-rehearse) | Nov 3 | F11/F12 | Record and rehearse (`submission/`) | Working link, readable labels, offline fallback |
| [M10.1.1](../milestones/m10.md#M101-production-smoke) | Nov 4 | F12 | Production smoke (`test logs / deployment`) | Observe result; fix only blockers |
| [M10.2.1](../milestones/m10.md#M102-security-review) | Nov 4 | F12 | Security review (`security checklist`) | No private keys/oracle source exposed |
| [M10.3.1](../milestones/m10.md#M103-source-documentation) | Nov 4 | F12 | Source documentation (`implementation README`) | Third party assets and reproducibility documented |
| [M10.4.1](../milestones/m10.md#M104-artifact-checks) | Nov 4 | F12 | Artifact checks (`submission checklist`) | Judge URLs accessible and artifact hashes match |
| [M10.5.1](../milestones/m10.md#M105-submit-and-record) | Nov 4 | F12 | Submit and record (`submission receipt`) | Confirmation recorded; otherwise explicitly incomplete |

## Sequencing
M2 trusted oracle is needed before M3 acceptance; M4 and M5 can follow M1 in parallel but M6 requires both; M7 requires M2, M3 and M6. M8 requires artifacts from M7; M9 requires M8; M10 requires M9. Never turn a parent workstream into a second contradictory task list.

## No-fake-progress rule
All tickets start NOT_STARTED in app-repo journal. This planning document records assignments only; no tests or experiments have been run by adding it.
