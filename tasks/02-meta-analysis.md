# Muse analysis — T05 to T06

## T05 Provider adapter (after T02–T04; target Day 3)
**Read:** [05 Meta API](../docs/05-meta-integration.md), [10 security](../docs/10-security-and-privacy.md).
**Goal:** server-only Meta transport with configurable endpoint/model, constrained request summary, timeout/retry policy and typed structured response. Fake transport in tests.
**Acceptance:** key never enters client bundle/log; 429/5xx bounded retry, 4xx fail-fast, timeout/missing key explicit; one deliberate verified live request captures provenance if credits are enabled. **Forbidden:** auto-call on mount, unlimited retry, unverified pricing claims.

## T06 Analysis route and evidence validation (after T05)
**Read:** [04 API](../docs/04-api-contracts.md), [03 contracts](../docs/03-data-contracts.md), [06 replay DSL](../docs/06-replay-and-fixes.md).
**Goal:** `POST /api/analyze` validates payload, parses model JSON strictly, resolves each cited event ID, rejects unsupported DSL tests/policies and distinguishes hypotheses from verified deterministic evidence.
**Acceptance:** fixture yields >=1 valid finding in controlled live smoke; malformed JSON, absent evidence, orphan ID, malicious DSL, wrong version and provider outage are fail-closed. **Forbidden:** LLM responses as executable source or independently verified verdicts.
