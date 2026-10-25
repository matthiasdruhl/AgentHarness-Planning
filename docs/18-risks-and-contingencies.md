# 18 — Risk register

| Risk | Trigger | Mitigation / fallback |
|---|---|---|
| Isolation unavailable | installed sandbox lacks safe **guest-to-host** containment, controlled model egress or a separate offline grader | Cancel live experiments; use recorded labeled results without superiority claims |
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

## Additional host-specific gates
| Risk | Trigger | Mitigation / fallback |
|---|---|---|
| Existing sandbox direct-mount | `sbx ls` reports host developer workspace shared read-write or includes secret files | Do not execute untrusted code there; preserve it, use sanitized clone/mountless dedicated booking VM |
| Old sbx or CA trust-store image | sbx <0.42.0 or Oct 21 template CA update unaccounted for | Stop untrusted run; operator reviews updates/backup, patches existing image or creates refreshed sandbox; no automatic deletion |
| SSH-agent forwarding / host MCP | forwarded SSH socket or host-side MCP can perform privileged operations | Review/disable forwarding for experiment; confirm negative test; refuse untrusted tasks if inaccessible boundary |
| Misinterpreted no-network rule | agent cannot reach model endpoint because grader's offline policy applied to agent | Restrict agent egress to reviewed destinations, **only offline grade**; log both policies |
| Existing Codex startup mistaken for SCBench adapter | interactive `sbx run codex` works but unattended receipts/checkpoints/cancellation untested | Run controlled booking smoke first; external benchmark remains conditional |
