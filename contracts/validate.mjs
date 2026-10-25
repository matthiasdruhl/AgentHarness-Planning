// Contract freeze v1: run with npm --prefix contracts install && npm --prefix contracts test.
// AJV validates structural JSON Schema; semantic assertions below enforce cross-record rules.
// This is a planning-repo tool, NOT an authorization boundary for production.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import Ajv2020 from "ajv/dist/2020.js";
import addFormats from "ajv-formats";
const dir=path.dirname(fileURLToPath(import.meta.url));
const read=p=>JSON.parse(fs.readFileSync(path.join(dir,p),"utf8"));
const schema=read("schemas/forecode-v1.schema.json");
const examples=read("examples/valid-records.json");
const invalid=read("examples/invalid-records.json");
const registry=read("api-registry.json");
const ajv=new Ajv2020({strict:true,allErrors:true,validateFormats:true});
addFormats(ajv);
ajv.addSchema(schema);
const get=t=>ajv.getSchema(schema.$id+"#/$defs/"+t) ?? ajv.compile({$ref:schema.$id+"#/$defs/"+t});
let checked=0;
for(const [type,record] of Object.entries(examples)){
  if(!schema.$defs[type])throw Error("Unknown example type: "+type);
  const valid=get(type);if(!valid(record))throw Error("Invalid "+type+": "+JSON.stringify(valid.errors));
  checked++;
}
for(const item of invalid.cases){
  const copy=structuredClone(examples[item.type]);if(!copy)throw Error("Missing example "+item.type);
  const parts=item.mutation.split(".");let obj=copy;for(const part of parts.slice(0,-1))obj=obj[part];obj[parts.at(-1)]=item.value;
  const fn=get(item.type);if(fn(copy))throw Error("Negative fixture unexpectedly passed: "+item.type+" "+item.mutation);
  checked++;
}
for(const e of registry.endpoints){
  if(e.request&&!schema.$defs[e.request])throw Error("Missing request "+e.request);
  if(!schema.$defs[e.response])throw Error("Missing response "+e.response);
}
if(!schema.$defs[registry.errors])throw Error("Missing API error schema");
const decision=examples.DecisionV1;
const candidates=new Set(decision.candidateIds);
const scenarios=new Set(decision.scenarioIds);
const seen=new Set();
for(const score of decision.perScenario){
  if(!candidates.has(score.candidateId)||!scenarios.has(score.scenarioId))throw Error("Unknown score reference");
  if(score.upfrontCost+score.downstreamCost!==score.totalCost)throw Error("Bad total");
  const key=score.candidateId+"/"+score.scenarioId;if(seen.has(key))throw Error("Duplicate score");seen.add(key);
}
for(const s of scenarios){const values=decision.perScenario.filter(x=>x.scenarioId===s);const min=Math.min(...values.map(x=>x.totalCost));for(const x of values)if(x.regret!==x.totalCost-min)throw Error("Incorrect regret")}
if(seen.size!==candidates.size*scenarios.size)throw Error("Incomplete candidate × scenario matrix");
const pair=examples.PairManifestV1;if(pair.arms.map(x=>x.variant).sort().join(",")!=="A,B")throw Error("Pair must have exactly A and B");
if(examples.VerificationV1.runId!==examples.EvaluatorReceiptV1.runId)throw Error("Receipt run mismatch");
if(examples.VerificationV1.receiptId!==examples.EvaluatorReceiptV1.id)throw Error("Missing receipt link");
if(examples.ExperimentRunV1.receiptId!==examples.EvaluatorReceiptV1.id)throw Error("Run receipt mismatch");
if(examples.CertificateV1.receiptIds[0]!==examples.EvaluatorReceiptV1.id)throw Error("Certificate receipt mismatch");
const apiExamples=read("examples/api-valid.json"),apiInvalid=read("examples/api-invalid.json");
for(const e of registry.endpoints){
 if(e.request&&!apiExamples[e.request])throw Error("Missing API request example "+e.request);
 if(!apiExamples[e.response])throw Error("Missing API response example "+e.response);
}
for(const [type,record] of Object.entries(apiExamples)){
 const fn=get(type);if(!fn(record))throw Error("Invalid API example "+type+": "+JSON.stringify(fn.errors));checked++;
}
for(const item of apiInvalid.cases){
 const record=JSON.parse(JSON.stringify(apiExamples[item.type]));
 const bits=item.mutation.split(".");let x=record;for(const b of bits.slice(0,-1))x=x[b];x[bits.at(-1)]=item.value;
 const fn=get(item.type);if(fn(record))throw Error("Invalid API fixture erroneously passes: "+item.id);
 checked++;
}
const bundle=read("examples/valid-bundle.json");
const {checkBundle}=await import("./semantics.mjs");
checkBundle(bundle);
const abstained=read("examples/abstain-bundle.json");
if(!get("DecisionV1")(abstained.decision))throw Error("Invalid abstained decision schema");
checkBundle(abstained);
const incomplete=JSON.parse(JSON.stringify(abstained));incomplete.decision.perScenario=[bundle.decision.perScenario[0]];
let partialRejected=false;try{checkBundle(incomplete)}catch{partialRejected=true}
if(!partialRejected)throw Error("Partially filled matrix must fail");
const falseRecommendation=JSON.parse(JSON.stringify(abstained));falseRecommendation.decision.recommendationId="A";
let recommendationRejected=false;try{checkBundle(falseRecommendation)}catch{recommendationRejected=true}
if(!recommendationRejected)throw Error("Unscored decision must abstain");
checked+=3;
for(const item of read("examples/semantic-negative-cases.json").cases){
 const copy=JSON.parse(JSON.stringify(bundle)),parts=item.path.split(".");
 let cursor=copy;for(const key of parts.slice(0,-1))cursor=cursor[key];
 cursor[parts.at(-1)]=item.value;
 let failed=false;try{checkBundle(copy)}catch{failed=true}
 if(!failed)throw Error("Semantic negative unexpectedly passed: "+item.id);
 checked++;
}
const {canonicalize,sha256Text,sha256Jcs,checksDigest,receiptDigest,certificateDigest}=await import("./hash.mjs");
const equal=(a,b,msg)=>{if(a!==b)throw Error("Hash/JCS mismatch: "+msg)};
equal(sha256Text("abc"),"ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad","SHA-256 test vector");
equal(canonicalize({b:2,a:1}),canonicalize({a:1,b:2}),"object key order");
equal(sha256Jcs({b:2,a:1}),sha256Jcs({a:1,b:2}),"stable JCS hash");
let rejectsLone=false;try{canonicalize(String.fromCharCode(0xD800))}catch{rejectsLone=true}if(!rejectsLone)throw Error("JCS must reject lone surrogate");
const c=JSON.parse(JSON.stringify(bundle));
c.receipt.checkArtifactSha256=checksDigest(c.checks);
c.receipt.integrity.manifestSha256=receiptDigest(c.receipt);
c.certificate.artifactSha256=certificateDigest(c.certificate);
equal(c.receipt.integrity.manifestSha256,receiptDigest(c.receipt),"receipt self-digest");
equal(c.certificate.artifactSha256,certificateDigest(c.certificate),"certificate self-digest");
const wrong=JSON.parse(JSON.stringify(c));wrong.receipt.evaluatedTreeSha256="f".repeat(64);
if(wrong.receipt.integrity.manifestSha256===receiptDigest(wrong.receipt))throw Error("Tampered receipt was not detected");
wrong.certificate.conclusion="tampered";
if(wrong.certificate.artifactSha256===certificateDigest(wrong.certificate))throw Error("Tampered certificate was not detected");
console.log("Forecode contract schemas + semantics + canonical hashes PASS ("+checked+" fixtures).");
