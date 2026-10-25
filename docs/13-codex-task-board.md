# 13 — Canonical Codex task board

Tickets are sequential where blocked; each complete ticket requires files, test command, observed result and notes. See tasks/README.md for execution prompts.

| ID | Priority | Depends | Deliverable | Acceptance |
|---|---|---|---|---|
| F01 | P0 | rules | Boot Next TS strict, scripts, CI | lint/type/test/build pass |
| F02 | P0 | F01 | Vetted booking fixture and immutable external acceptance oracle | intentional hidden-test tamper rejected |
| F03 | P0 | F02 | Isolated local agent run with budgets, allowlist, captured evidence | no-isolation fails closed; baseline repeat |
| F04 | P0 | F03 | Verify deterministic verdict engine and scoped checks | pass/fail/not-run tests |
| F05 | P0 | F01 | Intent Registry schema, confirmation UI | edit/reject invalidates analyses |
| F06 | P0 | F05 | Live/recorded Meta adapter with strict validation | injected model output rejected |
| F07 | P0 | F02 | TS/Next dependency graph with limitations | fixture aliases/routes handled |
| F08 | P0 | F06,F07 | Two-candidate scenario regret engine | deterministic same-input outcome |
| F09 | P0 | F03,F04,F08 | Matched A/B experiment, held-out case | same checks/budgets; real artifacts |
| F10 | P0 | F09 | Evidence ledger + certificate | links hashes and source of measurements |
| F11 | P0 | F05,F08,F10 | Demo UX, accessible comparison | truthful recorded/live indicator |
| F12 | P0 | F11 | Deploy, security review, video, submit | complete checklist |
| F13 | P1 | F09 | Verify-off study / Meta ablation | correctly separated attribution |
| F14 | P1 | F09 | Additional repetitions and adverse-case control | no cherry-picked results |

Fallback: if F03 isolation fails, stop executable runner and present offline recorded case study with no causal improvement claims.
