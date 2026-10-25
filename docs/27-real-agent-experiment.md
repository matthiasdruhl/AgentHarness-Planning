# 27 — Developer-local controlled agent study (P0 experimental core)

This is now a **central P0 goal**, unlike the former Verify-only optional study. However it must be disabled unless verified safe isolation exists.

Method: reviewed pinned booking fixture, hidden trusted evaluator, agent config pinned, A/B architecture branches satisfying initial spec. One roadmap change and one frozen unseen future change; held-out unavailable to architecture proposer. Run A/B with identical check set, budgets and retries. Sandbox no-network/non-root/no secrets, controlled tools, hard terminate and collect evidence.

Scores: actual pass/fail, regressions, iterations, tokens if measurable, time and cost incl candidate upfront refactor. Record unsuccessful/inconclusive results. If isolation unavailable, cancel live execution; report that experimental benefit was not validated. No public /api/run endpoint.
