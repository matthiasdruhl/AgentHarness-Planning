# ForeCode — Learning Loop Implementation Plan and Verification Gates

**Prepared:** October 29, 2026. **Status:** future implementation plan only; no learning system exists because this document is committed. **Normative conceptual source:** [Evidence-Driven Architecture Learning Loop](ARCHITECTURE-LEARNING-LOOP.md). **Precedence:** organizer rules, [hackathon critical path](HACKATHON-CRITICAL-PATH.md), [frozen contracts](CONTRACT-FREEZE-v1.md), [independent tournament protocol](ARCHITECTURE-TOURNAMENT-PROTOCOL.md), [Meta Scientist](META-ARCHITECTURE-SCIENTIST.md), [security](10-security-and-privacy.md), and [stretch promotion gates](STRETCH-PROMOTION-GATES.md) prevail over any learning experiment.

**Release decision:** A complete, evidence-backed Architecture Tournament and demonstrable Meta role are prerequisites. **No automatic RL development before P0**. Nov 2 remains feature freeze; Nov 4 at 9 PM ET remains submission cutoff. No changes to the M0–M10 milestone hierarchy, canonical 68-ticket board or any of the 49 frozen v1 contracts.

## A. Implementation boundaries / ownership

Design as a separately versioned **private offline learning sidecar**. Suggested after-event file ownership below is a sketch; Codex must audit the exact current separate ForeCode application repository and adjust rather than blindly creating duplicate modules.

| Logical unit | Suggested app-side module | Responsibility and forbidden capability |
| --- | --- | --- |
| Learning contracts | src/lib/learning/contracts/ | Independently versioned validated sidecar observations, feature vectors, action enumerations and unknown/null semantics; **never mutate frozen v1 JSON** |
| Admissibility and projections | scripts/learning/intake/ and/or src/server/learning/intake/ | Operator-local import from trusted evaluator-owned sanitized artifact loader, append-only decisions and reason codes; no model/raw-receipt trust |
| Feature extraction | src/lib/learning/features/ | Deterministic pre-decision context only, versioned extractor, missingness flags and scoped eligibility |
| Reward composition | src/lib/learning/rewards/ | Pure transformations of admissible evaluator observations into bounded, predeclared separate correctness and conditional-cost reward channels |
| Case retrieval (L0) | src/lib/learning/retrieval/ | Deterministic distance/filters, independent-case counting and evidence-linked rationales; no oracle or tool execution |
| Dataset snapshots | scripts/learning/dataset/ | Operator-local immutable snapshots, split/group manifests, exclusion logs, rights/consent and digests |
| Policy training (L1) | scripts/learning/policy/ | Fixed-seed offline trainer and model evaluation, no network credential, no public API, no agent runner import |
| Policy selection | src/lib/learning/advisor/ | Read-only policy inference; outputs ADVISED / ABSTAIN with strategy and evidence; NEVER auto-runs tasks |
| Policy registry | scripts/learning/registry/ | Immutable policy version metadata, training-set digest, evaluation/approval, rollback pointer |
| Public presentation | src/components/learning-lab/ and read-only data view | Safe learning cards, abstentions, policy version/coverage and true independent-study comparisons; no training or execution route |

If the current app uses different paths, respect its established boundaries. Most modules should be side-effect-free and runnable in pure unit tests; trusted private ingestion must never be a client-side trust decision. **No hosted train, grade, agent, arbitrary code or shell endpoint.**

**Ingestion security:** trust an existing authenticated evaluator-owned artifact interface, not a user-supplied JSON object that merely contains a receipt ID, hash or status. Validate current source, owner and custody as required by the tournament protocol. The learning sidecar may reference public-safe digests but must not publish protected raw inputs. Never use a synthetic test fixture or planning document as a measured historical outcome.

## B. Stages and PR-size work packages

These are **proposed new work packages** named LL-0 through LL-6 for planning only, **not canonical milestone or ticket IDs**. Complete each on a separate reviewable app branch once prerequisites are genuinely met. Do not assume that the existing developer-local sandbox is authorized simply because its offline tests pass.

### LL-0 — Design and eligibility freeze (planning; no runtime changes)

**Inputs:** current app tree/SHA, real available signed/authoritative receipts, exact normal and failure cases, owner-approved feature/reward objective, consent and rights review.

