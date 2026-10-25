# 03 — Versioned data contracts (authoritative)

All boundaries use Zod, strict parsing, stable ids, ISO UTC, size limits and `schemaVersion`. No arbitrary executable fields.

## intent.v1
```json
{"schemaVersion":"intent.v1","id":"intent-team","title":"Team accounts","statement":"Support organizations and member roles","status":"confirmed","priority":"high","horizon":"later","source":{"kind":"user_confirmed","reference":"manual-entry"},"dependencies":["auth"],"revision":1}
```
Status confirmed/tentative/rejected. Source must not falsely claim extracted chats; only authorized content. Only user may confirm.

## scenario.v1
```json
{"schemaVersion":"scenario.v1","id":"teams","origin":"developer_confirmed","intentIds":["intent-team"],"request":"Add organization-scoped permissions","assumptions":["single tenant now"],"acceptanceIds":["team_roles"],"frozen":true}
```
Origins: developer_confirmed, developer_tentative, meta_generated, evaluator_heldout. Model never reads hidden evaluator-heldout requests during architecture selection.

## architecture-candidate.v1
```json
{"schemaVersion":"architecture-candidate.v1","id":"B","label":"Authorization boundary","baselineCommit":"PINNED_SHA","description":"Centralize authz checks","changePlan":[{"module":"src/lib/authz","action":"introduce_boundary"}],"constraints":[{"kind":"forbid_import","from":"src/app/**","to":"src/server/db/**"}],"estimatedUpfrontCost":2,"estimatedCostUnit":"ordinal_points","metaProvenance":"live"}
```
No free-form shell/code instructions; `changePlan` is advisory until human-reviewed or safely mapped to allowlisted structured operations.

## graph.v1 / decision.v1
`graph.v1 = {schemaVersion,repoCommit,modules:[{id,path,kind}],edges:[{from,to,kind}],unknowns:string[]}`.
`decision.v1 = {schemaVersion,scenarioIds,candidateIds,scoringVersion,assumptions,perScenario:[{candidateId,scenarioId,estimatedImpact:number,estimatedUpfront:number,estimatedRegret:number}],recommendationId:null|string,limitations:string[]}`. Scores are **heuristics**, never measured tokens or hours. For regret, compare candidates using the *same* cost units and scenarios.

## check-result.v1 / verification.v1
`check-result.v1 = {id,kind:"typecheck"|"build"|"acceptance"|"regression"|"boundary"|"integration",status:"pass"|"fail"|"not_run"|"invalid",exitCode:number|null,evidencePath:string|null,scope:string}`.
`verification.v1 = {schemaVersion,runId,verdict:"VERIFIED"|"REJECTED"|"INSUFFICIENT_EVIDENCE",requiredCheckIds:string[],checks:CheckResult[],limitations:string[]}`. VERIFIED only means required specified controls passed; failed required check REJECTED; absent/invalid check INSUFFICIENT_EVIDENCE.

## experiment-run.v1 / certificate.v1
`experiment-run.v1 = {schemaVersion,id,variant:"A"|"B",repoCommit,fixtureHash,agentConfigHash,evaluatorHash,isolationAttestation,seed,startedAt,endedAt,verification,metrics:{elapsedMs,tokens:null|number,costUsd:null|number,iterations:null|number,filesTouched:null|number},provenance:"measured"|"recorded"}`.
`certificate.v1 = {schemaVersion,id,intents,scenarioIds,decision,runIds,conclusion,limitations,generatedAt,provenance}`. Report never confuses estimated, recorded or measured values. Hash canonical JSON and immutable output files. Hidden test payloads stay in trusted evaluator; public report includes only test IDs/statuses.

## General invariant
Reject unexpected operations, refs and path escapes; 64-KiB default JSON request and bounded arrays. Redact secrets. Version changes require contract migrations and tests.
