# Booking fixture executable build tickets (after eligibility gate)

These are a detailed implementation **slice within** existing M2.1/M2.2, M7 and M9, **not new top-level Codex IDs**. Ticket suffix `-BKxx` denotes work packages under M2.1.1; do not create an independent competing roadmap.

| Ticket | Depends | Expected output | Exit test |
|---|---|---|---|
| BK01 | M0 approved | Pin fixture config, package/tooling and licensing | clean install/build |
| BK02 | BK01 | Booking and error types, schema invariants | invalid IDs/time rejected |
| BK03 | BK02 | Resource catalog, deterministic injected clock/id factory | stable reset between tests |
| BK04 | BK02 | Store adapter, atomic create/cancel semantics | concurrent conflict prevention |
| BK05 | BK03,BK04 | Service create/list/get/cancel with owner check | B001–B012 domain tests |
| BK06 | BK05 | Trusted synthetic viewer context + HTTP route adapters | 401/404/400/409 mapping |
| BK07 | BK05,BK06 | Minimal UI form and own-booking list | B013 Playwright route flow |
| BK08 | BK05 | External evaluator with oracle test suite and checksums | B001–B016 protected; tamper test |
| BK09 | BK08 | Freeze valid A snapshot and seed SHA | clean baseline passes |
| BK10 | BK09 | B policy-boundary refactor and upfront effort recording | initial A/B checks identical |
| BK11 | BK10 | Known S1 plus S2 negative-control specs/prompts | equal agent task prompt/Verify |
| BK12 | BK09 | Private held-out authoring and hash; no public source | freeze before architecture selection |
| BK13 | BK11,BK12 | Paired A/B experiment and reports | equal-budget manifest, no test leakage |
| BK14 | BK13 | Real evidence demo and certificate links | no fabricated measurements |

## Codex usage
Assign BK01–BK09 within M2 foundation; BK10–BK13 within M7 once Foresight exists. Each ticket must read baseline requirements, architecture, acceptance oracle plan and security, implement only described files, run applicable tests, log actual commands, exit codes, commit, evidence and unblock criteria. Keep hidden tests under trusted custody. BK13 does not proceed without verified sandbox.

## Scheduling escape hatch
If BK08–BK10 are late, prioritize a single trusted run and stable app. If BK13 impossible, show read-only recorded illustrative output labeled unmeasured and disclose missing experimental proof.