**Implementation:**
- Document one narrow learned decision: KEEP vs a human-reviewed permission-boundary preparation on booking, and a path to more strategy families only when comparable data exist.
- Specify action eligibility by architectural context; no forced B.
- Freeze a context-feature specification distinguishing available-before-decision fields from outcome/holdout-only fields.
- Freeze independent evaluation goals and hard correctness gate. Document all expected unknown measurement sources before trials.
- Record data rights, cross-project consent/tenant restrictions, provenance, exact time/order proof and operator authority.

**Exit:** approved proposal with no new machine authority; signed-off limited action set and reward/validation rules; clear data-status count. **If no genuine case exists, design only.**

### LL-1 — Evidence admission and outcome ledger (after actual protected receipts)

**Scope:** authenticated intake, no learner yet.

- Accept only trusted private artifact loader output for the same study and exact arm/evaluator/source/receipt identities. Validate preregistration chronology, original intent/source, task/agent/oracle parity and prep-inclusive measurements.
- Classify each episode: ADMISSIBLE_CORRECTNESS, ADMISSIBLE_COST, DESCRIPTION_ONLY, INVALID, BLOCKED, INSUFFICIENT, DUPLICATE, RIGHTS_DENIED. Allow more than one channel with explicit reasons; e.g. correctness usable but cost unknown.
- Preserve all attempted A/B/(C) runs, failures, cancellations and exclusions; never transform a selected successful attempt into the “whole experiment.”
- Produce an immutable private episode record and sanitized public-safe summary from an allowlist.
- Implement revocation/supersession, not silent edit-in-place; deleting sensitive records requires a separately approved privacy and retention policy, including derived snapshots.

**Exit criteria:** successful intake of one *genuine* authenticated scenario if such evidence exists; synthetics validate logic but cannot establish live ingestion. Forged/stale/mismatched receipt, missing prep or invalid controls are rejected or marked ineligible. All statuses remain visible in operator audit.

**Suggested branch:** codex/learning-evidence-intake. **No real agent required to test ingestion; no real reward claimed without accepted real receipts.**

### LL-2 — Versioned features and conservative rewards

**Scope:** pure features and outcome aggregation with deterministic property tests.

- Feature extractor runs only on decision-time source-backed graph and confirmed visible intents. Record feature version, missing values and graph uncertainty.
- Compute exact comparable prep + downstream totals where units and telemetry exist. Distinguish total cost from sum of times when work overlaps; never add distinct-source “files touched” as a total.
- Correctness comes exclusively from independent authenticated checks. Among correct arms, optional measured resource preference is descriptive unless explicitly predeclared.
- Preserve per-arm correctness, resource observations, no-winner and missingness separately; no combined mystery score.
- Provide both KEEP and alternative strategies with transparent case-specific preference; can emit ABSTAIN when evidence is missing.
- Define synthetic example inputs for tests, **not** policy-training rewards.

**Exit:** no positive reward from unverified/synthetic/blocked records; verified rejection is distinguishable from absence of evidence; ties remain ties; all cost transformations are unit- and validity-tested. Run property tests for no-change preference and monotonicity under lower prep-inclusive cost *with equal correctness*. Noncomparable runners produce NULL comparison.

**Suggested branch:** codex/learning-features-rewards.

### LL-3 — Evidence Memory (L0) with read-only advisory

**Scope:** useful MVP without misleading RL label.

- Store a curated snapshot of admissible historical observations; implement explainable nearest-case retrieval with action/feature support, sensitivity to missingness and project-family deduplication.
- Show positive and negative references, KEEP wins, real measurement provenance, sample size and known gaps. Policies require no Meta call to retrieve facts.
- A consented Meta Scientist may receive an allowlisted retrieval summary as context, but only via current approved server Meta pathways and with source IDs. Never share raw user code/private grader evidence automatically.
- Add “Why this applies / Why it might not” and ABSTAIN. Make the fact that it is case-based retrieval, not reinforcement learning, prominent.
- Gate all UI cards behind observed evidence; empty state “No admissible cross-project learning evidence yet.”

**Exit:** on fixed fixture inputs, deterministic retrieval order, citation integrity and abstentions pass; no “improved” labels, fake history or confident success rates; browser read-only route cannot train or run code. All regression tests and accessibility checks pass.

