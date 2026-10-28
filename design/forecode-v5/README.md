# ForeCode v5 — Tournament-led frontend reference

This folder contains a **fictional interactive design prototype**, not an app, Meta inference, actual agent run or verifier evidence.

## Explore

- [Interactive HTML prototype](prototype.html): from GitHub select **Raw**, save the file as HTML, then open it locally in a browser.
- [Prior v4.4 design](../forecode-v4.4/README.md): preserved as an earlier design reference.

The prototype has a landing page plus four connected workbench views: **Architecture Lab**, **Architecture Tournament** (A/B and optional C), **Architecture Time Machine** (before/prepared/after), and **Evidence Laboratory**. Its default tournament state says NOT RUN. The optional sample states are unmistakably fictional.

Design only: do not transplant this pre-existing planning code into the hackathon submission. Reimplement chosen concepts as newly authored work in the eligible ForeCode repository, preserving the trust boundaries in the [tournament protocol](../../docs/ARCHITECTURE-TOURNAMENT-PROTOCOL.md) and [Meta Scientist protocol](../../docs/META-ARCHITECTURE-SCIENTIST.md). Keep the hosted frontend read-only for evaluator/agent artifacts; verified results must come from independent trusted receipts, not the UI.

**Browser validation (Oct 28, 2026):** Chromium Playwright smoke tests passed **6/6 checks** on the complete reference prototype. Coverage: desktop landing/tournament entry; A/B/C timeline selection and fictional sample-state labeling; all nine Time Machine arm × stage combinations; three certificate states; keyboard shortcuts and command menu; mobile portrait (390×844) viewport overflow and horizontally scrollable Time Machine graph with reduced motion. The workflow captured eight desktop/mobile screenshots and reported no JavaScript page errors. [Passing browser run](https://github.com/matthiasdruhl/AgentHarness-Planning/actions/runs/40747082553). This is not a full cross-browser, WCAG, screen-reader, live-Meta, or production integration audit.
