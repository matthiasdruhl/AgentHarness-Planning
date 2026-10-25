# 28 — AgentHarness Verify: product north star and scope

**Decision:** 2026-10-24. **Status:** planning baseline, not implemented. **Time window:** Oct 26–Nov 4 Meta hackathon.

## Elevator pitch
**Make AI coding agents prove their work before declaring success.** AgentHarness Verify checks a coding agent's *completion claim* against observed, versioned execution evidence. It shows why a claim is supported, contradicted or uncertain, uses Meta Muse to explain findings and propose constrained checks, and demonstrates how an allowlisted guard prevents unsupported completion in **scripted reference scenarios**.

## User problem
An assistant can say 'tests pass' after a failing test or claim to have changed a file that its tools never reached. Raw traces are cumbersome; a simple rule may catch obvious contradictions but does not turn them into an inspectable, evidence-linked verification workflow. The user wants a fast, inspectable answer: **Can I trust this completion claim, and why?**

## Primary user + core interaction
A developer or hackathon judge chooses the false-success fixture and immediately sees:
1. **Completion verdict:** `UNVERIFIED`, `VERIFIED`, or `INSUFFICIENT_EVIDENCE`; exact scope **completion_claim**, not source-code correctness.
2. **Reason + evidence:** failing test event and conflicting final message, clickable IDs and conservative typed signals.
3. **Optional Muse diagnosis:** evidence-grounded explanation plus proposed *allowlisted* assertion; model output is a hypothesis, not a verified fact.
4. **Guard demonstration:** scripted baseline failure -> guarded policy compliance; original test continues to fail. Never imply a coding bug was repaired.
5. **Exportable proof:** exact event provenance, model mode, deterministic status, policy caveats and report hashes.

## The three verdicts
- **VERIFIED:** available typed evidence supports the narrowly scoped completion condition. Example: the most relevant required test run passed and the assistant's claim is consistent. **Not** proof that all code is correct.
- **UNVERIFIED:** the claimed success directly conflicts with observed required evidence (e.g. a relevant failed test run) or is conclusively contradicted.
- **INSUFFICIENT_EVIDENCE:** there is no completion claim, the required test/status is absent/unknown, or the claimed result cannot be established from observable data. Never infer PASS from missing data.

Each verdict has reason code(s), relevant event IDs, short explanation and a scoped claim. Contract: [03](03-data-contracts.md). Verified is never derived from the model's self-rated confidence.

## Value and boundaries
- **Primary promise:** evidence-backed completion verification for instrumented coding-agent traces.
- **Supporting capability:** Muse-based failure interpretation and candidate regression test generation.
- **P0 verification:** pure TS conservative rule engine, evidence-first UI, fixture-backed scripted guard demo. No remote agent execution.
- **P1 if safely feasible:** paired actual-agent controlled task study, with independent oracle and false-block countermetric, per [27](27-real-agent-experiment.md). Not needed for P0 submission.
- **Not promised:** arbitrary external agent replay, autonomous patching, production integration platform, universal software correctness or outperforming published research systems.

## Primary metric and honest outcomes
**For measured actual-agent trials only:** unjustified success claims / eligible runs with conclusive independent oracle; also **valid success blocked**, **actual task solve rate**, unknown/abstained status, cost and latency. Zero false-success claims with all completions blocked is not improvement. For P0 scripted guard, report *policy assertion PASS/FAIL* and exact failing test, not a real-run success percentage. Diagnostic accuracy remains a **secondary** research measure.

## Feature scope
| Priority | Work |
|---|---|
| P0 | verdict and evidence first; bundled F1 hero and secondary trace samples; Muse reasoning on demand; constrained assertion; scripted guard before/after; report/export; reliable deployment |
| P1 conditional | isolated actual-agent paired experiment T15, extra ambiguity/negative cases if inexpensive |
| P2 | deep observability dashboard, advanced charts, animations |
| Out | arbitrary repos, tool execution from user traces, broad integrations, background agents, autonomous code edits, persistent SaaS |

## Judging demonstration
15-second hook: **'The coding agent says it fixed everything, but its tests failed. AgentHarness Verify spots that instantly, shows the exact evidence, and demonstrates a guard that prevents the false completion claim.'**
Present the Muse call as deeper explanation, not the authority making the verdict. The demo may use a clearly labeled recorded result when live model access fails.

## Rules
Preserve prior schemas and contracts unless versioned; keep ADR-011's P1 separation. Every changed reference to 'audit' should mean an *evidence report/process*, never redefine the product as a general auditing platform. Historical source titles, repository name, filenames and prior benchmark citations need not be renamed.

## Launch success
A judge can tell within 15 seconds **what the product checks, what the result is, and why**; the full P0 workflow works, is clear about simulation vs observed data, and makes no unmeasured performance claim.


## Competition-alignment update (2026-10-24)

Current scope, gates and precedence: [30 competition vision](30-competition-vision.md), [31 conditional feedback study](31-feedback-study.md), [32 Meta hard case](32-hard-case.md), [33 demo and early release](33-release-and-demo.md). These supersede earlier *priority, calendar and demo ordering* only; original versioned contracts and security prohibitions remain authoritative. P0 is evidence-first tri-state + live Muse analysis + **scripted** policy comparison; P1 is developer-local, independently scored A/B (optional C one bounded feedback continuation) only after deployed P0, validated isolation, rules and credits. No P1 result may be labeled measured unless actually executed. Target first deployment Oct 30 and hard freeze Nov 2. Never call scripted guard compliance a fixed code bug.