**Suggested branch:** codex/learning-evidence-memory.

**Potential hackathon inclusion:** only after proven P0 and stable clean-browser demo; otherwise retain as a **planning diagram** and do not count it among shipped event features. If a single authentic case exists, display the **one** case with limitations, not a trend chart.

### LL-4 — Small constrained contextual-bandit research prototype (L1)

**Hard entry:** several **independent** admissible task/repository families, available frozen learning snapshot, approved split strategy, explicit scalar decision objective with correctness gate, and owner-approved risk/rights/budget. Repeated runs of booking-v1 alone **do not** meet the independent-family criterion. No arbitrary minimum N is promised; assess whether model estimation and meaningful validation are actually possible.

- Train only offline on a frozen snapshot; compare simple supervised risk/cost prediction, fixed roadmap-aware policy and L0 retrieval. A small regularized linear contextual bandit is a candidate, not a required winner.
- Use fixed seeds and documented hyperparameters, feature/action version, conservative optimization and decision abstention. Store weights and algorithm artifacts; no LLM weights are silently changed.
- Log decision-time action propensities if randomized; do not invent them from deterministic human-selected history. Treat unobserved counterfactual rewards as missing.
- Implement deterministic train/eval split by independent repo/task families with all duplicates and experiment arms grouped together. Re-train or tune only on training/development partitions.
- Model registry includes frozen snapshot hash, objective version, trainer code SHA, feature version, config, seeds, evaluation record, rights and signoff.
- Policy initially runs **SHADOW**: it records what it would recommend, has no effect on experiments or human choice. Later ADVISORY requires independent quality review and explicit approval.

**Exit:** policy actually updates after authenticated reward input; fixed-seed reproducibility; no training on blocked/synthetic/held-out rows; holdout scores are separately logged; no superiority claim without truly independent tasks and precommitted threshold; rollback to L0 in one decision.

**Suggested branch:** codex/learning-bandit-shadow. **Post-event by default.**

### LL-5 — Blinded or otherwise preregistered controlled evaluation

**Purpose:** establish whether learning improves architecture decisions beyond memory or Meta prompting.

- Define claims separately: evidence memory lift vs fixed; contextual-bandit lift vs evidence memory/fixed; incremental Meta model lift vs strong equally informed non-Meta control.
- Independent owner/custodian freezes holdout task family, oracle and case assignment before running policy selection; confirm no candidate or trainer saw protected contents. If this cannot be proven, call it *visible preregistered*, not blind.
- At decision time freeze policy version, context, eligible action set, selected action and predictions. Run same future requirement under matched agent/model/config/tools/limits and protected Verify.
- Count B/C preparation before future task; retain losers, blocked, failed and all retries. Make no claim that the model was evaluated on unchosen actions unless those arms were *actually* run.
- Display per-task correctness, resource effort, decision preference, regret only over observed eligible arms, abstention coverage, group count and relevant confidence bounds.
- Use clustered uncertainty by task/repo family when enough groups exist. No N=1 statistical significance or bogus confidence score.
- Assess net value of learning after training/selection overhead, not simply time to produce an LLM recommendation.
- Precommit practical gain and no-worse-correctness criteria; if invalid, unclear or negative, preserve results and revert to prior policy.

**Exit:** independently auditable, reproducible comparison with explicit qualifications. Otherwise SHADOW / INCONCLUSIVE, not “continuously improves itself.”

**Suggested branch:** codex/learning-preregistered-evaluation.

### LL-6 — Multi-step sequential RL study (L2, post-event)

Only after L1 shows repeatable value and the owner approves separate research goals:

- Define finite state/action/stop semantics for propose -> question -> ask approval -> preapproved experiment -> revise explanation. Explicitly exclude grader choice, hidden test access and auto-merge.
- Measure complete trajectories with delayed verified reward and complete resource cost, including failed and skipped experiments.
- Prefer validated offline simulator before costly online training; record sim-vs-reality gap. Simulated success is not production effectiveness.
- Human sign-off on exploration, model access, spending, API provider and privacy/rights; independent evaluator frozen outside the policy's control.
- Evaluate against L0/L1 and non-learning Meta controls on independent frozen cases, including task distribution shift, no-change wins and adversarial reward hacking.

