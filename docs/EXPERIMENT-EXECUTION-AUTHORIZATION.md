# ForeCode — bounded experiment authorization and evidence provenance

**Planning overlay, October 27, 2026.** This guide refines existing M2/M3/M7 sandbox and evaluation work. It introduces **no new milestone or frozen public schema** and is not proof of an implemented security control, approved run, or completed study. The event-created submission repo must author its implementation and relevant tests afresh; this pre-event planning document is read-only reference. See [security](10-security-and-privacy.md), [booking-first sandbox runbook](DOCKER-SANDBOX-BOOKING-FIRST.md), [architecture tournament protocol](ARCHITECTURE-TOURNAMENT-PROTOCOL.md), and [PR-sized queue](IMPLEMENTATION-QUEUE-2026-10-27.md).

## Purpose and scope

Make every real coding-agent architecture experiment **preauthorized, constrained by independently enforced runtime boundaries, and attributable to exact evidence**. This helps prevent unauthorized task changes and misleading comparisons; it is **not** a general-purpose prompt-injection prevention system. Do not build a second execution engine, policy service, audit platform, taint tracker or security-review model for the hackathon.

**Priority:** P0 only insofar as this formalizes safety/fairness controls already required to admit real-agent execution. **Never introduce an additional blocking implementation step merely to add a manifest** when the reviewed runtime already enforces equivalent controls and can record an immutable pre-run commitment. Focus on one genuine independently graded single-arm run, then the fair A/B pair. UI presentation is P1 after real evidence; optional integrity and audit enhancements are stretch.

## 1. Operator-approved, pre-run experiment envelope

Before handing work to an agent, an authorized **developer-local operator** selects and commits the exact experimental envelope. It is an append-only, immutable private record, bound to the existing study/run/arm identities; the agent may receive only the minimal safe subset of permitted task instructions.

Record, with actual observed/pinned values rather than placeholders presented as facts:

- **Provenance:** study version, arm (A/B/C), frozen future-task ID/hash, approved requirement revision, operator approval/authority, decision time, trial index and preregistration commitment.
- **Input and equality:** pinned original tree/export/lockfile hashes, prepared-tree hash when applicable, fixed visible roadmap/task information, approved preparation instructions, agent/provider identity and version, prompt-template identity, consistent tool access and predeclared retry/order policy.
- **Action envelope:** permitted writable paths and exact workspace root, intended tool/command allowlist or equivalent runtime capability boundary, phase-specific egress policy, credential separation, environment/secret denial and read-only grading boundary. No unbounded shell/network privileges disguised by a manifest declaration.
- **Resource limits:** bounded wall time, steps/process count, token/spend if measurable/enforceable, cancellation behavior, owner approval for paid inference, and expected cleanup/termination proof.
- **Independent checks:** exact protected evaluator/suite/policy/check IDs and trusted custody references; independent oracle never goes to the agent, Meta, or the public browser. Bind manifest identity to evaluated output evidence.

**No agent or Meta proposal may rewrite the envelope, adjust the oracle, grant itself more time, change arm-specific budgets, or convert a blocked run into an approved one.** Changing the scope requires a new recorded owner decision and, for comparability-affecting changes, a new preregistered study version; retain old attempts.

A content digest detects changes only relative to a trusted independently held commitment. A signed file is useful only if an actual trusted signing and verification boundary exists; **do not call a hash, model signature, JSON file, or issuer string an authorization mechanism**. A plan produced by Meta is an untrusted research proposal until the operator approves it. Authorization belongs to the operator-controlled runtime.

## 2. Real enforcement, not just a document

**Admit execution only after the existing M2 real-agent gates pass** for the exact runtime: negatively tested guest-to-host isolation, no mounted host keys/home/SSH agent/Docker socket, no evaluator access, approved restricted provider egress if needed, protected network-off grading, hard limits, restart-safe cancellation and cleanup. Never infer authorization from successful offline no-inference grader acceptance.

- Enforce workspace and credential boundaries **outside** the agent, using the independently reviewed sandbox/controller and filesystem/network restrictions. An agent's own instruction or self-reported consent is not an enforcement control.
- If the agent has unrestricted shell access inside its writable workspace, per-command or per-file restrictions in a manifest may be **advisory** unless independently mediated/tested. State the actual enforcement scope; use only the proved least-privilege boundary. Do not claim every tool call is mediated when direct shell or other paths bypass mediation.
- Treat model-generated code, tool output, repository content and web content as untrusted inputs. The agent must not read the protected oracle or write authenticated result/approval records.
- A hard denial, timeout, revoked authority, integrity mismatch or exceeded budget ends the attempt in a durable **BLOCKED/FAILED/CANCELED** record, not a silent reset or a success.
- An optional cheap preflight can hash preapproved controller policy/manifest/runtime identities before and after the run, but **only if** it adds verified protection without delaying P0. Do not claim comprehensive tamper detection or automatic agent recovery.

