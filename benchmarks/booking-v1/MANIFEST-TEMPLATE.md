# Benchmark manifest (blank and non-executable)

**Do not fill fields with invented SHAs, timings or test results.** Create a machine-readable JSON equivalent after implementation and write completed manifests to isolated experiment output, not the planning repo.

```yaml
schemaVersion: booking-experiment-manifest.v1
benchmarkId: booking-v1
preparedAt: null
rulesEligibilitySignedOffAt: null
fixtureCommit: null
fixtureHash: null
testEvaluatorCommit: null
testEvaluatorHash: null
holdout:
  opaqueId: null
  commitmentSha256: null
  freezeTime: null
  custody: outside_agent_and_model_context
candidateACommit: null
candidateBCommit: null
BUpfrontMetrics: null
agent:
  model: null
  configHash: null
  toolAllowlistHash: null
sandbox:
  isolationAttestation: null
  networkDisabled: null
  hostSecretsAbsent: null
budgets:
  maxSeconds: null
  maxIterations: null
  tokenLimit: null
  spendUsd: null
trials:
  - scenarioId: S1
    armA: null
    armB: null
  - scenarioId: S2
    armA: null
    armB: null
  - scenarioId: S3
    armA: null
    armB: null
limitations: []
```

Publish final sanitized report without disclosing private test code or sensitive provider metadata.
