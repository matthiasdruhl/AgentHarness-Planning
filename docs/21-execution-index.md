# 21 — Canonical document precedence

1. Current official organizer terms (docs/16) govern eligibility.
2. README.md and AGENTS.md define current unified Forecode mission and implementation boundaries.
3. docs/01 PRD defines P0 goals; docs/03 and docs/04 own exact data/API contracts.
4. docs/02 and docs/10 own architecture and security; docs/09 owns study design, labels and evidence rules.
5. docs/13 and tasks/README.md own tickets; docs/12 owns calendar; docs/15 owns demo claims.
6. docs/17 owns explicit ADRs; docs/18 risks; docs/20 readiness.
7. docs/22–27 are supplemental benchmarks/protocols; docs/28–29 are **legacy transition notices**, not competing specifications.
8. Historical task file names are retained for stable links; their contents now point at canonical Forecode tickets. Prior open Verify PR #1 is superseded, **not** to be merged without review.

If incompatible requirements remain, file ADR and resolve before implementation. No duplicate 'source of truth' inside archived text. Planning repository contains **no runtime code**.
