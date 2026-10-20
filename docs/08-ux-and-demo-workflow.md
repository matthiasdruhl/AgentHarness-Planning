# 08 — UX specification and judge-friendly interaction

## Experience target
A visitor understands failure, evidence and improvement in 90 seconds without reading docs. Mobile works sufficiently to navigate, but optimize a 1440px desktop judge view and 1080p screen recording. UI is developer-oriented, calm and precise; color alone never conveys pass/fail.

## Screens / regions
**Landing/sample picker:** one-line promise; three scenario cards; 'Import trace JSON' drop zone; clearly labeled capabilities ('analyze imported traces', 'replay bundled scenarios'). Give 1-click hero sample.

**Audit workspace:** left trace timeline with numbered events, tool badges, exit codes and UTC times. Center panel finding summary with explicit 'Observed evidence' / 'Muse hypothesis'. Right evidence drawer highlights referenced event IDs and exact raw excerpts; jump-to-event anchors.

**Regression lab:** displays candidate assertion in human-readable English plus optional JSON view. 'Run baseline' gives engine outcome. 'Apply suggested guard' is a **policy switch** after an explanation, not a code patch. 'Verify' shows baseline vs after in two columns, linked to same assertion and stable fixture hash. Always display continued failing test if relevant.

**Report:** conclusion headline: 'False completion prevented by guard' rather than 'bug fixed'; findings/evidence; test results; model provenance; labels for live vs recorded; limits; 'Export JSON'.

## Key states and text
| State | Label / action |
|---|---|
| Never analyzed | 'Analyze with Muse' |
| API not configured | 'Live analysis unavailable; review recorded sample (recorded)' |
| Analysis running | 'Muse is analyzing trace evidence…' and cancel/timeout behavior |
| Model candidate unsupported | 'Suggested assertion is not executable in this prototype' |
| Invalid model evidence | 'Unverified finding: evidence reference missing' or hide as diagnostic warning |
| Arbitrary uploaded trace | 'Analysis-only: replay requires a supported agent adapter' |
| Baseline fails | 'Regression FAIL — completion occurred after failed tests' |
| After guard passes | 'Policy PASS — unsupported success prevented; tests still failing' |
| Provider error | 'Live analysis failed; trace and deterministic checks remain available' |

## Navigation and components
App header; scenario selector; four numbered stage tabs (`Inspect`, `Diagnose`, `Replay`, `Export`) with completion indicators; URL query can select bundled sample by ID only. No sign-in, chat sidebar or administrative panels. Page is fully keyboard operable; tab order follows steps; drawers trap focus; tooltips have accessible labels. Support copy event ID and copy report summary.

## Visual priority
1. Tool result exit 1 (what actually happened).
2. Agent false claim (what went wrong).
3. Muse evidence-linked explanation (interpretation).
4. Executable test and policy guard (verification).
5. Provenance and caveats (trust).

Never animate away crucial failure details. Contrast verified engine verdict and model confidence stylistically and textually; avoid giving model confidence a numeric probability.

## Interaction acceptance
- Selected scenario survives navigation within the page, no backend persistence.
- Every finding evidence ID scrolls to a real corresponding event; zero orphan links.
- Buttons disabled only with explanatory reason, and no fake loading state.
- Fixture live/recorded badges reflect actual method; cannot be overridden by user-provided source field.
- One end-to-end Playwright test completes hero flow with mocked Meta response.
- Screen recording at 1080p shows legible text and 2–3-minute full narrative.