**Exit:** no claimed general self-improvement without credible data and controlled evaluation. **Not a 2026 hackathon dependency.**

## C. Proposed private learning-sidecar type map

Conceptual TypeScript-like names below describe boundaries only; **do not paste into frozen v1 JSON Schema**:

| Type | Trust / origin | Invariants |
| --- | --- | --- |
| LearningContextV1 | pre-decision approved context and deterministic feature extractor | Immutable decision-time snapshot, missingness flags, approved intent and source identity |
| LearningActionSetV1 | trusted locally configured strategy catalog + human gate | Eligible actions and costs, includes KEEP where valid, source/case hash |
| LearningDecisionV1 | STATIC / HUMAN / L0 / L1 policy output | Actual policy ID/version, chosen action, abstention and explanation, action propensity only if known; frozen before outcome |
| LearningObservationV1 | signed/verified reference to protected evidence projection | Exact study, arms, original decision, authentic receipt references, validated cost/provenance; no evidence laundering |
| RewardAssessmentV1 | pure local reward estimator on admitted observation | Separate correctness and conditional prep-inclusive cost, explicit nulls, rewardObjectiveVersion and eligibility |
| LearningDatasetSnapshotV1 | operator-controlled immutable dataset | Content digests, feature/reward versions, rights, exclusions, split family/groups and freeze |
| LearningPolicyV1 | offline trainer and owner-controlled registry | Fixed action set, weights/config, training hash, seed, status SHADOW/ADVISORY/RETIRED, approval |
| LearningEvaluationV1 | independent frozen held-out scoring | Version-pinned policy/baseline/tasks/cases, complete failures, effect/evidence/limitations |

**Invariant:** These private learning types are **not evaluator receipts**, are not authorized runner commands, and have no endpoint to change certificate status. A client-provided “verified” string never passes admission. Type names are merely suggestions until separately reviewed and implemented.

## D. Minimum test matrix

| Test family | Required negative and positive checks |
| --- | --- |
| Identity / provenance | Valid receipt-bound ingest; forged/expired/replayed/mismatched source, untrusted status and absent custodian rejected |
| Fairness / chronology | Different task, oracle, model, tools, initial tree or budget invalid; prediction written after outcome cannot count as prior decision |
| Reward | A passes/B fails, B passes/A fails, tie, both fail, missing receipt, unknown prep, zero baseline denominator, mixed currency, concurrent-time accounting, unsupported complexity |
| Audit | Preserve aborted/blocked/denied attempts and every retry; no selection of best seed after seeing outcomes; duplicate family collapse |
| Features | No post-outcome leakage, protected oracle keys, PII or host paths; frozen extractor version; UNKNOWN flags stable |
| Retrieval | Correct citations, similar/dissimilar cases, conflicting examples, ties, out-of-support cases, KEEP and ABSTAIN |
| Bandit | Fixed seed, deterministic policy snapshot, actual weights change with eligible reward, strict train/test isolation, missing propensity, unsupported action, stability under rollback |
| Evaluation | Strict holdout family separation, earlier-published model, negative/no-change outcomes, independent control, no inference from untested actions |
| Security | No public training/agent/grade route, model cannot write reward, no network in protected grader, data/redaction boundaries, safe operator cancellation |
| UI | Empty states, one-case scope, measured vs recorded vs estimated vs synthetic, keyboard/mobile/reduced-motion, no fake confidence curves |
| Release | P0 CI/browser tests unchanged; frozen 49 contracts untouched; planner docs not copied into submitted implementation; provenance and licensing audit |

No synthetic green suite can establish actual agent isolation, authentic external receipts, statistically meaningful policy improvement, or live Meta inference.

## E. Data budget and practical feasibility

**At hackathon scale:** A single protected A/B booking result is enough to demonstrate an experimental *learning-data pipeline* but generally not to train a credible cross-project bandit. L0 is the only reasonable potential demo stretch. Even L0 requires authentic experiment receipts to make “evidence memory” a real feature.

**Cost sources to record independently:** Meta Scientist inference, coding-agent input/output and attempts, B/C preparation, verified task execution, independent evaluator resources, offline learner training, retrieval/online inference, human review, and infrastructure. Provider API tariffs or tokens absent from receipts remain UNKNOWN, not imputed.

