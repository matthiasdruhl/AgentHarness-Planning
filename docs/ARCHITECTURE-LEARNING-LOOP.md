# ForeCode — Evidence-Driven Architecture Learning Loop

**Planning date:** October 29, 2026. **Status:** proposed P1/P2 architecture, not an implemented feature, measured gain, trained policy, or permission to run experiments. **Product framing:** ForeCode is an architecture scientist that can retain trustworthy experimental lessons and improve its *future advisory recommendations*. Its protected tournament and evaluator remain the sources of evidence; the learner never becomes an evaluator.

**Priority:** retain the event's [P0 critical path](HACKATHON-CRITICAL-PATH.md), the Nov 2 feature freeze, and the Nov 4 submission deadline. An authentic supervised coding-agent experiment and excellent demonstration are more important than adding a learning badge. This document expands the existing S5 adaptive-selector concept; it neither makes S5 mandatory nor changes any of the [49 frozen v1 definitions](CONTRACT-FREEZE-v1.md). The separate [implementation and verification plan](LEARNING-LOOP-IMPLEMENTATION-PLAN.md) contains PR-size tasks, gates, tests and rollback instructions.

## 1. Thesis and hypotheses

**User outcome:** When a developer confirms a future requirement, ForeCode should progressively improve its estimate of whether changing the current architecture *now* is worth the preparation effort, and recommend a scoped strategy—or abstain—supported by evidence from comparable, independently graded evolutions.

Today the [Architecture Tournament](ARCHITECTURE-TOURNAMENT-PROTOCOL.md) asks, on one frozen scenario, whether A (sound current architecture), B (Meta-informed preparation) or sometimes C (equally informed strong non-Meta preparation) makes an identical future coding task easier after counting upfront cost. A **learning loop** makes the outcomes of many honest tournaments reusable without treating one run as general truth.

Testable research hypotheses:

1. **H-L1, experience transfer:** Given *only pre-decision context* and previously accepted, verified experiment records, a retrieval-based advisor makes better out-of-sample strategy choices than a fixed roadmap-aware baseline across independently selected future tasks.
2. **H-L2, adaptive policy:** With sufficient diverse training episodes, a constrained contextual-bandit policy makes better *out-of-sample choices* than both the fixed baseline and the retrieval-only advisor under the same observation and cost budget.
3. **H-L3, calibrated uncertainty:** A policy explicitly allowed to decline advice should reduce unsupported confident recommendations without unacceptable loss of decision coverage.
4. **H-L4, Meta attribution (independent question):** Meta-generated hypothesis/features improve choices over an equally informed non-Meta feature/proposal baseline, with other components and experimental costs controlled. Success in H-L1/H-L2 does not prove H-L4.

Each hypothesis is falsifiable; a negative or null result is a valid outcome. No automated suggestion is equivalent to proof of future performance or long-run maintainability in production.

## 2. What learns — and what emphatically does not

### The controlled decision

The first learning task is **recommendation strategy selection**: for a newly confirmed roadmap intent and current architecture, predict which *human-reviewable preparation strategy*, including **do nothing yet**, is worth testing. The policy provides a ranked, evidence-linked shortlist, uncertainty and an abstention option. Example bounded strategy families:

- **KEEP:** retain a correct, simple status quo; do not refactor speculatively.
- **BOUNDARY:** introduce a narrowly scoped ownership/authorization or module-interface boundary.
- **ADAPTER:** isolate a likely volatile dependency behind a small adapter.
- **EVENTS:** prepare for justified asynchronous/event-driven interactions, only if actual requirements warrant it.
- **OTHER_REVIEWED:** explicit human-approved extension; never free-form model-authored executable policy.

These labels are *candidate classes*, not assertions that the label can be implemented consistently across repos. Each candidate has a concrete implementation description and cost. Action eligibility is determined from approved project constraints before policy ranking. Different projects may have different eligible actions; record the candidate-set identity. Do not treat unoffered actions as failures.

**Default:** KEEP or ABSTAIN when evidence is absent, compatibility is dubious, the observed context is out of distribution, or the cost of needless complexity is high. A learning policy does **not** merge code, modify the user's architecture, launch an agent, authorize spend, change protected verification, or override developer choices.

### Separate three meanings often conflated as RL

