// RFC 8785-compatible canonical JSON for the constrained Forecode JSON artifact domain.
// Explicitly reject unsupported scalar values; hashes are NOT authentication by themselves.
import {createHash} from "node:crypto";
function quote(s) {
 if(typeof s!=="string")throw Error("Expected a JSON string");
 for(let i=0;i<s.length;i++){
  const c=s.charCodeAt(i);
  if(c>=0xD800&&c<=0xDBFF){const next=s.charCodeAt(++i);if(!(next>=0xDC00&&next<=0xDFFF))throw Error("Unpaired high surrogate")}
  else if(c>=0xDC00&&c<=0xDFFF)throw Error("Unpaired low surrogate");
 }
 return JSON.stringify(s);
}
export function canonicalize(v){
 if(v===null)return "null";
 if(typeof v==="string")return quote(v);
 if(typeof v==="boolean")return v?"true":"false";
 if(typeof v==="number"){if(!Number.isFinite(v)||!Number.isSafeInteger(v)&&Number.isInteger(v))throw Error("Invalid numeric JSON scalar");return JSON.stringify(v)}
 if(Array.isArray(v))return "["+v.map(canonicalize).join(",")+"]";
 if(typeof v==="object"&&Object.getPrototypeOf(v)===Object.prototype){
  return "{"+Object.keys(v).sort().map(k=>quote(k)+":"+canonicalize(v[k])).join(",")+"}";
 }
 throw Error("Unserializable JSON value");
}
export const sha256Text=text=>createHash("sha256").update(text,"utf8").digest("hex");
export const sha256Jcs=value=>sha256Text(canonicalize(value));
export function checksDigest(checks){
 const sorted=[...checks].sort((a,b)=>a.id<b.id?-1:a.id>b.id?1:0);
 if(new Set(sorted.map(x=>x.id)).size!==sorted.length)throw Error("Duplicate check IDs");
 return sha256Jcs(sorted);
}
export function receiptDigest(receipt){
 const copy=JSON.parse(JSON.stringify(receipt));
 delete copy.integrity.manifestSha256;
 return sha256Jcs(copy);
}
export function certificateDigest(certificate){
 const copy=JSON.parse(JSON.stringify(certificate));
 delete copy.artifactSha256;
 return sha256Jcs(copy);
}
