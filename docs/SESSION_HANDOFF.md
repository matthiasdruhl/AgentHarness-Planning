# Session handoff — template (not live build status)

Copy this template to the *application* repository's daily journal at kickoff. A blank item means **unknown**, not complete.

- Date/time (ET):
- Application repository URL and branch:
- App HEAD SHA:
- Pinned planning SHA:
- Current ticket (Txx):
- Status: NOT STARTED / IN PROGRESS / BLOCKED / VERIFIED
- Work changed (paths):
- Actual validation commands, exit codes and observed output:
- E2E smoke result (browser, URL, live/recorded mode):
- Meta model, live calls, usage and available credits (source/time):
- Missing prerequisites, defects, risky assumptions:
- Rules status (official rules link/date and code-reuse authorization):
- Next single action and ticket dependency:
- Scope/ADR changes that must be reflected back into planning:

## Handoff quality bar
A new session must be able to resume using this and the current diff without replaying the entire conversation. No guessed pass/fail, credit balances, or completed features. Avoid storing API keys, raw private traces, personal organizer emails, or secret-bearing logs.

## Verify status checkpoints
At each handoff add: completion-verdict.v1 implementation status; V01–V06 exact observed test results; first-viewport F1 UNVERIFIED visibility and event links; Muse status/provenance; scripted guard caveat displayed; T15 gated P1 status (SKIPPED/NOT_STARTED/MEASURED). Do not confuse design-complete with working or measured.