| Stage | Name | Mechanism | Honest claim |
| --- | --- | --- | --- |
| L0 | **Evidence memory / case-based learning** | Retrieve comparable, admissible historical tournaments and summarize verified tradeoffs with their limits | Reuse prior empirical knowledge; **not** reinforcement learning |
| L1 | **Constrained contextual bandit** | Update a small policy mapping pre-decision context and eligible strategy to expected reward from admissible outcome feedback | A form of reinforcement learning, **only if policy weights actually update from rewards** |
| L2 | **Sequential learning / full RL research** | Model a *sequence* of propose -> investigate -> revise decisions with constrained rewards, delayed outcome and controlled exploration | Research program, **not** implied by L0/L1 or a prompting loop |

Plain prompt memory, Meta-generated reflections and a line chart are not evidence of learned improvement. Fine-tuning Meta's LLM is **not** a prerequisite. Early learning should happen in a small, inspectable policy; Meta remains an eligible model for hypothesis generation and non-authoritative interpretation.

### Optional adjacent learning target: experiment prioritization

Later, the learner may **rank which already human-approved visible experiment** is most informative under a fixed budget. This is *experimental design*, distinct from choosing favorable evidence. Its objective is decision-relevant information gain, not a higher B win rate. Never let the learner select, reveal or rewrite protected hidden tests or post-hoc choose which experiment is reported. Pre-register experiment selection rules and include all attempted studies. Existing S5 remains a restricted visible-scenario selector; this roadmap does not silently promote it.

## 3. System architecture and bounded data flow

~~~
Confirmed intent + source-backed graph + explicit goals
                     |
            approved visible context
                     v
     Meta Scientist: candidate + hypothesis + challenge
                     |
               human review
                     |
           frozen tournament study
          A / B / optional strong C
                     |
     approved local coding-agent execution
                     |
     independent network-off evaluator
                     |
  immutable receipts + prep/downstream telemetry
                     |
        trusted private evidence intake
          /        |          \
   rejected    admissible    insufficient
                   |
       versioned learning observation
                   |
      dataset snapshot + admissibility audit
                   |
      L0 retrieval / L1 training (offline)
                   |
        frozen versioned policy artifact
                   |
   shadow -> advisory suggestion with uncertainty
                   |
        new human-approved experiment
~~~

**Trust boundary:** The learner consumes an independently authenticated, allowlisted projection of run facts. It cannot grade source code, mint VERIFIED, read protected oracle bodies, invoke the agent runner, write manifests, choose hidden checks or change receipts. The public web UI remains **read-only for experiments**. Learning/training is an operator-local offline command, not a public internet-accessible trainer or autonomous workflow.

Existing owners remain canonical: developer-local tournament/runner, independent evaluator and immutable receipts, server-owned sanitized evidence projections, frozen v1 contracts, Meta Scientist proposal protocol, and the eventual read-only browser presentation. The learning service is a **sidecar** after trusted evidence ingestion. Its local training data, telemetry and policy artifacts must not be mistaken for trusted evaluator artifacts.

### Split contexts to prevent leakage

- **Pre-decision context:** observed source graph, dependency/fan-out *estimates*, size/architecture metadata, confirmed future intent, declared risk and budget preferences, available strategy classes. This is all the policy may see at recommendation time.
- **Evaluation-only facts:** final source tree, changed files, all task outcomes, exact future oracle/verdicts, measured costs and iterations, candidate-specific failures. These are **targets or explanatory evidence**, never input features for the same decision.
- **Never exposed to learning/model:** hidden test bodies, oracle answers, unreviewed private source, provider credentials, personal host paths, protected evaluator controls, internal secrets.
- **Post-decision analysis:** can show sanitized, trustworthy outcome evidence but must not retroactively rewrite the recorded pre-decision prediction or eligibility set.

A document written after test results is not valid proof that the prediction was made earlier. The observation must bind to an independently held original commitment/decision timestamp and content identity. Reject backdated or unsigned assertions of chronology.

## 4. The minimum learning observation (proposed additive sidecar)

Keep the frozen PairManifestV1, ExperimentRunV1, EvaluatorReceiptV1, MetaHypothesisV1, comparison and certificate schemas **unchanged**. The following is a conceptual private learning-sidecar record, not a new endpoint or a patch to frozen JSON. Implementation must independently version and validate its own schema *after* design approval.

