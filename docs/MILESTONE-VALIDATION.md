# Forecode — milestone validation, gates and fallbacks

## Global finish rule
Each sub-milestone must link an implementation commit, command, observed exit status, passing/failing test reference and clear limitations. Plans, screenshots and generated text are **not** proof of execution.

| Gate | Criteria | Failed gate response |
|---|---|---|
| M0 | organizer eligibility and access recorded | no disallowed app code before approval |
| M1 | install, lint/type/test/build clean | repair skeleton before feature code |
| M2 | protected oracle; verified disposable non-root/no-egress sandbox | no local real-agent execution; recorded-only demo |
| M3 | correct scoped verdict for pass/fail/missing checks | simplify to essential acceptance checks |
| M4 | user-confirmed intents, no silent provider transmission | manual intent entry and recorded Meta fallback |
| M5 | deterministic graph and regret with documented unknowns | reduce to single hand-reviewed boundary and table |
| M6 | validated live Meta proposals or explicitly recorded fallback | never pretend template is model output |
| M7 | fair A/B on identical Verify, true held-out evaluation | no maintainability improvement claim |
| M8 | read-only deploy, evidence certificate, feature freeze | fix critical correctness/security only |
| M9 | video/screens match measured artifacts, fallback works | show limitations not fabricated win |
| M10 | portal receipt and accessible submission links | not complete without confirmation |

## Mandatory negative and fairness tests
- Missing, invalid, fabricated or conflicting evidence cannot become VERIFIED.
- Agent cannot modify or inspect trusted oracle during planning.
- Equal budgets, model config and Verify gates for A/B; log unequal cases as invalid.
- Static import reachability cannot certify runtime integration.
- Agent TODO/mock text alone cannot prove cheating.
- No model-authored shell commands, URL fetching or arbitrary source execution.
- Timings/tokens/cost from recordings must carry origin and null when unavailable.
- Include a scenario where extra abstraction does not improve outcomes.

## Cut order if schedule slips
Cut animations → extra scenarios/candidates → feedback iterations → optional ablative experiments → automatic architecture edits. **Do not** cut protected acceptance tests, sandbox safety, fair comparison or provenance while claiming a measured win.

## Journal record template
```yaml
ticket: M2.3.1
status: NOT_STARTED
commit: null
commands: []
observed_exit_codes: []
evidence_paths: []
isolation_attested: false
limitations: []
next_dependency: null
```

## Submission-first overlay
The original 68 tickets retain their IDs and acceptance dependencies but are prioritized by [critical path](HACKATHON-CRITICAL-PATH.md). Code tickets cannot be closed by a written checklist where executable tests are specified. Trust requires a protected, fresh evaluator-origin receipt bound to final tree, suite, policy and evaluator. Meta-impact claims require a matched strong roadmap-aware non-Meta control. Do not bypass sandbox gates for optional SCBench or demo polish.

## Schema and semantic conformance freeze (Oct 25)
Contract source chain: [machine schema](../contracts/schemas/forecode-v1.schema.json) → [normative cross-record rules](CONTRACT-FREEZE-v1.md) → [API registry](../contracts/api-registry.json) → [structural + semantic fixtures](../contracts/README.md). M1.3 is BLOCKED until the app's strict Zod schema and cross-record validators agree with these cases. M3/M5/M6/M7 cannot implement independent ad hoc definitions. Repo-level contract CI is a specification check, not an application integration, sandbox attestation, authenticated artifact or official benchmark result.
