# ForeCode — Meta-conditioned RL + Muse Glimmer QLoRA research plan

**Prepared:** October 30, 2026. **Status:** design and optional parallel research ONLY; not built, trained, evaluated, admitted to production, or a claim of improved performance or hackathon points. This document extends [the Evidence-Driven Learning Loop](ARCHITECTURE-LEARNING-LOOP.md) and its [implementation plan](LEARNING-LOOP-IMPLEMENTATION-PLAN.md). It does not change the P0 submission requirements, the 49 frozen v1 contracts, the separate protected oracle, or the November 2 feature freeze / November 4, 9 PM ET submission deadline. Meta usage scoring is at judges' discretion; no number of APIs, adapters or training stages guarantees a perfect score.

## 1. Decision and thesis

**Recommended optional parallel path:** Build a small, testable **Meta-conditioned strategy learner (L1 contextual bandit)** and, independently, an **SFT QLoRA adapter for Meta Muse Glimmer 30B**. Integrate them only when authentic task data, authorization, reproducibility, fair independent evaluation and a completed P0 demo justify it.

This is **not** the same as training Muse Glimmer with reinforcement learning. There are three distinct mechanisms:

| Name | Trainable unit | Training signal | Honest claim if completed |
| --- | --- | --- | --- |
| Q — QLoRA SFT | Muse Glimmer 30B low-rank adapter on frozen 4-bit base | Licensed, vetted prompt/ideal-response demonstrations | The Meta model is domain-adapted; not RL and not proof of better architecture |
| R — constrained contextual bandit | Small, separately versioned local strategy-selection policy | Authenticated tournament correctness and optionally comparable prep-inclusive cost | A form of RL **if weights actually update from eligible rewards**; not LLM weight training |
| Q+R — joint inference | Frozen Q model proposes; R ranks eligible strategies | Both stages trained independently as above | A combined system; any advantage requires an ablation on independent tasks |
| GRPO (optional, later) | Muse Glimmer model weights/adapters via online reward optimization | Objective verifiable rewards for groups of model rollouts | Actual LLM RL post-training **only if this training really runs**; not inferred from Q+R |

**Specific research question:** Does **Q+R** select better architecture-preparation strategies on previously unseen software-evolution tasks than an equally informed **untuned Meta / fixed-policy** system, after counting preparation, training and inference costs and enforcing correctness? The no-refactor **KEEP** option must remain eligible where safe; **ABSTAIN** is preferable when evidence is weak.

Scope the task to human-reviewable strategy families (initially KEEP, BOUNDARY, ADAPTER). Meta generates bounded, falsifiable proposals and challenges; the bandit estimates which eligible family is worth investigating. Neither agent is permitted to self-score, choose hidden tests, infer unseen answers, overwrite measured outcomes or autonomously execute changes.

## 2. Architecture and separate responsibilities

```text
TRACK A — main ForeCode (submission critical path)
  Confirmed future intent + reviewed code graph
      -> Meta Scientist proposes bounded A/B (optional C), prediction, challenge
      -> human review + immutable study commitment
      -> supervised, explicitly authorized coding-agent preparation/implementation
      -> independent, network-off protected evaluator
      -> immutable original receipts + sanitized approved evidence projection
      -> read-only Decision Report / judge demo
            |
            | only separately admitted, versioned, sanitized observations
            v
TRACK B — ML research (isolated branch/worktree, OPTIONAL)
  offline evidence-intake + feature/candidate eligibility
      -> reward assessment (correctness gate; prep-inclusive cost when known)
      -> L0 case memory / frozen training snapshot
      -> R: reward-updated contextual bandit (SHADOW initially)
  separately licensed curated demonstrations
      -> Q: frozen Muse Glimmer revision + supervised QLoRA adapter
  Q proposes -> R advises/abstains -> human review
      -> frozen comparisons on independent task families
      -> optional read-only research evidence / promotion or rollback

GRPO is a separate post-event research extension, NOT the same as QLoRA.
```

The core app remains fully usable without the research path, GPU, fine-tuned model or policy. The learner may not import the protected grader/runner or gain a browser train/execute endpoint. The trained adapter is only a proposal generator; exact model/revision, adapter hash, prompt, decoding options and input evidence IDs are frozen per evaluated decision. Never silently substitute Muse Spark API for Glimmer or vice versa. A QLoRA adapter trained for a particular Glimmer checkpoint is not a Muse Spark API fine-tune.