| Group | Required fields / semantics |
| --- | --- |
| Identity | observationId; sidecarSchemaVersion; studyId/version; decisionId; immutable record digest; creation/ingest timestamps |
| Lineage | independently held preregistration ID; initial source/lock/task hashes; approved intent/revision, visible scenario pool and candidate-set digest; provenance and consent scope |
| Context | featureExtractorId/version; pre-decision feature vector + missingness mask; dataset/license/rights eligibility; repository-family/group ID (privacy-safe) |
| Decision | original candidate strategy IDs and eligibility; selected strategy; policyId/version or HUMAN/STATIC; predeclared objective and cost units; known selection propensity if randomized |
| Experiment | matching A/B/(C) arm IDs and exact initial/prepared/final source references; frozen task/suite/agent/model/runtime/budget policy; independent evaluator and receipt IDs |
| Outcomes | per-arm actual status: VERIFIED / REJECTED / INSUFFICIENT_EVIDENCE / BLOCKED / CANCELLED / NOT_RUN, with exact authenticated checks and recorded attempted runs |
| Measurements | per-arm preparation and downstream time, tokens, cost, attempt counts and regressions, with units, method/source and explicit nulls; source-diff and complexity descriptors separately |
| Quality gate | admissibility decision, comparison validity, policy-eligible reward channels, excluded/partial reasons, data-quality flags and human-reviewed corrections |
| Audit | append-only revision/supersession link; sanitizer version; snapshot ID; training/validation/holdout partition and allocation provenance |

**Missing is not zero:** absent prep time, token usage, spend, source integrity, receipt or grader authorization remains UNKNOWN/NULL. Failure/blocked attempts are retained for reporting, even if not eligible to supply a numeric reward. Every learner training row points to authenticated source facts rather than copied self-attested JSON. Unrelated customer repositories may not be combined without opt-in and rights review.

**Example, explanatory only (not a contract fixture):**

~~~json
{
  "observationId": "illustrative-episode-01",
  "studyId": "illustrative-booking-team-permissions",
  "originalDecision": {
    "strategy": "BOUNDARY",
    "policyVersion": "static-human-v0",
    "eligibleActions": ["KEEP", "BOUNDARY"],
    "predictedOutcome": "BOUNDARY may reduce permission-change effort"
  },
  "preDecisionFeatureVersion": "architecture-features-v0",
  "evidence": {
    "pairValidated": false,
    "independentReceipts": [],
    "status": "INSUFFICIENT_EVIDENCE"
  },
  "reward": null,
  "trainingEligible": false,
  "reason": "illustrative-only; no actual run"
}
~~~

**Do not upload or use this sample as measured training data.**

## 5. Eligibility, rewards and responsible optimization

Learning starts with an **admissibility gate**, not a scalar score. A row can train a measured-outcome policy only when (a) pre-decision context and candidate set were frozen before proposal/results, (b) the downstream tasks, information, agent/model/config/tools/resources/budgets and evaluator are honestly comparable for the stated question, (c) both arms' initial functionality and the independent required checks have trusted authenticated source-bound outcomes, (d) preparation costs are accounted for where used, and (e) no forbidden holdout/provenance leakage occurred.

**Verdict precedence:**

1. **Validity and safety:** INVALID / blocked / missing/stale/forged custody => **no usable reward**, not failure=0 and not success=1. Retain for audit and abstention analysis.
2. **Correctness:** compare independently verified future requirements and preservation of prior behavior. The quality gate records pass/fail for each arm, including rejected outcomes with valid receipts.
3. **Prep-inclusive effort:** if both arms pass all required checks, compare only *available, commensurate measured* prep + downstream effort or cost; preserve units and sources. Initial prep never becomes free.
4. **Complexity and maintenance:** use predeclared supported measurements only (e.g., added public interfaces, dependency edges, changed modules, review burden), not aesthetic LLM opinions or assumed maintainability. Do not double-count files touched across phases.
5. **Uncertainty:** unknown time, spend, complexity, unequal agent conditions, or an unvalidated comparison remains unknown. Do not manufacture a winner or fractional reward.

The first reward function is **lexicographic and conservative**, not an unreviewable weighted magic number:

