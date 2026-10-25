# 18 — Risk register

| Risk | Trigger | Mitigation / fallback |
|---|---|---|
| Isolation unavailable | CLI cannot attest non-root/no-network/secret-free | Cancel live experiments; use recorded labeled results without superiority claims |
| No observable A/B benefit | candidate loses or inconclusive | Report negative result; certificate still useful conditional evidence |
| Meta outputs poor candidates | repeated invalid schemas or no meaningful variation | One manual-reviewed candidate, model limitations explicit |
| Scenario leakage | held-out tasks seen during planning | Invalidate experiment and regenerate frozen holdout |
| Bench not reproducible | missing hashes, oracle or config | Freeze before dashboard; use observed-only claim |
| Time overrun | experiment not ready by Oct 30 | Cut fancy tree/graph UI; keep single booking vertical slice |
| Credit/provider outage | quota failure | Recorded clearly labeled Meta output; prevent spend spikes |
| Incorrect static graph | dynamic registrations/aliases | Explicit unknowns + runtime checks; no ungrounded reachability proof |
| False stub positives | legitimate mocks/TODOs blocked | Treat heuristic as warnings, gate on accepted behavior |
| Public brand conflict | name already in use | Use working title AgentHarness without repo rename |
| Rule violation | organizer prohibits prebuilt assets/execution | Pause/change scope under rules before coding |
| Misleading demo | recorded or estimated presented as live/measured | Mandatory provenance review; remove unsupported numbers |