**Two developer paths:** Work on independent branches/worktrees. TRACK A owns app, evaluator, the original task/intent snapshot, sandbox/cost admission, public evidence. TRACK B owns private ML-sidecar contracts, loaders, training code, model registry and offline analysis. Only a narrowly reviewed **append-only sanitized observation export** crosses the boundary; no concurrent changes to existing frozen contract schemas or protected packages. Use a single integration PR after both owners pass gates. One Codex process does not become an independent evaluator merely by being a different agent session.

## 3. Proposed additive interfaces, not frozen contracts

Create separately versioned **private** learning-sidecar data, consistent with the main Learning Loop:

- `LearningContextV1`: independently frozen pre-decision source/intent digests, feature extractor version, graph summary + missingness, candidate strategy set/eligibility, declaration of known future requirement and authorized disclosure scope; exclude outcome and hidden oracle contents.
- `MetaProposalProvenanceV1`: `provider=meta_model_api|open_weight_local`, exact `modelId`, base revision/adapter hash or API profile, prompt/template hash, sampling settings, input snapshot IDs, model-generated status, rights and consent scope. Do not label an SFT adapter a GRPO-trained model.
- `LearningObservationV1`: references **authentic** protected outcomes and exact precommitted A/B/(C) identities, actual arm results, observed vs null metrics, prep costs, authorization/custody, task-family grouping, candidate selection propensity if known. Invalid/missing/blocked evidence cannot produce a numeric reward.
- `PolicyArtifactV1`: version, feature/action/reward schema versions, algorithm and actual weight digest, eligible training snapshot digest, seed/config, decision ordering/selection probabilities, evaluation approval and rollback pointer; SHADOW by default.
- `QLoRAArtifactV1`: exact Apache-licensed Glimmer checkpoint revision and tokenizer/chat template, training-config/dependency and source SHAs, data rights and splits, adapter weights digest, dataset hashes, run checkpoints/logs, reload proof, evaluation IDs and usage-policy review.
- `DecisionComparisonV1`: predeclared 2×2 arm identities, frozen all-else-equal prompts/inputs/eligible strategies, independent task-family split, matched budget/agent/oracle and actual outcomes, explicit missing data and noncomparable cases.

Treat these names as planning sketches requiring fresh app-side schemas after owner review; never copy pre-event planning schemas/fixtures/code into the eligible submission repository. All records are source-bound and versioned; unsupported extensions fail closed. Retain historical, negative and failed attempts; unknown is not zero.

## 4. Three-stage optional implementation plan

### ML-0: preparation and reversible offline feasibility (can run beside P0)

1. Audit ForeCode current main, existing Meta Scientist, tournament report, authenticated protected loader, rights/consent and pre-event provenance. Record **what is actually completed**; the October 29 study/preparation work does not constitute a matched tournament or learner.
2. Freeze the learning problem, actions, feature provenance, correctness-first reward, evaluation plan, independent task-family groups and explicit ABSTAIN. Keep KEEP as a strong control and measure all preparation cost.
3. Build Q training/eval dataset checks: source license/permission, PII/secret scans, duplicate/near-duplicate groups, train/validation/held-out separation, deterministic dataset manifest, intended output contract and refusal examples. Prefer **human-reviewed, rights-cleared architecture demonstrations**; verified historical outcomes may be referenced only after separate rights and sanitization approval. No private hidden oracle, raw internal repository, personal credentials or planning-repo artifacts in training data.
4. Build R policy, versioned training snapshot and offline unit tests with **synthetic records clearly marked SYNTHETIC**. Demonstrate deterministic weight changes for code correctness, not a real engineering improvement. In absence of genuine data, stay NOT_TRAINED/SHADOW.
5. Verify access, model revision, checkpoint/tokenizer compatibility, GPU capacity, maximum dollar limit, dataset rights, training terms and inference route. Do not make paid calls or provision GPUs until authorized. An unreproducible fine-tune does not ship.

**Exit:** schema/feature/reward tests and clean separate worktree; zero protected-data leakage and no P0 source disruption. This is a useful research prototype even with no valid training examples, but NOT a verified RL improvement.

### ML-1: supervised Muse Glimmer QLoRA (optional independent experiment)

