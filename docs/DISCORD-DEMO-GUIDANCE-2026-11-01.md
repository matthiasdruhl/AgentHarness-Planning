# ForeCode demo planning — Discord questions-channel review

Reviewed November 1, 2026 (Eastern). Source window: relevant questions-channel replies dated October 27–November 1. This is a planning reference, not proof of implemented features, measured results, eligibility, or direct organizer sign-off.

## Source confidence and precedence

The substantive answers reviewed were posted by the **Cerebral Valley verified app/bot**. Some describe later organizer clarifications, but this review did not independently establish a direct human organizer ruling behind each answer. Treat these as dated server guidance. Accepted Official Rules, the participant portal, and direct organizer rulings remain higher authority. Earlier bot answers sometimes changed; prefer the later dated clarification while retaining its confidence label.

This review searched demo, submission, judging, model/tool usage and viral-prize discussions; it is not a complete archive of every server message. Source links below require Discord/server access.

## Video requirements reported in the channel

| Topic | Reported guidance | ForeCode planning consequence |
| --- | --- | --- |
| Duration | At most 3:00; judges stop watching at 3:00. The bot says a few seconds over does not automatically disqualify, but do not rely on that. | Target 2:50–2:55, with all essential evidence before the cutoff. Shorter is consistent with a maximum. |
| Opening | One line distinguishing pre-event work from what was built during the event. | Accurately disclose prior concept/planning and the actual event-built software shown. Do not assert experiments exist without evidence. |
| Content | Working product end to end; show only event-built functionality, not slides or unbuilt ideas. | Show one concrete booking/future-requirement story through an inspectable Decision Report. |
| Meta contribution | Live Meta calls visible; briefly show where and how Meta models are used. | Show actual hypothesis/challenge inference and its role in the experiment; interpretation only with admissible evidence. |
| Code | A code walkthrough is not required. | Prefer working behavior, results and receipts over scrolling through source. |
| Roadmap | Future plans belong in the written submission, not the video. | Omit unfinished learning/RL/tournament/stretch promises. |

Sources: [On the Demo Video][S1], [Demo Duration][S2], [SnapPart submission clarifications][S3].

## Live model-call provenance

Later bot guidance says a working feature plus a log line naming the Meta model IDs is good provenance. The README should explain where each model is used. No single mandatory presentation format was specified.

Recommended ForeCode presentation (our recommendation, not a required log schema):

- Show the provider/model ID and actual request/response or bounded trace beside the working feature.
- Connect the response to the visible hypothesis, challenge or interpretation; show run/response identifiers and timing where genuinely captured.
- Preserve the original sanitized trace and output as supporting evidence. Never expose keys or hidden evaluator tests.
- Label live inference, recorded Meta output, template fallback and estimated metrics distinctly.
- Showing a provider dashboard can supplement evidence but does not replace the working model-powered flow.

Sources: [Live-call visibility][S4], [Demo questions][S5].

## Editing, narration and latency

Cuts, editing help and speeding up long-running steps are allowed. Back accelerated runs with recorded outputs or traces. The video must be understandable in English through narration, subtitles or a transcript. AI narration/elements are allowed; human presentation is preferred. Later bot guidance says a face camera is unnecessary and screen recording with voiceover is fine. Motion graphics are extras; most footage should show the product actually running.

For ForeCode, record genuine approved execution, label accelerated sections, and retain the complete evidence trail. A recorded video of a real live call is different from playing back a canned response and calling it live. Do not fabricate latency, success or continuity across edits.

Sources: [Editing and voiceover][S6], [Promotional-video question][S7], [Camera question][S8].

## Repository, replay and hosted-demo expectations

The bot repeatedly says:

- Deployment is optional, with no separate deployment bonus points.
- Judges mainly use the video and public GitHub repo, and may test with their own keys.
- The exact key-supply process is not announced; do not promise judges will supply keys.
- The full demonstrated workflow must run from the public repo's setup instructions.
- A clearly labeled keyless replay of real recorded runs is accepted as a fallback. Replay alone does not replace live capability.
- Include as much provenance as practical: recordings, traces and original outputs.
- Hosted versions may use replay, rate limits, sample data or a demo account rather than requiring judges' external accounts.
- Sandbox/synthetic data is acceptable if the README and video identify which steps are simulated and which work.

ForeCode preparation checklist:

- [ ] Document clean setup and supported environment for live Meta inference and the separate developer-local experiment CLI.
- [ ] Provide an environment-variable example without credentials.
- [ ] Include a clearly labeled replay of a real event-period experiment with sanitized traces, outputs and receipt/source identities.
- [ ] Explain which operations are live, recorded, estimated, simulated or unavailable.
- [ ] Verify video, README and actual implementation describe the same workflow.
- [ ] Keep hosted web processes command-free. The channel guidance does not authorize moving sandbox execution into a public route.
- [ ] Keep negative/inconclusive results, missing metrics and preparation cost visible.
- [ ] Check all judge-facing links without privileged access.

