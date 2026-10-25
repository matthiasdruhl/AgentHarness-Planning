// Structural JSON Schema validation happens first. This is the planning-time
// cross-record checker, not production evaluator authentication.
const eq=(a,b,m)=>{if(a!==b)throw Error(m)};
const uniq=(a,m)=>{if(new Set(a).size!==a.length)throw Error("Duplicate "+m)};
const weight={introduce_boundary:3,extract_module:2,move_module:2,add_interface:2,leave_unchanged:0};
export function checkBundle(b) {
 const i=new Map(b.intents.map(x=>[x.id,x])),g=b.graph,cs=b.candidates,ss=b.scenarios,d=b.decision;
 uniq(b.intents.map(x=>x.id),"intents");
 for(const x of b.intents)if(x.status==="confirmed"&&x.source.kind!=="user_confirmed")throw Error("unconfirmed source");
 uniq(g.modules.map(x=>x.id),"module IDs");uniq(g.modules.map(x=>x.path),"module paths");
 const mids=new Set(g.modules.map(x=>x.id)),paths=new Set(g.modules.map(x=>x.path));
 for(const e of g.edges)if(!mids.has(e.from)||!mids.has(e.to))throw Error("dangling edge");
 uniq(ss.map(x=>x.id),"scenarios");const smap=new Map(ss.map(x=>[x.id,x]));
 for(const s of ss){eq(s.baselineCommit,g.repoCommit,"baseline scenario");uniq(s.intentIds,"scenario intents");for(const id of s.intentIds)if(i.get(id)?.status!=="confirmed")throw Error("dangling intent")}
 uniq(cs.map(x=>x.id),"candidates");const cmap=new Map(cs.map(x=>[x.id,x]));
 for(const c of cs){eq(c.baselineCommit,g.repoCommit,"baseline candidate");uniq(c.changePlan.map(x=>x.module+"/"+x.action),"change ops");eq(c.estimatedUpfrontCost,c.changePlan.reduce((n,x)=>n+weight[x.action],0),"upfront weights")}
 if(!cmap.has("A")||!cmap.has("B")||cmap.get("A").changePlan.length||cmap.get("A").estimatedUpfrontCost!==0)throw Error("need no-change A and B");
 eq(d.graphId,g.id,"decision graph");eq(d.baselineCommit,g.repoCommit,"decision baseline");
 uniq(d.candidateIds,"decision candidate IDs");uniq(d.scenarioIds,"decision scenario IDs");
 if(d.candidateIds.length!==cs.length||d.scenarioIds.length!==ss.length)throw Error("incomplete decision IDs");
 for(const x of d.candidateIds)if(!cmap.has(x))throw Error("decision candidate reference");
 for(const x of d.scenarioIds)if(!smap.has(x))throw Error("decision scenario reference");
 const cells=[];
 for(const x of d.perScenario){
  const c=cmap.get(x.candidateId);if(!c||!smap.has(x.scenarioId))throw Error("score reference");
  uniq(x.basis.projectedChangedModules,"projected modules");
  const planned=new Set(c.changePlan.map(p=>p.module));
  for(const p of x.basis.projectedChangedModules)if(!paths.has(p)&&!planned.has(p))throw Error("invented projected module");
  eq(x.upfrontCost,c.estimatedUpfrontCost,"score upfront");
  eq(x.downstreamCost,2*x.basis.projectedChangedModules.length+x.basis.projectedRouteChanges+2*x.basis.unresolvedRelevantDependencies,"downstream rubric");
  eq(x.totalCost,x.upfrontCost+x.downstreamCost,"total rubric");cells.push(x.candidateId+"/"+x.scenarioId);
 }
 uniq(cells,"score cells");if(cells.length!==cs.length*ss.length)throw Error("incomplete matrix");
 const worst=new Map(cs.map(c=>[c.id,0]));
 for(const s of ss){const scores=d.perScenario.filter(x=>x.scenarioId===s.id);if(scores.length!==cs.length)throw Error("missing scenario scores");const min=Math.min(...scores.map(x=>x.totalCost));for(const x of scores){eq(x.regret,x.totalCost-min,"regret");worst.set(x.candidateId,Math.max(worst.get(x.candidateId),x.regret))}}
 const chosen=[...cs].sort((a,b)=>worst.get(a.id)-worst.get(b.id)||a.estimatedUpfrontCost-b.estimatedUpfrontCost||a.id.localeCompare(b.id))[0].id;
 eq(d.recommendationId,chosen,"minimax choice");
 const run=b.run,receipt=b.receipt,vr=b.verification,cert=b.certificate;
 uniq(b.checks.map(x=>x.id),"check IDs");
 for(const x of b.checks){eq(x.runId,run.id,"check run");if(x.status==="pass"&&(x.exitCode!==0||!x.artifactSha256))throw Error("forged pass");if(x.status==="fail"&&(!(x.exitCode>0)||!x.artifactSha256))throw Error("bad fail");if(x.status==="not_run"&&x.exitCode!==null)throw Error("bad no-run")}
 eq(receipt.runId,run.id,"receipt run");eq(receipt.evaluatedTreeSha256,run.evaluatedTreeSha256,"receipt tree");eq(receipt.fixtureSha256,run.fixtureSha256,"fixture");eq(receipt.evaluatorSha256,run.evaluatorSha256,"evaluator");eq(receipt.requiredPolicySha256,run.requiredPolicySha256,"policy");
 if(new Date(receipt.finishedAt)<new Date(receipt.startedAt))throw Error("receipt time order");
 eq(vr.runId,run.id,"verification run");eq(vr.receiptId,receipt.id,"verification receipt");eq(run.receiptId,receipt.id,"run receipt");eq(run.verificationId,vr.id,"run verification");
 if(vr.origin==="untrusted_preview"&&vr.verdict!=="INSUFFICIENT_EVIDENCE")throw Error("untrusted preview verdict");
 uniq(vr.requiredCheckIds,"required IDs");eq(vr.requiredCheckIds.join("|"),receipt.requiredCheckIds.join("|"),"receipt policy checks");
 const index=new Map(b.checks.map(x=>[x.id,x]));const required=vr.requiredCheckIds.map(x=>index.get(x));
 const verdict=required.some(x=>x?.status==="fail")?"REJECTED":required.every(x=>x?.status==="pass")?"VERIFIED":"INSUFFICIENT_EVIDENCE";
 eq(vr.verdict,verdict,"incorrect verdict");
 eq(cert.baselineCommit,g.repoCommit,"certificate baseline");if(!cert.experimentRunIds.includes(run.id)||!cert.verificationIds.includes(vr.id)||!cert.receiptIds.includes(receipt.id))throw Error("certificate missing linkage");
 for(const x of cert.intentRevisions)if(i.get(x.intentId)?.revision!==x.revision)throw Error("stale intent revision");
 eq(b.pair.arms.map(x=>x.variant).join(","),"A,B","pair arms");eq(b.pair.fixtureSha256,run.fixtureSha256,"pair fixture");eq(b.pair.evaluatorSha256,run.evaluatorSha256,"pair evaluator");eq(b.pair.requiredPolicySha256,run.requiredPolicySha256,"pair policy");
 if(b.metaComparison.metaCandidateId===b.metaComparison.templateCandidateId)throw Error("Meta comparator identical");
 if(!cmap.has(b.metaComparison.metaCandidateId)||!cmap.has(b.metaComparison.templateCandidateId))throw Error("unknown Meta candidate");
 return true;
}
