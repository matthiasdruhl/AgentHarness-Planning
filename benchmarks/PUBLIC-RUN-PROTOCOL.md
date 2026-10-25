# External benchmark execution protocol — operational specification

## Integration stages
E0 inspect: pin upstream repositories and dataset revisions; license and data handling review; confirm task language/runtime, secrets, resource and model compatibility.
E1 offline smoke: load a fixed public JS task checkpoint, parse instruction/checkpoint metadata and run *test runner only* in verified sandbox; source tests remain unchanged.
E2 baseline: coding agent continues sequential checkpoints, no Foresight; same Verify evaluator as treatment, fixed feedback policy; record all checkpoints.
E3 treatment: reset to same initial state; identical agent/budget/checks; supply Forecode-generated architecture recommendation **only from currently visible inputs**; record upfront design/refactor work.
E4 analysis: compare paired per-checkpoint success, retention of earlier behavior, cost/time and invalid trials. Negative outcomes included.
E5 optional: repeat with new pinned tasks/seeds, plus template AGENTS.md arm.

## Adapter boundary
Proposed `scripts/benchmarks/scbench-adapter/` CLI (in app repo only): read upstream task metadata; materialize checkpoint workspace; pass allowed instruction; invoke vetted coding agent; persist run manifest; ask independent evaluator to run unmodified checkpoint tests. No `/api/benchmark-run` public HTTP route. Externally downloaded Bash test scripts are **executable untrusted code**: review source and execute only in sandbox that passes isolation attestation, never on host by default.

## Provenance manifest fields
`benchmarkId, upstreamUrl, revisionSha, datasetRevision, taskIds, chosenAt, selectionRationale, checkpointSequence, language, runnerMode, adaptationNotes, testHashes, model, agentConfigHash, toolAllowlistHash, timeout, tokenLimit, seed, verifierHash, sandboxAttestation, runIds, startedAt, resultStatus`.
Hash all local transformed assets; license and citation tracked independently. Model-reported 'done' cannot override grader.

## Fairness and leakage
- Agent sees checkpoint i instructions only when entering i; can see previous checkpoints already completed. Architecture proposer cannot see checkpoint i+1 or beyond.
- Same initial workspace for each condition; treatment must not have exclusive source access or extra budget. Proposer inference and architecture refactor cost counted.
- If benchmark requires continuous state across checkpoints, do not reset between checkpoints within a condition. Reset only between experiment arms and repeat seeds.
- Validation tests run by trusted evaluator from a pristine snapshot with agent patch applied. Agent cannot rewrite verifier, its test scripts or grade artifacts.
- If official benchmark framework cannot support treatment A/B without patching its protocol, disclose modifications and avoid claiming official leaderboard comparability.

## Outcome JSON (planned)
```json
{"schemaVersion":"external-paired-eval.v1","benchmark":"scbench","upstreamRevision":"TO_PIN","tasks":[],"arms":[{"id":"baseline","runIds":[]},{"id":"forecode","runIds":[]}],"pairedResults":[],"scoringVersion":"draft-1","limitations":["No runs yet"]}
```
This is an **evaluation report schema proposal**, not a replacement for docs/03 authoritative product contracts. Promote to docs/03 and Zod when implemented.

## Stop conditions
Any license restriction, isolation failure, hidden test leakage, unsupported runner requirements, excessive cost or non-reproducible oracle aborts external run. Preserve transparent no-result report rather than fake superiority.
