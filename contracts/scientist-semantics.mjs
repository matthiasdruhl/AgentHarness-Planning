// Planning-time *semantic* contract validation; not credential or receipt attestation.
const unique=(items,label)=>{if(new Set(items).size!==items.length)throw Error("Duplicate "+label)};
const same=(a,b,label)=>{if(a!==b)throw Error("Mismatch: "+label)};
const providerKey=p=>JSON.stringify(p);
export function checkScientistBundle(b){
 const g=b.graph,byIntent=new Map(b.intents.map(x=>[x.id,x]));
 const candidates=new Map(b.candidates.map(x=>[x.id,x]));
 const scenarios=new Map(b.visibleScenarios.map(x=>[x.id,x]));
 const hypotheses=new Map(b.hypotheses.map(x=>[x.id,x]));
 const summaries=new Map(b.evidenceSummaries.map(x=>[x.id,x]));
 unique(b.intents.map(x=>x.id),"intents");unique(b.candidates.map(x=>x.id),"candidates");
 unique(b.visibleScenarios.map(x=>x.id),"visible scenarios");
 unique(b.hypotheses.map(x=>x.id),"hypotheses");
 unique(b.challenges.map(x=>x.id),"challenges");
 unique(b.evidenceSummaries.map(x=>x.id),"evidence summaries");
 unique(b.interpretations.map(x=>x.id),"interpretations");
 for(const s of b.visibleScenarios){
  same(s.baselineCommit,g.repoCommit,"scenario baseline");
  if(s.origin==="evaluator_heldout")throw Error("Heldout passed to Meta");
 }
 for(const candidate of b.candidates)same(candidate.baselineCommit,g.repoCommit,"candidate baseline");
 for(const h of b.hypotheses){
  if(!candidates.has(h.candidateId))throw Error("Hypothesis candidate unknown");
  same(h.baselineCommit,g.repoCommit,"hypothesis baseline");
  unique(h.intentIds,"hypothesis intents");unique(h.visibleScenarioIds,"visible scenarios in hypothesis");
  for(const id of h.intentIds)if(byIntent.get(id)?.status!=="confirmed"||byIntent.get(id).source.kind!=="user_confirmed")throw Error("Hypothesis depends on unconfirmed intent");
  for(const id of h.visibleScenarioIds)if(!scenarios.has(id))throw Error("Unapproved visible scenario");
  same(providerKey(h.provider),providerKey(b.provider),"hypothesis provider provenance");
 }
 for(const x of b.challenges){
  const h=hypotheses.get(x.hypothesisId);
  if(!h)throw Error("Dangling challenge hypothesis");
  same(x.targetCandidateId,h.candidateId,"challenge candidate mismatch");
  same(x.baselineCommit,h.baselineCommit,"challenge baseline mismatch");
  if(x.reviewStatus!=="proposed"||x.visibility!=="model_generated_not_heldout")throw Error("Generated challenge cannot be a hidden/approved task");
  unique(x.change.intentIds,"challenge intents");
  for(const id of x.change.intentIds)if(byIntent.get(id)?.status!=="confirmed")throw Error("Challenge unconfirmed intent");
  same(providerKey(x.provider),providerKey(b.provider),"challenge provider provenance");
 }
 for(const s of b.evidenceSummaries){
  if(!hypotheses.has(s.hypothesisId))throw Error("Evidence points to unknown hypothesis");
  same(s.baselineCommit,g.repoCommit,"evidence baseline");
  if(s.source!=="trusted_sanitized_recording")throw Error("Untrusted summary type");
  unique(s.runIds,"runIds");unique(s.receiptIds,"receiptIds");
  unique(s.observedChecks.map(x=>x.runId+"/"+x.checkId),"observed checks");
  for(const c of s.observedChecks)if(!s.runIds.includes(c.runId))throw Error("Observed run not in summary");
 }
 for(const x of b.interpretations){
  const h=hypotheses.get(x.hypothesisId),e=summaries.get(x.evidenceSummaryId);
  if(!h||!e)throw Error("Interpretation dangling reference");
  same(e.hypothesisId,h.id,"Interpretation changes hypothesis");
  if(x.authority!=="model_interpretation_only")throw Error("Model attempting authoritative verdict");
  same(providerKey(x.provider),providerKey(b.provider),"interpret provider provenance");
 }
 return true;
}
