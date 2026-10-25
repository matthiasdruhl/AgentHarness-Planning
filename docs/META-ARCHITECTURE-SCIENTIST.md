# Meta Architecture Scientist — P0 product protocol

**Status:** approved design overlay for October 26 kickoff, **not** a claim that live Meta requests, model benefits, Codex experiments or evaluator results exist. This complements [Contract Freeze v1](CONTRACT-FREEZE-v1.md) using **new, additive** versioned artifact types; old v1 artifact meanings, scoring rubric and trusted receipt semantics remain unchanged.

## Product thesis

Forecode is a **controlled architecture research tool**. Meta is its scientific reasoning engine, not a thin "recommend refactor" endpoint and not the grading authority. It (1) forms falsifiable hypotheses about a known roadmap, (2) actively proposes plausible counterexamples, and (3) revises explanations **after** consuming sanitized, independently verified outcomes. Codex is a controlled *implementation instrument*; the protected grader alone determines whether checks passed. Each model contribution can fail or be unhelpful.

**Product pitch:** "Forecode uses Meta to hypothesize, challenge and interpret future-proofing decisions—then tests them with coding agents and independent verification."

## P0 high-signal loop

1. **Confirm intent and graph.** User explicitly confirms future requirement and allows a sanitized, bounded repository-graph summary. Holdout and hidden oracle remain evaluator-only.
2. **Generate competing candidates.** Existing Meta `/api/foresight/propose` returns status quo A plus bounded B. The developer can choose and edit proposals. A strong equally informed non-Meta template baseline remains available.
3. **Meta hypothesizes.** New `POST /api/foresight/hypothesize` uses confirmed intents, visible graph, candidate IDs, an explicitly **non-heldout visible scenario set**, and consented goal. Returns structured `MetaHypothesisV1` containing a mechanism, one observable directional prediction, *what would falsify it*, assumptions and counterarguments. The claim is **not** a verified measurement or guaranteed future outcome.
4. **Meta challenges.** New `POST /api/foresight/challenge` inspects only already visible candidate/hypothesis/intent/**non-heldout scenario** context and proposes a **counterexample**, explicitly `reviewStatus=proposed` and `visibility=model_generated_not_heldout`. It includes an acceptance *outline*, not hidden tests or authorized shell instructions. UI labels as *Meta-generated scenario proposal*, never independently held out.
5. **Human gates + experiment.** Human may edit/approve a candidate or review a challenge. For the experiment, the trusted controller selects from **independently preapproved, frozen, documented** acceptance scenarios and policies. A model proposal cannot silently change tasks, run scripts, oracle, check policy or spend limits. A/B run the same selected downstream task and required Verify under matched conditions, if safe isolation succeeds. Negative or neutral outcomes stay visible.
6. **Independent evidence.** Protected evaluator grades **exact post-agent code** and emits receipts. Trusted server artifact loader constructs a *sanitized, allowlisted* `ScientistEvidenceSummaryV1` with run/receipt IDs, scoped statuses, limitations and no private test bodies, credentials, host paths or answer keys. Client-submitted `evidenceSummaryId` alone grants **zero trust**.
7. **Meta interprets.** `POST /api/foresight/interpret-evidence` takes only **server-resolved opaque `hypothesisId` and `evidenceSummaryId`**, plus explicit consent (not a client-supplied hypothesis body). Backend verifies the ID is preapproved and summary is sourced from fresh trusted artifacts; if not, 422/blocked. Meta sees only that bounded sanitized summary. It returns `MetaEvidenceInterpretationV1` with `assessment=consistent|inconsistent|mixed|insufficient_evidence`, counterevidence, uncertainties and a next question. Display beside—but never merged into—the immutable trusted VERIFIED/REJECTED/INSUFFICIENT_EVIDENCE certificate.
8. **Optional P1:** adaptive experiment selection from a fixed, human-approved **visible** scenario pool using Meta reasoning; no independent agent starts, silent changes of evaluation tasks, made-up probability or retroactive selection of favorable holdouts. Multi-agent debates and automatic iterative redesign are **P1 or post-event**, not critical path.

### Actual sequence versus browser demo

Browser can initiate bounded Meta model calls, but **never** runs a Codex shell/sandbox/grader. A developer-local CLI creates real measured artifacts; the hosted UI plays back sanitized records as **recorded** while optionally running live Meta reasoning on top. Record when each model response was actually made, and label playback accurately. Post-run interpretation is conditional on real allowed receipts. If no safe run exists, label experiment **not validated** and omit interpretation or mark insufficient evidence without fabricating an "analysis of results".

## Contract map / ownership

| Operation | Contract types | Owner and trust |
|---|---|---|
| Candidate proposal | existing `ProposeRequest/Response`, `ArchitectureCandidateV1` | `src/server/meta/candidates.ts`, data only |
| Hypothesis | `ScientistHypothesizeRequest/Response`, `MetaHypothesisV1`, `ScientistPredictionV1` | `src/server/meta/hypotheses.ts`; proposal only |
| Challenge | `ScientistChallengeRequest/Response`, `MetaChallengeV1`, `ScientistProposedChangeV1` | `src/server/meta/challenger.ts`; no evaluator secret or authority |
| Experiment | existing `PairManifestV1`, `ExperimentRunV1`, `EvaluatorReceiptV1` | **local** runner and isolated trusted evaluator |
| Sanitization | `ScientistEvidenceSummaryV1` and `ScientistObservedCheckV1` | trusted `src/server/artifacts/` loader builds from allowlisted receipts |
| Interpretation | `ScientistInterpretRequest/Response`, `MetaEvidenceInterpretationV1` | `src/server/meta/interpret.ts`; non-authoritative |
| Deterministic decision | existing `ScoreBasis`, `DecisionV1` | pure scoring code; Meta must not override math |
| Comparator | existing `MetaComparisonManifestV1` | experiment provenance, equal information and budgets |

**Exact shape source:** [JSON Schema catalog](../contracts/schemas/forecode-v1.schema.json), [API registry](../contracts/api-registry.json) and [new conformance fixtures](../contracts/README.md). New types are separately versioned; no silent mutation of `intent.v1`, `decision.v1` or `evaluator-receipt.v1`.

### Cross-record invariants — normative

- Hypothesis `candidateId` and `baselineCommit` match candidate/graph; each `intentId` references a **confirmed user-approved** intent; `visibleScenarioIds` reference permitted, *not held-out* scenarios. Unique IDs. Predictions refer to a **predefined observable metric**, comparator and disconfirmation condition. Reject "this will definitely save money" without evidence.
- Challenge `hypothesisId` and `targetCandidateId` resolve to the same hypothesis and graph baseline. Proposed change `intentIds` refer to approved intent context, even for speculative stress proposals. Review/visibility are fixed `proposed` and `model_generated_not_heldout`; no grader-adjacent privilege or invocation method exists.
- Provider `mode=live` only for an actual eligible Meta model reply with a non-null verified model/prompt/evidence identifier. Template fallback is explicitly template; a recorded Meta output is recorded; no origin laundering. The top-level response provider and each nested hypothesis/challenge/interpretation provider must match.
- `ScientistEvidenceSummaryV1` has **unique runIds and receiptIds**, scoped observation IDs and status values, and matching frozen hypothesis baseline. It is a **sanitized snapshot from a server-owned trusted artifact loader**, never a model-signed report, and synthetic fixture content is not trusted source data. Validate run/check membership and receipt links against the protected store **before** a model call. Do not pass hidden test names or diagnostics if they leak the holdout.
- Interpret request must resolve an **allowlisted server-stored** immutable hypothesis by ID, plus a protected summary with `summary.hypothesisId=hypothesis.id`; response must bind its IDs to the same pair. An assessment is a model's interpretation, **not** the evaluator verdict. Any changed underlying trusted evidence requires a new/invalidated summary and interpretation; old recorded interpretation must not be displayed as an analysis of current results.
- Limit hypotheses/challenges, calls, retries, provider spend and token context. Require consent for **each** model endpoint; redact personal data and prompt injection in code/comments. No dynamic tools or model-selected shell commands.

## Evidence and judging constraints

**Distinct causal questions:** Study F compares good status quo A vs B under equal downstream conditions and counts B upfront preparation. Study M tests *Meta added value*: Meta hypothesis/challenge-informed candidate versus a genuinely strong equally informed roadmap-aware/template comparator with same feature/task/agent/Verify/limits, and counts Meta inference/iteration cost. Claim only what actual evidence supports; one pair cannot establish general superiority.

**Fast demo:** developer says "we need team permissions later" → Meta hypothesis predicts smaller regressions for B → Meta proposes a plausible counterexample where B may add overhead → show controlled A/B result (even loss or no benefit) → Meta interprets real scoped evidence → export certificate; timeline and provenance visible. A template/strong human-roadmap comparison appears when available. Never turn suggested adversarial scenario into a *hidden test* after seeing results.

## Implementation sequencing / no scope explosion

- **P0:** existing propose; one hypothesis; one challenge; deterministic score; protected single booking A/B when safe; one optional interpretation of **real recorded trusted evidence**; honest browser demo. If no real receipts, omit step or show "awaiting verified evidence", do not fake it.
- **Conditional P0:** strong non-Meta control if claiming measurable incremental Meta effect (otherwise narrow claims).
- **P1:** adaptive selection from preapproved pool, repeat trials, multi-perspective debate, automatic revisions/feedback cycles, generalized SCBench. Do **not** require these to ship.
- Reuse **M6.1, M6.2, M6.3, M6.4, M6.6** for Meta Scientist plus **M3/M7/M8** for evidence/report. **No new competing milestone or ticket IDs.**

## Acceptance tests to run in app

Valid and invalid structural fixtures; stale/dangling context; unauthorized intent; no consent; spoofed provider; model-origin challenge falsely promoted to heldout; challenge for different candidate; trying to interpret unknown/untrusted summary ID; model rewording/altering a failed check; redacted hidden test text; identical frozen benchmark policies across A/B; absent measured data; template vs live labeling; live provider timeout/error; recording claims. A separate integration test must prove **no public route executes sandbox commands**.

This update changes planned responsibilities, not executable code or verified results. Rule clearance, live Meta access, safe Docker sandbox and independent grader execution remain open launch gates.
