# 20 — Preflight and external blockers

Owner environment (reported): MacBook Pro M4 Pro, 48 GB RAM, ~294 GB free of 494 GB. Local Codex preferred. Read [Local Mac sandbox plan](LOCAL-MAC-SANDBOX.md).

- [ ] Official event rules/prebuilt-code permission rechecked and recorded.
- [ ] Meta model API, actual model/credits/spend cap verified.
- [ ] Node, Python **3.12+**, uv, Docker daemon, Codex CLI checked on owner's Mac.
- [ ] Docker Desktop ARM64 image smoke and reasonable limits set (start VM RAM 16 GB, 6 CPUs, disk cap 80 GB).
- [ ] Vetted developer-local sandbox isolation evidenced (non-root, no host secrets/docker socket, bounded execution).
- [ ] Controller inference networking separated from untrusted test code; local auth never mounted into untrusted task workspace.
- [ ] **SCBench Codex adapter bypass/credential mount reviewed, hardened or rejected**, not used stock blindly.
- [ ] Public benchmark JS task selection and upstream dataset availability verified; smoke run graded.
- [ ] Hidden booking oracle is truly out of agent-readable scope, frozen and hashed privately.
- [ ] A/B settings identical, Verify same, provenance/report format recorded.

Hard stop: absent sandbox or credential-safe agent control means no live benchmark agent execution. Safe fallback is local deterministic testing/recorded demonstration without measured advantage claims.