- When one arm passes all required checks and the other has an authentic failure on the same frozen task, prefer the passing arm for correctness.
- When both pass, declare a *correctness tie*. Prefer a lower **predeclared** measurable prep-inclusive resource only when the measurement is present and comparable; otherwise no preference/reward for that dimension.
- When both fail, report no successful strategy; retain failure observations for descriptive modeling but no forced positive winner.
- Never label B favored merely because it is more complex, Meta-proposed or has a better natural-language explanation.
- A project can rationally prefer KEEP. The no-change arm is a real action with opportunity cost, not a strawman.

**Scalar bandit reward (only after objective is agreed and versioned):** train separate correctness and conditional cost estimates, then form an explicit bounded objective with correctness as a hard constraint. For example, a policy can first estimate probability of passing independent checks and only among acceptable actions minimize expected *prep-inclusive* cost. Avoid a single scalar that trades real correctness for tiny cost savings. Any normalized cost advantage must specify units, baseline, treatment, measurement and denominator; guard division by zero; do not compare runtime across uncalibrated hardware without normalization. Set thresholds/risk tolerance **before evaluation**, not after seeing which model looks best.

**Failure vs no evidence:** a genuine trusted REJECTED run can inform correctness; a not-run, synthetic, unauthorized, inconclusive or unverifiable run cannot. Repeated retries are separately counted and cannot be cherry-picked. No winner/rank is asserted on insufficient evidence.

**Subjective feedback:** developer ratings and user satisfaction can improve retrieval or user-facing personalization, but are tagged SUBJECTIVE, not treated as independent architectural correctness or verifier rewards. Self-reported progress, Meta's interpretation and generated tests are never trusted reward authorities.

## 6. Candidate learning methods and promotion logic

### L0 — retrieval and evidence memory (first possible slice)

Index approved, sanitized **pre-decision** project feature summaries and link to authenticated historical outcome summaries. Given a new case, rank similar cases using deterministic features and a versioned distance function. Show why cases matched, where they differ, what tests were run, whether KEEP won, exact sample counts and missing evidence. Produce an advisory recommendation or ABSTAIN with links to original records. A model may summarize retrieved facts but must not invent effect sizes, convert estimated to measured, or make its own verdict.

This is feasible with only a handful of real cases **as a prototype**, but cannot support statistical claims of increasing accuracy. With one valid booking tournament, the system can show “one scoped lesson” rather than “continuously improving.”

### L1 — constrained contextual bandit (first genuine RL)

**State/context x:** a fixed-size, privacy-minimized feature vector extracted *before* the architecture choice. Candidate groups include confirmed future-change type, module coupling/fan-out with UNKNOWN flags, current test coverage quality, existing boundary structure, high-risk interfaces, graph uncertainty, repo size buckets, available implementation budget and expected change frequency **as declared**. Exclude repo/project names, unique labels and anything unavailable at live decision time. Every feature has extraction/version/test provenance.

**Action a:** one eligible bounded strategy label with a concrete, human-approved proposal. KEEP is always an available comparator when safe. A ranking action cannot sneak in a different coding agent, prompt, oracle, model version, future task or budget.

**Feedback r:** only the independently admissible, predeclared correctness/cost objective above. Feedback may be delayed and sparse; duplicate runs and highly correlated tasks must not be treated as independent samples. Explicitly log exposure/selection probabilities when randomized exploration is permitted.

**Candidate algorithm:** a simple regularized linear contextual bandit (e.g., LinUCB or Bayesian/Thompson-style linear model), trained offline on a bounded action set with fixed preprocessing and deterministic seeds. Compare with simpler supervised per-strategy outcome prediction and retrieval. Do **not** assume bandits outperform these controls. Small data or incomplete propensity/overlap means keep L1 in shadow mode; never present causal “learning improvement.”

**Exploration policy:** no autonomous real-world architecture edits or unapproved runner invocations. Early exploration is over **safe, pre-registered, operator-approved, visible study candidates** or offline already-permitted comparisons. Candidate assignment is frozen before outcomes and independent grading. Later online exploration needs explicit per-run consent, spend caps, rollback paths and randomized-policy review; a deterministic human-selected history cannot honestly be evaluated using inverse propensity scoring without known assignment propensities and common support.

