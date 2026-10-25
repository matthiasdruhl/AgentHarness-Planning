# 25 — Reproducibility manifest

Every experiment artifact must record: repo SHA and fixture hash; scenario ID/origin; independent acceptance evaluator hash; agent model/config; run seed; explicit architecture diff; initial requirements tests; same Verify policy and retry cap; available token accounting; elapsed time; sandbox isolation attestation; exact test commands; result exit codes; report timestamp and files touched.

Hash frozen unseen scenarios before architectural selection, restrict access until final evaluation. Save raw per-run outcomes incl failures. Do not claim reruns unless actually rerun. Human reviewer should reproduce locally with explicit safe fixtures and environment setup.

Preferred report layout: `reports/<experiment-id>/manifest.json`, `runs/A.json`, `runs/B.json`, `checks/*.json`, `certificate.json`; public sanitized excerpts omit hidden test source and keys.