**Sampling limitations:** One booking fixture with twenty different seeds remains one correlated family, not twenty independent environments. Use multiple true task/repository families and include permission-change counterexamples, cases where refactoring is detrimental and tasks where KEEP is optimal. Repeated benchmarks may help estimate variance but don't erase the generalization problem.

**Optional acquisition:** vetted public software-evolution benchmarks only after licensing, compatibility, anti-leakage, sandbox and hidden-oracle review; no automatic addition to hackathon P0. Do not harvest random private company repositories to create training data.

## F. Promotion / stop decision

| Promotion | Required GO | HOLD / CUT |
| --- | --- | --- |
| Design LL-0 | No impact on P0, clear bounded objective and docs only | Any conflict with frozen contracts or submission provenance |
| Intake LL-1 | Authenticated real source-bound evaluator record and privacy review, no new execution authority | Only synthetic/untrusted/unauthorized grader results |
| L0 LL-3 | All P0 key gates and clean demo stable, actual accepted case(s), no deadline or safety impact | No valid receipt, missing demo/video, Nov 2 freeze or more than a small bounded slice of effort |
| L1 LL-4 | Diverse eligible training data, frozen independent holdout, approved evaluation and objective, enough time/resources | One project family only, unknown propensities for off-policy causal claims, grader not independent |
| ADVISORY promotion | Frozen policy evaluated against strong controls with preregistered correctness/no-regression and practical gain | Only in-sample improvement, fabricated evaluation, uncalibrated confident outputs |
| L2 LL-6 | Post-event independent research plan, sufficient data and operator-run safety/reward review | Hackathon crunch, unrestricted autonomy, absent external validity |

**Always fall back** to fixed roadmap-aware recommendations and/or L0 retrieval, with ABSTAIN when data are insufficient. The current A/B tournament alone remains meaningful; no user-facing feature should depend on learning infrastructure being installed.

## G. Three-minute hackathon story and long-range research roadmap

**Do not append a learning segment unless the existing narrative already proves the core outcome.** The first 3-minute story is: a real future permission risk -> Meta's falsifiable hypothesis and challenge -> A/B source/evidence -> independent grade -> refactor/keep/inconclusive decision. If P0 is secured early, use at most a short *outro* to show one authenticated case being saved as a future learning example; state explicitly **“evidence memory planned; adaptive policy not trained.”**

An actual L1 demo requires a held-out fixed-policy comparison that can be explained immediately and does not undermine evidence or Meta footage. A conceptual learning curve or toy simulated graph must be labeled as such and **cannot** stand in for measured improvement.

**After Nov 4:** expand independent corpus; ship L0; test supervised cost/success predictors; research constrained bandits with offline/online evaluation; only then multi-step RL and optional Meta fine-tuning. Have a distinct research track for multi-agent debate or automated experiment prioritization rather than conflating those with recommendation learning.

## H. Codex handoff template

When LL-0 is explicitly promoted, use this structure to request implementation in the **post-kickoff standalone ForeCode app** (not this planning repository):

> First audit current app main, AGENTS.md, exact existing modules/tests/receipts and any current branch work; do not reimplement what's already present. Read the planning Learning Loop architecture and implementation plan **read-only** plus tournament, Meta, frozen contract and security owners. Work on a new named branch limited to a single LL-* slice; no schema v1 modifications, protected oracle exposure, external code transplant, new hosted execution route, model call or guest operation without separate explicit owner-approved gates. Implement strict versioned internal learning types and negative tests, retain unknowns, preserve all failures, use authenticated evidence only. Run applicable checks and report commands/exits, commit SHA, changed files, exact measured vs synthetic evidence and blockers. Open a reviewable PR; never auto-merge or claim real learning from passing unit tests.

**Owner acceptance checklist:**
- [ ] I have verified and authorized all prerequisite trusted evidence and safe runtime scope.
- [ ] The exact proposed learning PR touches only its assigned boundary and preserves 49 frozen contracts.
- [ ] No “RL” or “improves over time” claim is made unless actual reward-driven policy updates and held-out comparative measurements exist.
- [ ] Source/right-to-train consent, sanitization and private evaluator protection are intact.
- [ ] Every failure/unknown remains an outcome; KEEP/ABSTAIN are first-class.
- [ ] The main Meta Scientist, architecture tournament, landing and submission demo are not delayed.