Sources: [Judging process][S9], [Deployment question][S10], [Demo questions][S5], [Sandbox data][S11], [App login/replay][S12].

## Runtime models versus development tools — important conflict

Latest bot guidance on November 1 says **every model called at project runtime must be a Meta model**, explicitly replacing earlier guidance that non-Meta models could run alongside Meta's. A corrected October 28 answer says development may use Codex, Claude Code or Copilot; Muse Code is not mandatory as a development aid.

**ForeCode interpretation, not a direct ruling on ForeCode:** when ForeCode invokes a coding agent as an experiment instrument, that agent's model appears to be part of product runtime. Therefore plan the submitted live experiment around verified Meta-powered runtime agents, including contestants, planners/reviewers and any other runtime inference. A tool's brand alone does not prove its configured underlying model qualifies.

Older planning says Codex is the runtime fallback. That is **not eligibility clearance** under this newer guidance. Historical Codex experiments remain honestly attributed research records; do not relabel them Meta-powered. Until direct rules clarify the boundary, do not rely on a non-Meta runtime agent as the qualifying demonstrated workflow. Using Codex to author ForeCode during development is a separate activity.

This note does not authorize a provider migration, bypass isolation gates, change matched A/B agent/configuration requirements, or claim that a Meta runner already works. Raise the eligibility conflict before choosing the final demo run; resolve any implementation change through existing security/evaluation gates.