Model: Meta open-weight `meta-models/Muse-Glimmer-30B`; choose **exact pinned model revision** (Meta's published October 2026 Axolotl example documents `a4e59da52a7bc87ae7251dd5545c0dd437c44b68`, reverify at download). Use the **official Axolotl 0.19.0 / CUDA + PyTorch pinned recipe** before inventing a new trainer. The documented QLoRA approach loads frozen base weights in 4-bit, trains language projection adapters, uses bf16 compute and keeps vision components frozen. Its tested tutorial supports single-H100 QLoRA, but **the particular checkpoint, train length, adapter ranks and other settings still need a local preflight**.

- First do model-license/usage-policy and access checks, tokenizer/chat-template and deterministic base inference; separate checkpoint acquisition from paid inference. Get a real provider quote, absolute money cap, availability and storage/egress cost approval.
- Use text-only architecture prompts initially; target structured `strategyFamily`, eligible-action constraints, mechanism, falsifiable prediction, counterargument, uncertainty and ABSTAIN. Preserve Meta's actual prompt formatting and output parser; do not train on protected grader bodies or evaluator answers.
- Pin Python/CUDA/framework wheels and GPU image, original model/tokenizer revision, LoRA rank/alpha, target modules, seed, batch, max-token sequence length, effective batch, epochs, optimizer, dataset manifest and preprocessing code. Run processor preflight, **two optimizer steps**, checkpoint save and **adapter reload** before the full experiment. Watch OOM after optimizer initialization; short sequences first.
- Define a **paired, locked** base-vs-adapter evaluation (same held-out prompts, output schema validation, correct candidate eligibility, risky refactor rate, abstention, human-reviewed proposal quality and inference tokens/latency). Include regression tasks and failure cases, not just a loss curve. Blind qualified human review if a rubric is subjective; do not call LLM preference alone ground truth or reward.
- Keep adapters, raw licensed training corpus, private logs and model checkpoints out of the public hackathon repo unless terms/rights, size and independent review expressly permit. Publish reproducible *metadata and an accurate evaluation summary* if approved. A remote adapter requires a deliberate inference serving endpoint and model version; do not assume Muse Spark Model API can load Glimmer LoRA weights.
- If tuning improves formatting but not independently graded architecture decisions, report **format/domain adaptation only**, not architecture benefit or an RL winner.

**Exit:** trained and reloaded adapter, pinned artifacts, reproducible base-versus-tuned held-out results, approved serving route; otherwise mark TRAINING_ONLY / NOT_INTEGRATED.

### ML-2: reward-updated RL policy and joint 2×2 ablation (conditional)

- R consumes **only admissible authenticated real** tournament outcomes from the approved private ledger. Hard correctness/reliability first; only compare prep-inclusive cost on valid passing arms and when units are actually comparable. Missing data => no reward on that channel. Human feedback and Meta reflections are separately labeled and never substitute grader reward.
- Use a tiny regularized contextual-bandit candidate (LinUCB or a Bayesian linear bandit), deterministic extraction, immutable replay and conservative ABSTAIN; a simpler supervised/rule policy remains a necessary control. Frozen policy updates are performed operator-locally, never by the hosted frontend.
- Compare **four carefully matched conditions**: U/F = untuned Glimmer + fixed selector; Q/F = tuned Glimmer + fixed selector; U/R = untuned Glimmer + trained selector; Q/R = tuned Glimmer + trained selector. This isolates fine-tuning, learning-policy and interaction effects **only if** prompts, candidate eligibility, agent, tool budget, task, evaluator, splits and preparation treatment are otherwise controlled. R must not train or tune on held-out examples. For a specific Meta-incremental claim, add a **fifth equally informed non-Meta proposal/features control** rather than treating U/F as non-Meta.
- Pre-register corpus snapshot, algorithm and hyperparameter search, action support and propensity, task-family split, metric definitions, minimum worthwhile effect, failure/reporting policy and timing. Run all conditions on the **same independent task families** with fair budgets; retain losses and attempts. Training on repeatedly seeded booking cases is not independent generalization. Unless enough distinct eligible tasks exist, report a **single-case pipeline only** and make **no win-rate, percentage-lift or continual-improvement claim**.
- Show real changing policy weights and policy-version inputs/outputs (with no leakage), but present a learning curve only when it is derived from actual independent held-out evaluations. Do not imply automatic continual training or future improvement without an operating scheduled intake and refresh policy.
- Baseline model-family choice matters: `Muse Spark API vs tuned Glimmer` changes base model and provider, so it **cannot isolate** the effect of QLoRA. Test U vs Q on the same frozen Glimmer checkpoint.
- Failure/revocation: bad reward authority, source mismatch, leakage, unknown prep, unreliable inference, overfit or worse no-refactor behavior => policy stays SHADOW, adapter is disabled, record BLOCKED/INCONCLUSIVE; revert to validated fixed policy. No loss may be hidden.

**Exit:** for integration, actual independent outcome evidence, accepted dataset provenance, stable public presentation, no regression in P0 and owner release approval. Without these, retain track as separate research.

## 5. Optional advanced route: GRPO on Muse Glimmer (not QLoRA)

Real LLM RL post-training means optimizing **Glimmer's weights/adapters** from a programmatic reward (e.g., TRL GRPO or Meta's TorchTitan/TitanRL), typically from an SFT checkpoint. It is distinctly harder than R and Q combined: each generation group needs multiple samples, reward computation and generation/training memory. The published TitanRL Glimmer example uses **8 × H100 95GB**, with about **93 GiB peak on the busiest trainer GPU**, and its **30-minute smoke** and **75-minute sample run** are for an unrelated, cheap-to-grade data-analyst environment, **not** for ForeCode's coding experiments.

