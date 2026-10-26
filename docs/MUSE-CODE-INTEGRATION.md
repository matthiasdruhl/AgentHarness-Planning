# Muse Code — conditional developer-local coding-agent adapter

**Status, 2026-10-26: PROPOSED / NOT RUN.** No locally verified Muse installation, available entitlement, authenticated headless execution, safe guest isolation or protected evaluator result is asserted. This pre-event *planning repository is not the submission.* Under the [organizer rules](OFFICIAL-PARTICIPANT-RULES-2026-10-26.md), any code, fixture, docs, integrations and functionality demonstrated in the fresh standalone public submission must be newly authored after Oct 26 **noon ET**; do not copy these reference files.

## Role boundaries

| Role | Owner / authority |
|---|---|
| **Architecture Scientist (P0)** | Actual eligible **Meta Model API** integration provides a falsifiable architecture hypothesis and self-challenging scenario proposal, consented/validated on the server; it cannot run code or certify a result |
| **Coding experiment runner (conditional)** | Third-party **Muse Code**, if safe/usable, implements one human-reviewed fixed task in a bounded **developer-local isolated guest**; otherwise existing **Codex** first-target/fallback |
| **Protected Verify** | Separate trusted offline grader scores exact final code snapshot against precommitted checks, emits custody-bound receipt; ignores agent's own success claim |
| **App developer's tool** | Codex or Muse used to *write* the new hackathon submission is separate from the model-powered **runtime feature** and does not itself establish Meta competition eligibility |

This is **not** an automated recovery harness, uncontrolled multi-agent development platform, or replacement for Forecode's already frozen hypothesis/Verify contracts. The optional [open-weight inference extension](OPEN-WEIGHT-STRETCH.md) is a separate P1 idea.

## Verified vendor surface; not locally verified

Meta [Muse Code documentation](https://dev.meta.ai/docs/muse-code) describes an interactive terminal agent and headless `muse exec "<prompt>"`. The [headless guide](https://dev.meta.ai/docs/muse-code/extending) describes `--json` (JSONL stdout), `--prompt-file`, `--max-model-steps`, session export and completion-vs-success distinction. Meta also publishes `muse serve` with a session protocol and `@muse-code/sdk`; **do not adopt the SDK in P0** unless subprocess mode demonstrably fails a concrete need.

**Only after host/isolation gates are met**, illustrative guest CLI smoke:
~~~sh
muse --version
muse exec --json --max-model-steps 12 --prompt-file task.txt
~~~
An agent exit code of `0` means its turn ended, **not** that tests pass. Confirm exact flags, output event shape, provider/model, authentication and billing on the installed version. Wrap argv directly (never interpolate task content into a shell), cap stdout size, redact artifacts, enforce wall-timeout and verify SIGINT/SIGTERM and forced teardown. A session log is untrusted input, not a grader-issued receipt.

## Minimal provider-neutral controller contract (existing v1 remains authoritative)

- **Input:** preapproved task ID + frozen task/fixture SHA, candidate A/B ID, immutable base tree digest, reviewed prompt, fixed visible tests/tool allowlist, sandbox + egress policies, agent/model/config, step/time/cost caps; no hidden tests or untrusted arbitrary repository import.
- **Run artifacts:** adapter name `muse-code` or `codex`; version/model provenance; run/time IDs; observed exit/signal/cancel reason; redacted bounded JSONL/event digest; inspected changed files and patch hash; **exact post-agent source tree hash**; actual token/cost/usage when observable, otherwise null.
- **Evaluator:** grade only the pinned final-tree snapshot with protected suite/policy/evaluator identity and network disabled. Preserve required run/check/receipt hash links from [Contract Freeze v1](CONTRACT-FREEZE-v1.md). Agent logs and mere SHA labels never authenticate grading; the agent cannot edit trusted grader material.
- **App:** read-only sanitized, provenance-labeled reports. No hosted endpoint to spawn Muse/Codex, execute submitted code or accept alleged protected evaluator receipts.

If frozen schema cannot express a real runner record, raise a **separate** reviewed schema/ADR change; this optional plan does not authorize new fields or fake receipts.

## Security hard gates

1. **Inspect existing Docker Sandboxes/Codex non-destructively** using the [booking-first runbook](DOCKER-SANDBOX-BOOKING-FIRST.md). Use a dedicated sanitized disposable clone or mountless sandbox for Muse; prove host boundary and secret/SSH/keychain/host socket denial. Do not assume Muse's own sandbox or the fact Docker is installed proves containment.
2. Enforce reviewed model-only egress for agent execution; **protected grader** runs separately with networking disabled. Use host-managed credentials; never inject private API keys into agent-readable files, repo, prompts or logs.
3. For noninteractive runs, `--disable-approval` skips prompts but keeps Muse's inner sandbox; it is **not sufficient without proven outer isolation**. **Never use `--yolo`** (disables both approval and inner sandbox). Unexpected approvals or new privileges are a hard stop.
4. Measure limits/termination, usage/cost (if available), log redaction, source digest and evaluator independence. Do not attempt arbitrary SCBench tasks before protected booking-v1 is working.

## Deadline and go/no-go

| Date | Evidence required | No-go behavior |
|---|---|---|
| **Oct 27** | Actual CLI/version and model/access/billing; guest compatibility; outer sandbox negative checks and permission/egress plan | Muse remains NOT_RUN; advance Codex booking-first work |
| **Oct 28** | Real **bounded booking task** (after isolation PASS) with redacted observed event log, cancellation behavior, exact final source digest, independent grader receipt | Mark Muse BLOCKED/FAIL/NOT_RUN honestly |
| **Oct 29 HARD STOP** | Fully reproducible safe Muse runner proof before switching the demo to Muse | **Use Codex** as controlled experiment runner; no further Muse integration work before submission |

No change to Oct 30 first fair paired-run target, Nov 2 feature freeze or Nov 4 9 PM ET submission. Muse installed/connected or exit-0 alone is **not** acceptance.

## Comparability and demonstration

Use **one identical agent backend and underlying model/version** across **both** A/B architecture arms and across Meta vs equally informed non-Meta candidate-control arms, with the same task, budgets, tools and protected Verify. Do **not** compare Codex A to Muse B to claim architecture gains. Muse-versus-Codex would be a *separate* experiment, not a product proof.

The 3-minute demo, if validated, should say: **"A real Meta model proposed and challenged this architectural hypothesis; Muse Code applied the pre-approved future change in a controlled local sandbox; Forecode independently evaluated the exact result and issued this scoped certificate."** Substitute Codex if Muse is unproven. Attribute Muse to Meta, Meta Scientist to Meta Model API and verification/experiment design to Forecode. Label real vs recorded/estimated, losing results, known limitations and preparation cost. Using Muse Code merely as a source-writing assistant does not substitute for meaningful Meta model functionality in the submitted product.

**Source references:** [Muse Code overview](https://dev.meta.ai/docs/muse-code), [headless/CI](https://dev.meta.ai/docs/muse-code/extending), [configuration](https://dev.meta.ai/docs/muse-code/configuration), and [official participation rules](OFFICIAL-PARTICIPANT-RULES-2026-10-26.md).
