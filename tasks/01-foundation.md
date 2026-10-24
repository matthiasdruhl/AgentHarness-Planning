# Foundation — T01 to T04

## T01 Scaffold (Day 1; prerequisite: organizer rules clearance)
**Read:** [02 architecture](../docs/02-system-architecture.md), [11 dev](../docs/11-development-and-deployment.md), [16 rules](../docs/16-rules-and-compliance.md).
**Goal:** New *application* repo with Next.js App Router, strict TS, lockfile, Zod, lint/formatter, test runner and a clear `npm run check` composition. Add `.env.example`, `.gitignore`, fixtures/tests/src directories and no actual secrets.
**Acceptance:** clean install, dev start, typecheck, lint, unit test harness and production build genuinely pass; document actual commands. CI can run without Meta key. **Forbidden:** build app in planning repo, paid API calls in CI, extra services.

## T02 Runtime data contracts (after T01)
**Read:** [03 schemas](../docs/03-data-contracts.md), [04 APIs](../docs/04-api-contracts.md), [10 security](../docs/10-security-and-privacy.md).
**Goal:** canonical Zod `trace.v1` and `analysis.v1` plus replay/report data parsers. Derive TS types; validate schema version, ID uniqueness, enums and size boundaries at runtime.
**Acceptance:** valid gold samples parse; unknown versions, duplicate IDs, oversized and malformed payloads fail with actionable typed errors. **Forbidden:** scattered handwritten incompatible types.

## T03 Fixtures and canonicalization (after T02)
**Read:** [07 fixtures](../docs/07-scenarios-and-fixtures.md), [03 schemas](../docs/03-data-contracts.md).
**Goal:** create synthetic false-success, unsupported-claim and unsafe-attempt fixtures, deterministic ordering/index/hash and immutable replay manifest.
**Acceptance:** all three parse with stable event IDs and digests; mutations/manifest mismatches fail. **Forbidden:** real private user traces or executable imported tool commands.

## T04 Timeline and baseline checks (after T03)
**Read:** [01 PRD](../docs/01-product-requirements.md), [08 UX](../docs/08-ux-and-demo-workflow.md), [14 tests](../docs/14-test-matrix.md).
**Goal:** accessible timeline, evidence jump links and conservative pure rule checks independent of live Muse.
**Acceptance:** correct false-success evidence and negative controls; keyboard navigation and errors verified; no model call on page load. **Forbidden:** inventing absent tool success or non-deterministic classifications.
