# 17 — Architecture decision records

| ID | Decision | Why / revisit |
|---|---|---|
| ADR-001 | Public brand Forecode (provisional); keep planning repo name | Revisit after trademark/domain check |
| ADR-002 | Unified Foresight + Verify is only active product | Previous Verify-only work remains legacy reference |
| ADR-003 | Robust scenario regret, not uncalibrated probabilistic Expectiminimax | Revisit only with defensible transition probabilities |
| ADR-004 | No large Monte Carlo in P0 | Static ranking and few measured futures suffice |
| ADR-005 | Vetted TS/Next booking fixture only | General agent integrations too risky in 10 days |
| ADR-006 | Separate trusted evaluator from agent writable workspace | Prevent test tampering and false completion |
| ADR-007 | Same Verify for both Foresight A/B arms | Disentangle architecture effect from guard effect |
| ADR-008 | Developer-local isolated real code runs; web read-only | No public arbitrary code execution |
| ADR-009 | Meta proposes intent/scenarios/candidates, never certifies tests | Keeps reasoning separate from evidence |
| ADR-010 | Measured/estimated/recorded provenance compulsory | Prevent result inflation |
| ADR-011 | Archive historical docs only as marked legacy redirects | Avoid duplicate active requirements |
| ADR-012 | Developer intents opt-in, editable and revocable | Avoid speculative requirement becoming mandate |

For changes: record date, decision, alternative, security/evaluation impact, affected docs. Never update an ADR without updating dependent tasks and contracts.
