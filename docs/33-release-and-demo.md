# 33 — Judge experience, early deployment and submission controls

Status: planning only. Final organizer instructions override this.

## Opening
0:00–0:15: 'The agent says everything passed; observed tests failed.' Display immediate UNVERIFIED and clickable paired evidence before any Meta call.
0:15–0:45: show F4 pass-before-edit ambiguity and INSUFFICIENT_EVIDENCE.
0:45–1:15: live Muse structured hypothesis with provenance and validated proposed test, or explicitly labeled recorded fallback.
1:15–1:50: F1 scripted baseline policy FAIL / guarded policy PASS, *test remains failed*.
1:50–2:20: display independent measured A/B(/C) only if securely run; else honest synthetic benchmark and P1 NOT RUN.
2:20–3:00: export reproducible report, repo/setup path and final value proposition.

## Release calendar
Oct 26 eligibility + scaffold. Oct 27 deterministic golden controls. Oct 28 live Meta. Oct 29 bounded DSL and hard case. Oct 30 guard/report and first deployed smoke. Oct 31 verification-first UX and E2E. Nov 1 frozen ablations and gated 5–10 task pilot. **Nov 2 feature freeze**; Nov 3 video + outsider review; Nov 4 final incognito smoke and early submission.

## Evidence bundle
Demo URL, exact implementation SHA, no-secret source, tested setup commands, sanitized model provenance, true numerator/denominator gold table, live vs mock labeling, known unknowns and failures, task solves/false blocks if measured, guard-only caveat and final submission receipt. No fabricated scores or assumed numeric judging rubric.

## Stop conditions
If no deployed P0 by Oct 30, cancel P1. If isolation/budget/rules fail, skip P1. If Muse unavailable, stabilize deterministic app and clearly label recorded output; don't imply live inference. Once Nov 2 arrives, no net-new features. Protect working judge URL and submit early.