## 3. Evidence chain and fair comparisons

Use existing authentic source records, protected evaluator receipts, and CertificateV1/ExperimentRunV1/PairManifestV1 interfaces wherever already defined. **Do not duplicate the ledger, change frozen public contracts, or invent new unreviewed report fields.** Keep private operator-only details outside public Git; expose only allowlisted, redacted projections through the existing read-only loader.

Minimum inspectable causal chain:

1. **Authorized:** immutable run/arm/study commitment, initial/prepared source and frozen task, agent/model/tools/policy/budgets/oracle identities, approval state.
2. **Attempted and produced:** exact admitted runtime identity, actual attempt status including denials/timeouts, cancellation evidence, post-agent final tree digest, observable changed-file/diff and known/unknown resource use.
3. **Independently observed:** protected evaluator binding to the exact final tree, suite and policy/check digests, authenticated check outcomes, custody/status and reason for rejected/insufficient evidence.
4. **Reported:** matched A/B/(C) source/authorization identities, preparation-inclusive measurement, failures/exclusions and explicit limits on conclusions. Never let the model decide verification or elevate guessed telemetry.

For fairness, independently compare per-arm envelopes **before execution**. A and B (and C, if promoted) may have different **architecture preparation** and exact prepared trees, but must share the same starting source, future task/visible roadmap, comparable downstream agent/tools/runtime, network and credential policy, budgets and protected evaluator. If a control differs materially, label the results **not comparable**, not a win. Keep preparation cost separate and included in total.

## 4. Minimal acceptance and misuse checks

Developer-local synthetic tests can validate envelope structure and binding; they are **not proof of runtime isolation**. For actual execution admission also collect owner-reviewed real negative controls and evidence:

- Valid authorized task is admitted; absent/expired/revoked/wrong-arm/wrong-source/wrong-policy commitment is denied **before** agent launch.
- Agent attempts to access forbidden paths, credentials, host resources or grader are blocked by the independent sandbox; egress is limited to explicitly approved provider destinations for the agent phase and denied during grading.
- Budget exceeded, process timeout, cancellation, restart/cleanup failure and mid-run control mismatch are captured as failed or blocked attempts, never as verification success.
- Manipulated final-tree digest, stale or forged receipt, substituted evaluator/check set and missing attempt/accounting data cannot produce an authenticated successful certificate.
- Cross-arm contamination, changed prompt/task, unequal budget or leaked oracle produces an **INVALID/INCONCLUSIVE** comparison.
- Public UI can display approved safe evidence only, cannot authorize/execute/cancel experiments or accept agent-supplied verdicts.

Record **what was tested**, actual runtime versions, observed failures, caveats and separate operator sign-off. Do not claim completed tests from this plan.

## 5. Implementation and stop/go sequence

**P0-R3 — real-agent safety review:** check whether the current reviewed controller already enforces the envelope; add only missing minimum operator-private pre-run binding and negative tests, or explicitly mark BLOCKED. Do not implement new universal authorization middleware.

**P0-R5 — one real smoke:** run one permitted arm under the approved envelope, collect a genuine post-agent tree and independently graded receipt, preserve denied/canceled attempts.

**P0-R7 — fair A/B:** lock identical downstream envelopes and the architecture-specific prep records before execution, bind all receipts to that commitment, report costs, missing observations and failed comparisons.

**P0-R8/P1 — evidence display:** reuse existing private evidence/certificate reader and show a small **Authorized → Changed → Verified** provenance chain only if genuine linked records exist. Do not build a new execution endpoint or unrelated security dashboard.

**Stretch, only after P0 and demo draft:** simple runtime integrity preflight or richer private audit lineage, subject to proof that it is actually enforced. **Out of scope this hackathon:** generalized taint tracking, arbitrary tool-call Gate, agent restart/quarantine service, security-review agents and a separate signed-ledger platform.

**Kill switch:** If mandatory isolation, credential separation, authorization or honest receipt custody cannot be demonstrated, keep real agent execution **OFF** and display NOT_RUN/BLOCKED/INSUFFICIENT_EVIDENCE; continue safe Meta, frontend and submission work. Never relax the boundary to improve demo scores.