Sources: [November 1 AI model usage][S13], [Corrected models-and-tools answer][S14]. See also [ADR-017](17-architecture-decisions.md#adr-017--dated-discord-demo-guidance-and-unresolved-source-conflicts-2026-11-01).

## Open-weight bonus

The bot identifies Muse Glimmer or Muse Spark Open as eligible models for Best Build on Meta Open Weight Models. Local hardware or partner inference can count; a hybrid with hosted Meta models can qualify. Explain the real model role and where it runs in both the demo and README. Do not imply that merely developing with Muse Code qualifies or that using an eligible model guarantees an award. Verify final binding bonus terms.

Source: [Demo questions][S5].

## Judging implications

The reviewed bot answers report Stage One pass/fail and Stage Two scores across:

| Criterion | Bot-reported weight | Evidence to prioritize in ForeCode |
| --- | --- | --- |
| Impact | 30% | A concrete future requirement and developer consequence; measured benefit only where supported. |
| Use of Meta AI Tooling | 25% | Falsifiable hypothesis, meaningful challenge and evidence interpretation; creative work beyond a thin API wrapper. |
| Technical Depth and Execution | 20% | Fair controlled runs, independent verification and traceable evidence. |
| Demo | 25% | A working, impressive flow that holds up and is compelling to watch. |

These answers support 30/25/20/25 over older equal-weight planning, but are **bot-reported**, not independent inspection of the accepted rubric. Preserve that qualification when citing percentages. More models are not automatically better; the channel emphasizes creative use. Editing/storytelling was not identified as its own scoring item. A brief problem explanation is useful for impact even though the bot says it is not a required video segment.

Sources: [On the Demo Video][S1], [SnapPart clarifications][S3], [Deployment question][S10]. Reconcile through the [rules register](RULES-VERIFICATION-2026-10-27.md).

## Proposed three-minute ForeCode outline

This is a suggested edit, not an additional feature requirement or claim of current readiness. Select only implemented, safe, reproducible behavior. Existing [demo acceptance](DEMO-ACCEPTANCE.md), [Meta Scientist protocol](META-ARCHITECTURE-SCIENTIST.md), matched-study rules and November 2 feature freeze remain in force.

| Time | Screen/action | Claim boundary |
| --- | --- | --- |
| 0:00–0:15 | Accurate pre-event/event-built disclosure; concrete booking requirement and developer problem. | Do not present pre-event planning/prototypes as new software. |
| 0:15–0:40 | Confirm future intent, select bounded alternatives and show real Meta hypothesis/challenge. | Calls are visibly live or explicitly recorded; challenges are proposals, not hidden tests. |
| 0:40–1:25 | Show approved developer-local execution capture and Meta model provenance; accelerate waiting. | Hosted UI only displays sanitized artifacts. No implied web-triggered shell execution. |
| 1:25–2:05 | Inspect actual patch/check outcome, paired configuration and independent receipts. | Same evaluator, agent/config and budgets across architecture arms; include failures. |
| 2:05–2:40 | Show completed tournament comparison or Decision Report: refactor, keep or inconclusive. | Include preparation cost and uncertainty. No Meta-superiority claim without its separate strong matched comparator. |
| 2:40–2:55 | Explain Meta's essential role, scope of evidence and reproduction/replay entry point. | No roadmap pitch, fabricated savings or single-case generalization. |

If a tournament/stretch feature is unfinished, use the proven P0 A/B path. If no admissible real run exists, state that empirical improvement is unvalidated; a replay/mock must not be sold as a completed live experiment. Preserve the distinction between reproducing live capability and offering convenient recorded evidence.

## Submission timing and accessibility

The public event page confirms **Wednesday November 4, 2026 at 9:00 PM Eastern** (02:00 UTC November 5). The bot says no further edits after the deadline. It also says a public repo is required, private judge invitations are not an exception, and no specific open-source license is mandated provided source is publicly available under acceptable terms.

The unlisted-YouTube question did **not** receive an explicit unlisted-specific ruling in the reviewed answer; it said the link must be accessible. Verify the chosen video's anonymous accessibility and actual final portal fields. No official example demo was supplied in the reviewed golden-examples thread.

Sources: [Submission requirements][S15], [Golden examples][S16], [public event/submission URL](https://cerebralvalley.ai/e/meta-ai-developer-hackathon/hackathon/submit).

## Optional social demo / Most Viral

Later bot clarification reports:

- Only the single X post linked in the submission counts; other posts/thread replies do not aggregate.
- Count is likes + reposts + comments through **November 8 EOD Eastern**.
- The post can go up during the event, beginning October 26; an October 3 post is outside that period.
- Engagement counts from publication. LinkedIn cross-promotion linking to the X post is allowed.
- No hashtag is required.
- Paid boosting remained unresolved. Approval to reuse official promotional visuals was not confirmed.

This is optional promotional planning, not permission to post, purchase promotion or modify the submission. Main demo quality and reproducibility take priority.

Sources: [Counting rules][S17], [Cross-promotion][S18], [Boosting unresolved][S19].

## Open questions to retain

1. Direct accepted-rule confirmation of the runtime-agent boundary for ForeCode.
2. Direct accepted rubric confirmation of 30/25/20/25.
3. Exact judge key provisioning and testing behavior.
4. Unlisted-video-specific permission if needed beyond accessibility.
5. Paid promotion and official visual reuse if pursuing social awards.

Do not turn these unknowns into implementation claims or treat this review as a requirement for new infrastructure. Official/direct guidance controls if it changes.

## Source index

All Discord links are to threads under Meta Global AI Developer Hackathon / questions.

[S1]: https://discord.com/channels/1557169028080869426/1564043204725182484/threads/1566191670079262870
[S2]: https://discord.com/channels/1557169028080869426/1564043204725182484/threads/1566314562121375824
[S3]: https://discord.com/channels/1557169028080869426/1564043204725182484/threads/1565820300262637739
[S4]: https://discord.com/channels/1557169028080869426/1564043204725182484/threads/1566371665104085124
[S5]: https://discord.com/channels/1557169028080869426/1564043204725182484/threads/1565618985951694928
[S6]: https://discord.com/channels/1557169028080869426/1564043204725182484/threads/1565678790728876052
[S7]: https://discord.com/channels/1557169028080869426/1564043204725182484/threads/1566118404237164664
[S8]: https://discord.com/channels/1557169028080869426/1564043204725182484/threads/1566100541153747004
[S9]: https://discord.com/channels/1557169028080869426/1564043204725182484/threads/1566132511476818032
[S10]: https://discord.com/channels/1557169028080869426/1564043204725182484/threads/1566365323647651910
[S11]: https://discord.com/channels/1557169028080869426/1564043204725182484/threads/1565371667407179896
[S12]: https://discord.com/channels/1557169028080869426/1564043204725182484/threads/1565156281478545548
[S13]: https://discord.com/channels/1557169028080869426/1564043204725182484/threads/1566392379752194068
[S14]: https://discord.com/channels/1557169028080869426/1564043204725182484/threads/1564656518589055198
[S15]: https://discord.com/channels/1557169028080869426/1564043204725182484/threads/1565944009762017301
[S16]: https://discord.com/channels/1557169028080869426/1564043204725182484/threads/1566101819636064388
[S17]: https://discord.com/channels/1557169028080869426/1564043204725182484/threads/1565951875499425832
[S18]: https://discord.com/channels/1557169028080869426/1564043204725182484/threads/1566070369977110578
[S19]: https://discord.com/channels/1557169028080869426/1564043204725182484/threads/1564801998493192202
