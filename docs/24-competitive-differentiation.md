# 24 — Competitive positioning and judge Q&A

## Claim we can defend after implementation
**AgentHarness Audit** is a narrow coding-agent *failure-evidence-to-policy-test* demonstration. It imports or loads traces, runs conservative checks, asks Meta Muse for evidence-linked hypotheses and supported regression assertions, and **deterministically** replays only bundled scripted scenarios to verify that a predefined completion/tool policy changes simulated behavior. This is not a general agent executor, production agent security platform, source-code repair bot, or broad harness optimizer.

## Related work and distinctions
| Project | Verified focus | Relationship and honest distinction |
|---|---|---|
| AgentRx (Microsoft Research): https://github.com/microsoft/AgentRx | Diagnoses agent failure steps from execution trajectories using constraint checks plus judge | Strong overlap in evidence-aware diagnosis. **Do not claim evidence-backed AI diagnosis is novel**. Our judge demo targets *closed DSL policy guard before/after* on a limited coding-agent scripted harness, not cross-domain critical-step localization. |
| HALO (Context Labs): https://github.com/context-labs/HALO | Uses production traces and optimizer feedback to modify a harness and re-evaluate | Strong overlap in trace-driven improvement. HALO attempts real harness optimization; our MVP proves an allowlisted **simulated policy** transition only. Lower scope yields reproducibility/safety but weaker real-world performance claims. |
| SWE-bench Verified: https://www.swebench.com/verified.html | Grades real software issue resolution | Complementary context, not a competing trace audit or comparable accuracy benchmark. |
| HAL Reliability: https://hal.cs.princeton.edu/reliability/ | Quantifies agent reliability along multiple dimensions | Useful measurement inspiration, not an equivalent product or a direct score comparison. |

## Demo-safe differentiation
- One click from an inspectable failing `run_tests` event to a falsifiable failure explanation with exact event IDs.
- Strictly validated supported assertion DSL instead of running model-generated scripts.
- Side-by-side unchanged failing test plus **guarded completion claim** proves the exact compliance invariant, not repaired code.
- Provenance of model vs rule vs deterministic verdict; unsupported claims rejected.
- A working offline fallback makes demo reliable when inference is inaccessible, explicitly marked RECORDED when model response is recorded.

## Questions judges may ask
**'Isn't this AgentRx?'** Related, yes: AgentRx focuses on localizing causal failure steps across heterogeneous trajectories. Our scoped workflow connects a coding-agent finding to a safe regression assertion and a before/after **scripted guard** check. Our goal is a specific verifiable demo, not a superior published diagnostic benchmark.

**'Does your policy fix the program?'** No. It prevents a false completion statement in our deterministic reference harness; failed tests remain failed and visible.

**'Does this work with any imported agent trace?'** We can validate/analyze supported `trace.v1` imports. Only trusted bundled scenario manifests can be replayed. No shell or arbitrary tool execution.

**'How does Muse add value over simple rules?'** We will show rules-only / Muse-only / combined measured on identical labeled traces. If Muse adds only explanation (not classification improvement), say so and show the qualitative tradeoff.

**'Is the dataset real-world?'** Primary benchmark is synthetic and controlled. External traces can be an explicitly separated exploratory pilot only after access, licensing and faithful mapping.

**'What makes this Meta-specific?'** Live Meta Muse structured inference generates candidate finding/evidence/test outputs, which deterministic validators constrain; recorded fallback cannot substitute for evidence of live integration.

## Positioning risks
If model contributions collapse to repeating obvious deterministic checks, emphasize structured explanation and constrained candidate assertions, not invented accuracy gains. If external comparison finds this design already common, avoid novelty-superlatives; present careful implementation and reliability. Quantify no gains until measured.
