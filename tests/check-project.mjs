import { readdir, readFile, access } from "node:fs/promises";
import { join, dirname, resolve } from "node:path";

const required = [
  "index.html",
  "README.md",
  "assets/css/main.css",
  "assets/css/tokens.css",
  "assets/css/reset.css",
  "assets/css/base.css",
  "assets/css/layout.css",
  "assets/css/components.css",
  "docs/CSS_COMPLETE_GUIDE.md",
  "docs/CSS_TESTING_CHECKLIST.md",
  "docs/CSS_FEATURES_REFERENCE.md"
];
let failed = false;
for (const path of required) {
  try { await access(path); console.log("PASS", path); }
  catch { console.error("FAIL missing:", path); failed = true; }
}
async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const out = [];
  for (const entry of entries) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...await walk(path));
    else out.push(path);
  }
  return out;
}
const allFiles = await walk(".");
const htmlFiles = allFiles.filter(path => path.startsWith("examples/") && path.endsWith(".html"));
if (htmlFiles.length < 25) {
  console.error("FAIL: expected at least 25 HTML examples, found", htmlFiles.length);
  failed = true;
} else console.log("PASS", htmlFiles.length, "HTML examples discovered");

for (const path of htmlFiles) {
  const source = await readFile(path, "utf8");
  if (!source.toLowerCase().includes("<!doctype html>") || !source.includes('name="viewport"')) {
    console.error("FAIL HTML structure:", path); failed = true;
  }
  const refs = [...source.matchAll(/(?:href|src)="([^"]+)"/g)].map(match => match[1]);
  for (const ref of refs) {
    if (/^(?:[a-z]+:|#|\/\/)/i.test(ref)) continue;
    const localPath = ref.split("#")[0].split("?")[0];
    if (!localPath) continue;
    const target = resolve(dirname(path), localPath);
    try { await access(target); }
    catch { console.error("FAIL broken local reference:", path, "->", ref); failed = true; }
  }
}

const mainCss = await readFile("assets/css/main.css", "utf8");
for (const match of mainCss.matchAll(/@import\s+url\(["']?([^"')]+)["']?\)/g)) {
  try { await access(resolve("assets/css", match[1])); }
  catch { console.error("FAIL missing CSS import:", match[1]); failed = true; }
}

if (failed) process.exitCode = 1;
else console.log("All project integrity checks passed.");
