import { readdir, readFile, access } from "node:fs/promises";
import { join } from "node:path";
const required=["index.html","assets/css/main.css","assets/css/tokens.css","assets/css/reset.css","assets/css/base.css","assets/css/layout.css","assets/css/components.css","docs/CSS_COMPLETE_GUIDE.md"];
let failed=false;
for(const path of required){try{await access(path);console.log("PASS",path)}catch{console.error("FAIL missing:",path);failed=true}}
async function walk(dir){const entries=await readdir(dir,{withFileTypes:true});const out=[];for(const e of entries){const p=join(dir,e.name);if(e.isDirectory())out.push(...await walk(p));else out.push(p)}return out}
const html=(await walk("examples")).filter(p=>p.endsWith(".html"));
if(html.length<10){console.error("FAIL: expected at least 10 HTML examples");failed=true}else console.log("PASS",html.length,"HTML examples discovered");
for(const path of html){const s=await readFile(path,"utf8");if(!s.toLowerCase().includes("<!doctype html>")||!s.includes('name="viewport"')){console.error("FAIL HTML structure:",path);failed=true}}
if(failed)process.exitCode=1;else console.log("All project integrity checks passed.");