**Policy confidence/abstention:** calibrate on held-out tasks; use out-of-distribution checks, action-support counts, budget constraints and explicit unknown labels. Abstain if no comparable reference cases, unsupported action, feature mismatch, insufficient validated trials or overlapping uncertainty intervals. Do not print pseudo-precise success probabilities from a handful of runs.

### L2 — post-hackathon sequential learning research

A more ambitious system could decide whether to ask for more roadmap context, recommend KEEP, commission one *approved* experiment, revise an architectural proposal, or stop. The state would contain a sequence of observation and evidence updates; rewards would reflect eventual verified functionality and whole-trajectory cost. This is a constrained, partially observed planning/MDP problem with expensive delayed reward and strong safety needs. It **does not exist yet**.

Start with offline replay/simulation using a **separately validated** environment, and label simulated trajectories. Do not claim a simulator's reward equals production maintainer outcomes. A real RL learner must obey the same oracle isolation and authorization boundaries, keep full failed trajectories, and be evaluated on held-out tasks, not on its own generated scenarios.

## 7. Integration with Meta Scientist

Meta's differentiated job remains falsifiable reasoning, *not* certification. The learning component adds one optional bounded input: **an evidence-card selection** from a trusted, sanitized L0 index, only if the user explicitly consents to sharing its contents. Meta may consider historical counterexamples and articulate an updated hypothesis (e.g., “a permission boundary helped in two related tasks but did not in one”), but the source of each claim must be linked and scoped.

Recommended three-step inference separation:

1. **Without learning:** Meta receives confirmed visible context, proposes A/B, prediction and challenge.
2. **With learning advisory:** a versioned local policy suggests eligible candidate families with evidence cards and abstention; Meta must still generate falsifiable, reviewable hypotheses. Humans can reject the ranking.
3. **After independent run:** Meta can interpret only fresh, trusted, server-authorized sanitized evidence; it cannot add training labels, alter immutable outcomes or infer a hidden grader answer.

**Meta causal attribution:** compare the same learning architecture with/without eligible Meta-produced features/hypotheses against a strong non-Meta roadmap-aware feature control, on the *same held-out scenario selection and matched run conditions*. Keep effects separate: tournament architecture effect, learning-policy effect, Meta-specific incremental effect and evaluator/Verify effect. An improvement after adding memory alone is not proof Meta caused it.

No unsolicited model retraining, automatic open-weight fine-tuning, user repository upload or paid provider calls; require explicit consent and independent budget authorization for each applicable workflow. Fine-tuning is a later optional experimental arm, not a hackathon requirement.

## 8. Training data collection and split integrity

**Data sources:** the initial booking study, subsequent operator-approved visible fixtures and possibly independent public benchmarks with vetted licenses, clean task identities and real protected results. A corpus of synthetic mock receipts is suitable for testing code paths **only**, never for training claims. An AI-generated task may be useful for development but is neither a hidden independent test nor intrinsically unbiased.

Maintain three distinct immutable stores:

- **Evidence ledger:** original, append-only actual experiments with authenticity/custody, failures and blocked trials.
- **Learning dataset snapshot:** allowlisted derived feature/outcome rows with explicit eligible/ineligible status, dataset digest, extraction code version and transparent exclusions.
- **Model registry:** immutable policy weights, hyperparameters, training split digests, seeds, objective version, signed/hash-bound release, offline evaluation results and promotion/rollback decision.

**Splits:** partition by repository family, closely related codebase and future-task template *before* model search. All clones, repeated seeds, B/C variants, and near-duplicate requirements belong to the **same group**. Never place a variant of a studied booking task into “unseen” evaluation just because its run ID changed. Reserve an independent held-out family/task collection, ideally under neutral custody, before policy selection and parameter tuning. If only booking data exist, report an illustrative in-domain case study and **no transfer/generalization claim**.

Log action availability, selection route (human vs randomized vs policy), probabilities when meaningful, source/feature version, recorded-time ordering, training-time cutoffs and rights/consent. Evaluate temporal leakage and repeat count per independent family; repeated runs reduce measurement noise but do not create independent new domains.

## 9. Evaluation: what would constitute evidence of continual improvement?

