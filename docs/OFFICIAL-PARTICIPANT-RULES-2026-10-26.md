# Organizer participant FAQ and corrected eligibility rules — October 26, 2026

**Status:** participant-provided organizer rules/FAQ and timed organizer clarifications, supplied in chat Oct 26, 2026. Treat this as authoritative event-specific guidance above all earlier speculative public-page interpretations. Keep official portal messages and any future corrections; this summary is not legal advice or evidence that each eligibility condition has been personally satisfied.

## Timeline (America/New_York)

- **Oct 26, 2026, 12:00 PM ET: official kickoff and start of permitted building** — organizer explicitly corrected the initially confusing "Oct 27–Nov 4" summary: **building begins only after the Oct 26 kickoff session**. No submitted code or functionality from before the kickoff.
- Oct 27–Nov 4: remaining development period.
- **Wed Nov 4, 2026, 9:00 PM ET: hard submission cutoff** at https://cerebralvalley.ai/e/meta-ai-developer-hackathon/hackathon/submit .
- Nov 5–8: judging. Nov 9 at noon ET: closing ceremony/live finals. Nov 16: community-vote winner.
- Time-zone caution: Eastern switches from EDT to EST on Nov 1; follow the event's local ET deadline rather than carrying a fixed UTC offset.

## Mandatory project and contributor eligibility

1. **New work only** in the submitted project: code, assets, features, functionality **demonstrated in the video** must have been created **after kickoff Oct 26 at noon ET and no later than submission**. Do not copy pre-event code or machine-readable contract/source files from this planning repo into the entry. Pre-event architectural ideas can guide fresh implementation; the entry must show only genuinely event-built results.
2. **Important prior-project clarification:** an existing project/startup is permitted as conceptual foundation, but the **submission repository must be a fresh standalone extract containing only work built during the event**. Keep the existing codebase **out of** the submitted repository. No transplanted implementation, fixture, CI script, old Git history, pre-event commits, sample data or recordings framed as new.
3. **Demo opening disclosure:** at the start of the 3-minute video, state which ideas or project elements preceded the event and precisely what was newly built during the event. Judges must be able to identify new contributions. Confusing provenance risks **disqualification**.
4. **Public submitted repository**; one selected **Indie Developer or Startup track only**; a **maximum of four approved participants** including solo; one person submits for the team; list every contributor. **Every human who helps create the entry must be an approved participant**; organizer stated additional people cannot be approved. AI coding tools are tools, not unauthorized human teammates, subject to organizer platform/tool rules.
5. Age **18+ and legal adult** where resident. **Meta/Cerebral Valley employees, contractors, government-affiliated people and their households excluded** under the waiver wording supplied by the participant. The definition/scope of `government-affiliated` may require direct organizer clarification if potentially relevant; do not assume either approval or disqualification from prior job history.
6. You must own or be licensed to use **all code, assets and datasets**; comply with legal, ethical, platform and third-party terms. Employer IP/resource issues remain independently applicable. Avoid organizer-listed generic prohibited categories; Forecode's scoped developer tools are different from the listed health, RAG, education chatbot, job screening, nutrition, personality, sports, politics/war examples.

## Theme, model and judging fit

- Select exactly one problem statement: **Push the Frontier** is Forecode's intended fit (software engineering), or Build for Your World.
- Meaningfully use **Meta Model API and/or Meta open-weight models**, not merely a model logo or generic coding-tool attribution.
- Organizer-listed: **Muse Spark, Muse Wonder, Muse Image, Muse Voice Transcribe, SAM 3.1** via Meta Model API; **Muse Glimmer and Muse Spark Open** as open weight; **Muse Code** can help code. Access to any particular API model remains unverified until an actual authorized call.
- Baseten optional inference ID: **`meta-models/muse-spark-open-1026`** (per participant FAQ). If using Baseten/open weight, keep provider/model provenance correct; confirm it qualifies under final track requirements. Using Codex/Muse Code to *write* the app is not a substitute for actual Meta-model-powered functionality in the delivered product.
- **Four project-judging dimensions:** impact, use of Meta AI tooling, technical depth/execution and demo quality. **Judging-weight DISCREPANCY (Oct 27):** this participant-notes summary originally recorded **25% each**, while two public writeups of the official waiver describe **30% impact, 25% Meta, 20% technical, 25% demo**. The Meta landing page only confirms **50/50 weighting for application-selection criteria**, which is a different stage. The accepted waiver/portal rubric has not been independently inspected here; **the owner must confirm the project rubric** before describing exact percentages as official. See [verification register](RULES-VERIFICATION-2026-10-27.md). Top five per selected track are reported to reach finals under participant guidance. Optimize all four dimensions regardless.

## Submission mandatory

