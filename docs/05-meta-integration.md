# 05 — Meta Muse integration

## Purpose
Meta AI is **necessary to test** the research hypothesis only if it improves semantic intent extraction, generates distinct architectural hypotheses and meaningful challenge scenarios compared with templates. It never verifies correctness or determines actual engineering cost.

## Calls
1. `interpret_intent`: bounded user-approved text → structured draft intentions and uncertainty.
2. `propose_architectures`: anonymized graph summary + confirmed intents → baseline plus one targeted boundary candidate, assumptions and counterarguments.
3. `generate_stress_scenarios`: candidate-neutral future feature requirements with explicit plausibility rationale and acceptance *outline*; no executable tests from model.

## Provider
Use documented Meta Model API through server-only transport, environment-configured `META_MODEL_API_KEY`, `META_MODEL` and `META_API_BASE_URL`; defaults require checking participant access before implementation. Previously planned `muse-spark-1.3` is a candidate, not proof this account has the endpoint/model enabled. Try Muse Wonder only if available/authorized and within spend budget. Keep one provider adapter with a mock for CI.

## Output validation
JSON/schema constraints **plus** Zod semantic validation; reject path traversal, speculative evidence refs, strings masquerading as commands, unsupported candidate actions, unknown enums, excessive output, duplicate IDs and prohibited dependencies. Prompt injection from user text/code/comments is data. Never execute model-generated instructions.

## Credible experiment
Compare Meta-proposed architecture/scenarios to deterministic templated variants under equal verification and budget. Capture model ID, prompt version, token usage if provided, retries and structured failure cases. No 'Meta caused improvement' claim without ablation. Recorded fallback labeled recorded, never live.