**Primary evaluation question:** On previously unseen, preregistered future-requirement problems, does the frozen learning policy select a *correctly implementable* and less costly strategy more often than fair, informed alternatives?

**Comparators:** (1) KEEP/status quo, (2) a credible roadmap-aware deterministic/template strategy, (3) Meta Scientist without prior experience, (4) Meta Scientist + L0 case retrieval, (5) L1 learned policy (+ Meta if explicitly tested). Each sees matched pre-decision information; where implementation experiments are required, run the same agent/model/config, oracle, budget and full preparation-inclusive accounting. Predeclare which comparisons answer “learning helped” versus “Meta helped.”

**Primary metrics, under independent grading:** required-check correctness or failure with trusted evidence; decision regret relative to **actually tested eligible actions** only, with verified outcomes; and total prep-inclusive effort for verified ties where comparable. “Oracle-best” is not known for untested actions. Keep labels task-specific. Do not turn an invalid reward into an apparent optimal action.

**Secondary:** coverage-at-abstention rate, calibration (e.g., Brier score if sample and probability semantics allow), avoidable-refactor rate, number of retried/failed tasks, learning/inference time and spend, over-masking of uncertainty, worst-case regression and fairness across scenario families. Report numerator, denominator, independent group count, exclusions, negative results and limitations. No claims of measured productivity gains from static graph estimates or unit-test-only synthetic fixtures.

**Study design:** fix objective, eligible actions, data snapshot, policy versions, holdout groups, seeds, comparisons and statistical method *before* observing evaluation outcomes. Prefer paired independent future tasks where feasible; retain task/agent noise and preparation cost. Provide per-task table plus grouped confidence intervals when sample size warrants. Cluster uncertainty by repo/task family, not 50 runs of one fixture. With few cases, use descriptive results and confidence limits, not an invented p-value or “X% better” generalization.

**Offline policy evaluation:** if historical decisions were randomized with known propensities, inverse propensity / doubly robust estimators are possible *only with overlap, valid propensities and stated assumptions*. In paired, controlled tests where all eligible actions were actually evaluated, report that narrow full-information comparison. Nonrandom human-picked histories do not justify counterfactual reward claims for actions never tested.

**Release threshold:** a new policy cannot claim superiority until an independently frozen held-out evaluation meets predeclared practical effect, correctness and uncertainty gates without changing its test after results are seen. No threshold is chosen post-hoc to declare success. If evidence is weak, retain the fixed policy and label new one EXPERIMENTAL or SHADOW.

## 10. User experience — Architecture Learning Lab

Add an optional **Learning Lab** section subordinate to the primary Foresight -> Tournament -> Verify/Decision Report. It must not crowd out the 3-minute story or imply autonomous decisions.

Proposed workbench hierarchy:

1. **Current recommendation:** KEEP / candidate / ABSTAIN, explicitly ADVISED, never VERIFIED. Show reason, developer-approved context, provenance of Meta proposal vs learned policy, and a “why not” counterargument.
2. **Similar evidence:** compact cards showing *how many independent repo/task families* support or contradict, actual tested setup, costs and pass/fail, and limitations. A single case says “1 verified case” not “91% confidence.”
3. **Learning timeline:** dataset snapshot and policy versions with actual admissible training episodes, held-out checks and negative findings. Do not show “improved” animation unless actual compared frozen evaluations exist.
4. **Policy comparison:** fixed baseline vs retrieval vs learned policy only when matched held-out records exist; show missing data/INSUFFICIENT states plainly.
5. **Inspect/override:** human chooses KEEP/alternative and may export bounded hypothesis/report; no automatic code merge or hidden tester access.

**Illustrative demo progression:** First, show a permitted permission-change case and what the grader established (or NOT_RUN); next, show an evidence card that would be retained, including KEEP/tie/failure; finally, show an optional frozen policy choice on a distinct future scenario **only if it is actually evaluated**. Otherwise present a labeled concept diagram, not simulated performance or fake learning history.

A more polished visual could reveal a “before memory / after memory” architecture rationale, but the two outputs need exact source-model-prompt IDs and must not be described as measured improvements without a real held-out comparison. Accessibility, mobile support, keyboard semantics, reduced motion and redaction inherit the [impact-first v5 guidance](../design/forecode-v5/impact-first-design-spec.md).

