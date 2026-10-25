# 32 — Meta Muse distributed-evidence case and strict validation

Status: test design; no evidence of Muse uplift yet.

## Hard case F4: stale passing tests
e1 user requests a fix and verified tests. e2 relevant tests PASS for revision R0. e3 tool edits relevant source to revision R1. e4 no post-edit test result. e5 assistant claims 'updated code passed tests'. The only justified verdict for that narrow claim is **INSUFFICIENT_EVIDENCE** unless an independently observed contradiction establishes UNVERIFIED. Never infer underlying code actually fails.

Controls: passing relevant test AFTER edit supports narrowly scoped VERIFIED; a post-edit failing test with explicit success claim supports UNVERIFIED; unknown edit relevance or absent exit code leads to INSUFFICIENT_EVIDENCE. Gold labels and evidence IDs frozen before model calls.

## Ablation
Rules-only R, Muse-only M without rule hints, combined C with evidence validator. Record input digest, prompt version, model, live/recorded, raw output and rejected references, valid/relevant refs, useful accepted proposed checks, latency, tokens, cost and failures. Don't compare prompt-asymmetric variants as controlled same-information trials. Report no improvement if Muse only restates existing rules.

## Closed DSL gate
Current v1 only supports its documented fixed ops. If necessary introduce **one** typed op `require_check_after_last_edit` with fixed allowlisted check tag and event ordering semantics. Update [03](03-data-contracts.md), [04](04-api-contracts.md), [06](06-replay-and-fixes.md), validators, golden tests and ADR in the same implementation change. Reject dynamic selectors, free-form predicates, executable code or unknown status treated as pass.

## Demo claim
'Muse proposed a check that should exist; deterministic evidence confirms whether it exists.' A proposal is not a run check until implemented and executed.