The ForeCode oracle is expensive and must remain sealed outside training. Never hand a model the grader, run arbitrary unreviewed code, construct rewards from untrusted JSON, or use a self-reported test pass. A scalable option for later research is a validated offline training proxy with bounded visible rewards, followed by a strictly held-out protected test—but proxy performance must not be presented as authentic future software-engineering performance. Reward hacking, KL drift, absent reward variance, correlated tasks and run-cost explosion are expected failure modes. **Post-hackathon by default; no GRPO integration into the Nov 4 submission without separate explicit scope, actual verified runs and no P0 risk.**

DPO is an optional intermediate *preference-training* route with audited pairs; it is not evidence of online verified-reward RL or generalization. Do not use labels to inflate claims.

## 6. Hard constraints and kill switches

| Risk | Constraint / required decision |
| --- | --- |
| **Deadline and priorities** | P0 real Meta Scientist, permitted paired tournament, verified evidence, clean 3-minute demo and submission take precedence. ML track may run in parallel **but no P0 code churn**. **Nov 1** integration decision, **Nov 2** feature freeze, **Nov 4 9 PM ET** submission; abandon unvalidated integration rather than extend. |
| **Training data scarcity** | One booking study, variants of one fixture, synthetic transcripts or N random seeds cannot establish cross-project learning. No claim of generalization absent genuine independent task families and a precommitted holdout. |
| **QLoRA memory vs inference** | Muse Glimmer is dense 30B; bf16 weights ~60GB and ordinary serving roughly ~72GB VRAM. Quantized inference is smaller but **does not imply laptop QLoRA training fits**. Meta's Axolotl recipe observed ~27GB/GPU peak on its bounded QLoRA experiment; size for actual max sequence/checkpoint/headroom, not just weights. |
| **Full GRPO infrastructure** | Official 8×H100 95GB sample is a *reference* hardware setup, not a proven minimum for every implementation. Require a separate hardware feasibility report, capacity/quotas and cost guard; reject unbounded cloud spend. |
| **Economics** | Cap **total** rented GPU-hours, disk/checkpoint/egress, paid Meta calls, model serving, coding-agent tool calls, retry volume and independent evaluation. Provider credits, account access and discount are not assumed. Record estimated vs actually billed amounts separately. |
| **Model/tool eligibility** | Muse Glimmer is Meta open-weight (Apache 2.0 per official docs) and separate from Muse Spark API. Check exact model card, **USAGE_POLICY**, distribution rights, data consent, provider terms and hackathon acceptance of open-weight use before claims. Model availability and award score are never guaranteed. |
| **Learning vs presentation** | QLoRA SFT ≠ RL; a contextual bandit is RL only with actual reward updates; Q+R ≠ GRPO; training loss ≠ better architectural correctness; simulated learning curves ≠ verified progress. |
| **Model attribution** | U/Q/R factorial isolates two components, **not Meta versus non-Meta**. Use equally informed non-Meta control for a Meta-incremental claim. Differences between Muse Spark and Muse Glimmer additionally confound base-model comparison. |
| **Evaluator authority** | No ML process reads hidden assertions, mints VERIFIED, changes test suite, selects advantageous failed runs, alters reward after results or runs unapproved code. Immutable decisions/failures remain auditable. |
| **Confidentiality/rights** | No employer/student/private code, secrets, personal paths, private grader texts, customer prompts or user records in training/cloud upload without express permission; implement removal/retention plan before aggregating data. |
| **Implementation boundary** | Dedicated ML branch/worktree, separate training environment, no production credential copying or global dependency lock changes, all core routes remain read-only for experiments. Secure owner authorization for external models, training, budget and serving. |
| **Demo honesty** | Judge video must identify event-built work, show real model provenance and demonstrably working features; unfinished ML is labeled research/SHADOW, not production. Training success alone does not warrant a “10/10 Meta score.” |