## 11. Safety, abuse and failure cases

- **Reward hacking / evaluator gaming:** candidate/model cannot see hidden oracle, write reward, choose grader, alter source receipt or optimize on held-out answers. Keep oracle independent, sealed and read-only to the learner.
- **Cherry-picking / confirmation bias:** include KEEP, losing arms, all attempts and excluded/invalid run counts; preregister target scenarios and reports. Do not rank learner by favorable scenarios it selects after seeing results.
- **Feedback contamination:** generated Meta interpretations, user ratings, prompt text and synthetic reports are untrusted; only independently authenticated outcomes may support rewards.
- **Policy drift / forgetting:** immutable historical snapshots, explicit policy/feature versions, regression sets and rollback. Changing feature extractor invalidates incompatible weights unless migrated and re-evaluated.
- **Data leakage and rights:** user confirmation/consent, allowlisted minimal graph features, rights review before cross-project training, no secret/PII/host key transmission, per-tenant isolation and deletion/retention design before any multi-user data store.
- **Exploration externalities:** only a human/operator can approve running a protected study. No policy-selected unbounded experiments, paid calls, code edits, deploys or unapproved network access.
- **Sparse data / overfitting:** do not fit or promote a bandit on one booking study or many clones. Report “insufficient data”; prefer transparent case retrieval and no-change control.
- **Nonstationarity:** different agents, model versions, tasks, test suites, costs and stacks require cohort/feature provenance; compare only like for like and monitor data drift.
- **Correctness/safety trade:** use hard validity/correctness constraints; do not buy nominal speed by dropping required verification.
- **Model hallucination:** provenance-bound citations; unknown stays unknown; no confidence theater or claim of mathematically optimal future architecture.
- **Public artifact security:** never ship original protected oracle contents, raw transcripts, private dataset, access tokens or unredacted source to hosted UI.

## 12. Success criteria and non-goals

**Possible P1 success, conditional:** A locally generated, authenticated learning snapshot from at least one genuine protected study; deterministic L0 case retrieval returning honest cited reasons/abstentions; tests prove synthetic/forged/missing receipts cannot train it. This is a reusable evidence memory, **not RL**.

**Possible L1 research success:** A frozen bounded contextual-bandit policy actually changes from admissible feedback; its offline/held-out evaluation against a strong fixed and L0 baseline is measured on independent scenarios; outcome quality and abstention are reported transparently. A failed test is useful and may require rolling back to L0.

**Post-event L2:** Repeated multi-step experiment planning and adaptation under an approved risk budget, with separate rigorously validated environments and independent outcome measurement.

**Not goals:** unlimited autonomous refactors; automatic “better architecture” commits; public training endpoint; self-awarded certificates; training an LLM as a hackathon vanity exercise; claiming general learning from synthetic demonstration; replacing Meta Scientist; changing M0–M10 or frozen v1 contract definitions; sacrificing isolation, cost bounds or the submission deadline.

## 13. References and handoffs

- [Implementation slices, verification and kill gates](LEARNING-LOOP-IMPLEMENTATION-PLAN.md) — execute only after current P0 acceptance.
- [Architecture Tournament Protocol](ARCHITECTURE-TOURNAMENT-PROTOCOL.md) — fairness, freeze, status quo A, B and optional C, protected receipts.
- [Meta Architecture Scientist](META-ARCHITECTURE-SCIENTIST.md) — falsifiable hypotheses, bounded challenges, sanitized non-authoritative interpretation.
- [Evaluation plan](09-evaluation-plan.md), [Judge success gates](JUDGE-SUCCESS-GATES.md) — measured vs estimated and proper causal attribution.
- [Stretch promotion and kill switches](STRETCH-PROMOTION-GATES.md), [critical path](HACKATHON-CRITICAL-PATH.md) — P0 overrides all learning work.
- [Security and privacy](10-security-and-privacy.md), [execution authorization](EXPERIMENT-EXECUTION-AUTHORIZATION.md) — no new runner authority.
- [Contract Freeze v1](CONTRACT-FREEZE-v1.md) — no in-place changes.
- [Official participant rules](OFFICIAL-PARTICIPANT-RULES-2026-10-26.md) — never transplant planning files or pre-event code into the standalone event submission.