- **One public source repository containing only eligible event-built work**, working accessible demo/video link **and required 3-minute demo video**, complete named approved team.
- Verify all public URLs open without privileged credentials, timestamps/source ownership are auditable, model API behavior is real or properly disclosed, and screenshot/video show *only* event-built functionality. Submit before **Nov 4, 9:00 PM ET**; preserve confirmation.
- Video first line suggested: **"Forecode's architectural concept and planning existed before the hackathon; the submitted application, model integration, booking fixture, controlled experiments, and demo shown here were implemented during the event."** Say only what is verifiably true when recording. Do not use old fixture runs or pre-event mock samples as demonstrated new features.

## Credit, billing, channels and support

- Accepted participants get **$150 Meta Model API credits**, claimed individually by **Nov 4, 9 PM ET**. Ask organizers for the current credit-claim form; credits may be batched and **billing balance must be checked** before testing. **Payment card required** for API usage/credit provisioning; a temporary preauthorization charge can occur, generally reversed. Extra spend can be charged; **notifications labeled spend limit may not hard-stop charges**. Configure provider-side budget controls and project local caps; monitor manually.
- Baseten offers application-based **$100** for up to 2,000 people; Modal **$100** for first 1,000; Fireworks details TBC. These are *not guaranteed* budget.
- Office hours: weekday 10–11 AM ET during build period; live Agents 101 Oct 27, Agents 102 Oct 28, Fireworks training Oct 30, noon–1 PM ET. Follow official announcements and ask organizers for eligibility/code provenance interpretations when needed.

## Entry hygiene: approved method

1. Keep **`AgentHarness-Planning` as a non-submitted pre-event reference repository**. Do not merge, copy, import, vendor, link as an implementation package, or reuse its Git history/JSON Schema/scripts/synthetic test fixtures within the new public entry.
2. Create a **new public repository** after kickoff. Preserve its creation and commit timestamps; generate `README.md`, code, fixture, tests, local conformance definitions and CI **from scratch** after kickoff using the pre-event concepts as design guidance, not copied bytes.
3. Write a **fresh**, event-created `docs/BUILD-PROVENANCE.md` in the submission repo, listing first commit time, explicit pre-event planning disclosure, authored-after-kickoff files/features, permitted third-party dependencies/assets and license attribution. Keep work logs/PR and CI timestamps. No fabricated Git history.
4. Use existing Docker/Sandbox and Codex **as tools** after checking safety; local machine setup done before kickoff is not a submitted product feature. Do not display pre-event sandbox prototype code if it existed; create the benchmark fixture and grader fresh.
5. Treat existing planning specs/schema fields as **read-only external reference**; freshly reimplement compatible runtime contracts/tests in new project after kickoff, and test app parity. Do not copy the old JSON catalog or examples into submitted tree. Commit a newly authored spec-lock **reference ID**, not the old documents themselves.
6. Make the video and README clearly disclose pre-existing planning versus new implementation. If a gray area remains—pre-event generated code snippets/third-party assets, affiliation or collaborator eligibility—**ask organizers in advance** and record their written response.

## Startup versus Indie / prizes

Indie Developer awards (1–5): **$150k / $100k / $75k / $50k / $25k**; Startup awards: **$250k / $150k / $75k / $50k / $25k**. Bonus Most Viral $20k, Best Build on Meta Open Weight Models $10k, Community Vote $10k, Best Agentic Use-Case $5k, Best Creative Build $5k. **Do not choose track solely from prize amounts**; verify eligibility and meaningful execution fit. Community vote Nov 9; social/viral cutoff Nov 8 EOD per FAQ.

## Oct 27 review: open eligibility question and reliable status

The [official Meta event page](https://dev.meta.ai/events/global-hackathon) expressly lists exclusions for government-affiliated individuals (and certain household/family members) but does **not** publicly define this term in enough detail to determine every individual case. If potentially applicable, obtain a dated written organizer interpretation **before** assuming acceptance or disqualification. Keep personal background and written waiver documents private. This summary cannot decide any entrant's eligibility.

The exact scoring weights are **not resolved** by the Oct 26 conversational summary; project judging and application selection are not the same. See the [full source register and signoff actions](RULES-VERIFICATION-2026-10-27.md). This clarification does **not** weaken participant-specific new-work, public repo, or 3-minute video requirements.

## Source priority / conflict resolution

User-supplied official participant FAQ and organizer follow-up, dated Oct 26, override legacy planning assumptions: *preexisting code eligibility unresolved*, *build Oct 27*, *video timing unknown*, *judging weights unavailable*, *model names speculative*, or *planning repo safe to copy*. Final participant portal updates still prevail. The present planning repo may be edited for guidance, but **should not be submitted** as the newly built project.