## 7. Deliverables, checks and go/no-go

**Minimum research deliverable:** pinned data contract, deterministic L0/L1 offline tests, QLoRA smoke and adapter reload *if authorized*, side-by-side base-versus-tuned outputs on distinct rights-cleared evaluation examples, and explicit absence of actual architecture rewards when none exist. Keep separate PRs for intake, learner, QLoRA trainer, evaluation, optional adapter/selector integration and UI.

**Promotion to a hackathon-visible research panel requires all of:** (a) P0 clean-browser story works, (b) actual Meta calls/model usage are verified, (c) rights-approved training inputs, (d) trusted accepted outcomes when claiming reward learning, (e) independent held-out evaluation for improvement claims, (f) no private artifact or budget/authorization regression, (g) successful main CI, browser replay and rollback test, (h) the proof fits a short judge-visible narrative.

**If ML fails its gates:** ship ForeCode core and mention only a proposed future research path **outside the feature claims**. A working solo fine-tune with no reward evidence may be accurately shown as a separately labeled SFT research result only if reproducible and not at the expense of the main video.

## 8. Codex research handoff

> **Task:** In a fresh branch/worktree of the event-created ForeCode implementation repository, audit main and read AGENTS.md, the two Learning Loop documents, this Meta-QLoRA-RL plan, current tournament/protected-evaluator constraints and official Meta post-training docs. Deliver **one** isolated ML-* slice at a time. First report existing verified evidence and data rights; build versioned private sidecar observations, testable Q/R interfaces and strict missingness/admissibility; no changes to frozen v1 contracts, protected oracle, host runner, booking fixture, production provider APIs or public agent execution. For Q use the pinned official Glimmer recipe only after permission/compute/budget approval; save reproducible adapter metadata and test reload. For R, reward updates require actual independent authenticated observations and a held-out study; no synthetic outcome claims. Keep P0 unchanged, run all affected checks, report exact commands/exits/SHAs, artifact locations and model/provider lineage, and open reviewable PRs. Do not merge or serve a checkpoint without independent owner release approval.

## 9. References and source-date caveat

- [Official Meta Muse Glimmer post-training — SFT/QLoRA, TRL, TitanRL/GRPO](https://dev.meta.ai/docs/muse-glimmer/post-training) (consulted October 30, 2026; published hardware examples and pinned versions may change).
- [Official Muse Glimmer overview and license](https://dev.meta.ai/docs/muse-glimmer), [run inference and memory footprints](https://dev.meta.ai/docs/muse-glimmer/deploy), [Hugging Face release/model card](https://huggingface.co/meta-models/Muse-Glimmer-30B) (review separate published `USAGE_POLICY.md` and dependency terms).
- [Meta Global AI Developer Hackathon](https://dev.meta.ai/events/global-hackathon), plus the more-specific [participant rules recorded for ForeCode](OFFICIAL-PARTICIPANT-RULES-2026-10-26.md) (the accepted waiver/portal prevails).
- [Main architecture learning spec](ARCHITECTURE-LEARNING-LOOP.md), [LL implementation and negative tests](LEARNING-LOOP-IMPLEMENTATION-PLAN.md), [tournament protocol](ARCHITECTURE-TOURNAMENT-PROTOCOL.md), [Meta Scientist](META-ARCHITECTURE-SCIENTIST.md), [stretch promotion](STRETCH-PROMOTION-GATES.md), [frozen contracts](CONTRACT-FREEZE-v1.md).

This is a planning proposal, not evidence of training, benchmark results, eligibility decisions, provider credits, cost ceilings or participant approval.
