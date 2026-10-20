# AgentHarness Audit — Meta Hackathon Planning

**Status:** Implementation-ready planning package; no application code is included.  
**Prepared:** 2026-10-20. **Build window:** October 26–November 4, 2026.  
**Hackathon:** [Meta Global AI Developer Hackathon](https://cerebralvalley.ai/e/meta-ai-developer-hackathon). **Participation:** accepted (project owner confirmed).

## One-sentence pitch

**AgentHarness Audit is a developer-facing coding-agent failure lab that uses Meta Muse to explain an agent trace, synthesize evidence-linked regression checks, and demonstrate a reproducible before/after outcome in a constrained replay harness.**

## Important boundaries

- **Only the Meta hackathon prototype is in scope.** No enterprise roadmap, commercialization strategy, general-purpose integration platform, or post-event architecture is prescribed here.
- **Analyzing arbitrary imported traces is not the same as replaying an arbitrary external agent.** V1 can analyze normalized JSON traces; executable replay is limited to bundled reference scenarios and a narrow, deterministic policy harness.
- **An LLM suspicion is not an observed fact.** Evidence IDs must resolve; only deterministic assertions assign pass/fail. No claimed reliability improvements without measured runs.
- **Safety:** no arbitrary code execution, shell commands, agent actions, network calls from imported traces, or model-written scripts. Policy fixes are allowlisted configuration switches.
- **Rule uncertainty:** official competition rules were not published on the public event page as of preparation. See [rules compliance](docs/16-rules-and-compliance.md). Planning before kickoff does not imply permission to submit prebuilt implementation code.

## Definition of done for November 4

A deployed Next.js app loads three realistic coding-agent traces; Muse Spark analyzes at least one live trace and returns structured, reference-validated findings; a candidate regression assertion can be executed against the bundled scenario; a safe fix can be toggled and compared; reports can be exported; tests and a 2–3-minute demo substantiate the claims. See [acceptance criteria](docs/01-product-requirements.md) and [submission](docs/15-demo-and-submission.md).

## Documents — recommended reading order

| File | Purpose |
| --- | --- |
| [AGENTS.md](AGENTS.md) | Rules for Codex and collaborators; safe implementation order |
| [01 Product requirements](docs/01-product-requirements.md) | Goals, personas, acceptance criteria, explicit non-goals |
| [02 System architecture](docs/02-system-architecture.md) | Runtime, module boundaries, diagrams, data flow |
| [03 Data contracts](docs/03-data-contracts.md) | Trace v1, findings, replay plans, verdicts, versioning |
| [04 API contracts](docs/04-api-contracts.md) | HTTP endpoints, examples, errors, limits |
| [05 Meta integration](docs/05-meta-integration.md) | Model, prompts, output validation, fallback, budget |
| [06 Replay design](docs/06-replay-and-fixes.md) | Replay semantics, supported assertions, policy fixes |
| [07 Fixtures](docs/07-scenarios-and-fixtures.md) | Three golden failures, positive controls, seed data |
| [08 UX](docs/08-ux-and-demo-workflow.md) | Screens, states, accessibility, user journey |
| [09 Evaluation](docs/09-evaluation-plan.md) | Gold labels, experiments, metrics, honest evidence |
| [10 Security](docs/10-security-and-privacy.md) | Threat model, untrusted trace handling, abuse controls |
| [11 Development & deployment](docs/11-development-and-deployment.md) | Stack, environment, CI, deploy and recovery |
| [12 Build calendar](docs/12-ten-day-plan.md) | Date-based milestones, critical path, cut decisions |
| [13 Codex task board](docs/13-codex-task-board.md) | Dependency-ordered build tickets and acceptance tests |
| [14 Testing](docs/14-test-matrix.md) | Unit, integration, end-to-end, failure injection |
| [15 Demo & submission](docs/15-demo-and-submission.md) | Judge story, evidence kit, launch checklist |
| [16 Rules & compliance](docs/16-rules-and-compliance.md) | Verified facts vs pending organizer terms |
| [17 Decision log](docs/17-architecture-decisions.md) | Explicit ADRs and revisit conditions |
| [18 Risk register](docs/18-risks-and-contingencies.md) | Risks, triggers, fallback, owners |
| [19 Sources](docs/19-reference-docs.md) | Official documentation and last-checked links |
| [20 Readiness gates](docs/20-preflight-and-open-questions.md) | Day-0 gate and only remaining external decisions |

## Build working agreement

1. **Read** `AGENTS.md`, requirements, architecture, schemas and safety notes before writing code.
2. Implement the **deterministic vertical slice first**; make Meta integration a separate, testable adapter.
3. Every milestone must pass tests and produce an inspectable UI/API outcome.
4. Treat 2026-10-26 organizer rules and participation track as a gate. Check them before starting competition implementation.
5. Record actual benchmark results in the eventual implementation repository; planning files do not claim measured accuracy.

## Source of truth

The GitHub repository **matthiasdruhl/AgentHarness-Planning** contains specifications only. The hackathon application repository should be created separately at kickoff after rules review. Changes to scope/contracts must be made here first, linked by commit SHA, and reflected in implementation tests.
