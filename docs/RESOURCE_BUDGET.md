# Resource and AI-credit budget

## Verify before spend
Credit balances, provider price, eligible API models, activation, expiry, quota and billing overage behavior are **not established** in this repo. Read actual Meta dashboard, participant terms and partner offers first. Record source/date and whether limits are hard or merely alerts.

## Budget ledger (fill with verified values)
| Pool | Starting available | Expiry | Hard cap/alerts | Used | Reserved | Evidence |
|---|---:|---|---|---:|---:|---|
| Meta hackathon API credits | UNKNOWN | UNKNOWN | UNKNOWN | UNKNOWN | TBD | dashboard screenshot/time |
| Codex subscription / extra credits | UNKNOWN | UNKNOWN | UNKNOWN | UNKNOWN | TBD | account usage |
| Hosting and other services | UNKNOWN | UNKNOWN | UNKNOWN | UNKNOWN | TBD | service dashboards |

Do not combine pools with incompatible billing units or call estimated inference prices actual charges.

## Suggested allocation, contingent on verified balance
- 45% implementation and controlled integration checks.
- 25% evaluation with labeled runs.
- 30% reserve for debugging, demo, and final submission (protect through Nov 1).
Use percentages as working targets, not facts about available credits. Rebalance based on observed cost per analysis and remaining tasks.

## API spend guard
Live inference **only on user action**, backend-only key, capped trace/event/token size, rate limiting and safe retries as specified in [05](05-meta-integration.md). Disable or restrict public live endpoint until effective spending controls are verified; UI still demonstrates deterministic workflow offline. Add per-call model, timestamp, token usage when provided, status, retry count; no raw trace or secret logs. Show `unknown` when usage/pricing is unavailable. CI uses transport mocks.

## Daily check
Record balance/usage from dashboard, completed tasks, failed paid calls, forecast at observed per-call usage, and reserve remaining. Stop optional evaluation or polishing if reserve threatened. A provider outage or exhausted credits must not block fixture load/replay/export. Recorded outputs must carry a visible RECORDED label.

## Verification-first credit saving
The P0 completion verdict is pure TypeScript, should be available instantly and consumes **no Meta inference**. Only request Muse when user asks for explanation/candidate tests. Benchmark ablations and optional T15 are separately budget-approved and their real spend logged. Do not prioritize T15 costs over the live Muse demo or final reserve.
