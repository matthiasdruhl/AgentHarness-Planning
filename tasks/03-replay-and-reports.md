# Replay and reports — T07 to T09

## T07 Deterministic scripted replay (after T03, T06; Day 4)
**Read:** [06 replay](../docs/06-replay-and-fixes.md), [04 API](../docs/04-api-contracts.md), [14 test matrix](../docs/14-test-matrix.md).
**Goal:** pure TS scenario/policy interpreter, fixed assertion DSL, `POST /api/replay`, strict scenario allowlist.
**Acceptance:** each bundled baseline same result across 5 repetitions; arbitrary imported trace replay clearly unsupported; security tests establish no shell/filesystem/network execution of trace content.

## T08 Verification / mitigation (after T07; Day 5)
**Read:** [06](../docs/06-replay-and-fixes.md), [01 product](../docs/01-product-requirements.md).
**Goal:** `POST /api/verify` compares unchanged baseline to one allowlisted `require_passing_tests` policy flip for hero scenario.
**Acceptance:** baseline FAIL -> guard/compliance PASS with failing original test still explicitly visible; unsupported scenario/fix combinations rejected. **Forbidden:** claim underlying software bug fixed.

## T09 Evidence-rich export (after T08; Day 5)
**Read:** [03 data contracts](../docs/03-data-contracts.md), [10 security](../docs/10-security-and-privacy.md).
**Goal:** sanitized schema-versioned JSON report linking trace hash, exact event IDs, model mode, replay engine, policy delta and limitations.
**Acceptance:** roundtrip test and no secrets; exported output does not conflate actual live analysis with recorded fixtures.
