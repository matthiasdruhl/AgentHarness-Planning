# 17 — Architecture decision records (ADR register)

Decisions apply **only to the Meta hackathon MVP**. Changes require a new entry with date, alternatives, rationale, risks and a testable revisit condition.

## ADR-001 — Coding-agent trace auditing over general agent platform
**Decision:** narrow to coding agents and contradiction/guard verification. Alternatives: general-purpose observability dashboard, AI security scanning suite. **Why:** concrete test outputs and tool calls make grounded evidence and a judge-friendly demo feasible in 10 days. **Tradeoff:** narrower compatibility. Revisit only if primary hero loop complete before freeze.

## ADR-002 — One Next.js TypeScript deployable
**Decision:** Next App Router/Node route handlers + pure TS engine, Vercel. Alternatives: FastAPI + Next frontend, microservices. **Why:** one schema/test/runtime/deployment path. **Tradeoff:** fewer specialized Python tools. Revisit if a required test integration cannot reasonably be implemented in TS and scope/effort permit.

## ADR-003 — Stateless sessions, fixture-backed scenario runner
**Decision:** browser memory and bundled synthetic fixtures; no database. Alternatives: Postgres, Redis, user accounts. **Why:** low setup/cost/privacy burden. **Tradeoff:** data disappears on refresh; no run history. Revisit only if submission explicitly requires saved collaborative reports.

## ADR-004 — Model analysis + deterministic judgment
**Decision:** Meta Muse Spark structured analysis recommends evidence references, DSL checks and safe policies; deterministic validators assign verified outcomes. Alternatives: LLM-as-only-judge, rule-only auditor. **Why:** exploits Meta reasoning while keeping reproducibility and error calibration. **Tradeoff:** model may generate unsupported suggestions. Revisit after measured evaluation, not aesthetics.

## ADR-005 — No arbitrary external agent replay
**Decision:** only bundled synthetic reference scenarios replayed. Arbitrary imported traces analyzed read-only. Alternatives: executing model-generated code or installing unknown agent runners. **Why:** safe, implementable and genuinely reproducible within deadline. **Tradeoff:** cannot reproduce real third-party runtimes. Revisit only after event and new safety review (explicitly out of scope now).

## ADR-006 — Allowlisted policy fix, not automatic code editing
**Decision:** policies `require_passing_tests`, `require_evidence`, `block_prohibited_tools` toggle guarded simulated behaviors; no patch command. Alternatives: agent-written PR/patch. **Why:** a measurable safety improvement without sandbox complexity; avoids misleading auto-fix. **Tradeoff:** demonstrates guard mitigation, not source bug repair. Revisit only if safe executable sandbox and scope approval materialize; not a hackathon goal.

## ADR-007 — Muse Spark 1.3 primary provider
**Decision:** single Meta provider adapter, strict JSON schema, server-only SDK and key. Alternative: multi-model inference orchestrator, Muse Wonder mandatory. **Why:** best fit to required technology with bounded cost and API compatibility. **Tradeoff:** model dependence and API variability. Revisit only on provider outage or verified superior model with equivalent schema/cost evidence.

## ADR-008 — No live inference on every page load
**Decision:** deterministic fixture/rules render instantly; Meta called only on explicit click. Alternative: background auto-analysis. **Why:** credit protection, user consent for uploaded data, demo reliability. **Tradeoff:** extra interaction. Revisit if recorded user tests show meaningful usability loss.

## ADR-009 — Evidence-first, no invented confidence metrics
**Decision:** every model claim references actual event IDs and is labeled candidate; report preserves measured verification separately. Alternative: single opaque reliability percentage. **Why:** trust and falsifiability. **Tradeoff:** more nuanced UX. Never relax without replacing with equally rigorous proof.

## ADR-010 — Planning and implementation separate
**Decision:** this repository holds docs; app begins separately after official rules check. Alternative: mixing architecture and source now. **Why:** clean compliance boundary and low agent context. **Tradeoff:** extra cross-repo links. Revisit only if organizer specifically requires unified repo or owner requests.
