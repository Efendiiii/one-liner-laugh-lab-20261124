import { mkdirSync, writeFileSync } from "node:fs";

// One-Liner Laugh Lab — the excuse a robot vacuum gives after eating a sock.
// Deadpan bureaucratic twist: the sock is not food, it is a detained trespasser.
const line =
  "The sock entered a restricted clean zone without a permit, so I detained it for questioning — it has refused to talk ever since.";

// Gate: /output/entry.txt must be UTF-8 text of 1 to 200 characters,
// not only white space.
const chars = [...line].length;
if (chars < 1 || chars > 200) {
  throw new Error(`entry must be 1-200 characters, got ${chars}`);
}
if (!line.trim()) {
  throw new Error("entry must not be only white space");
}
if (line.includes("\n")) {
  throw new Error("entry must be a single line");
}
const words = line.trim().split(/\s+/).length;
if (words < 3 || words > 40) {
  throw new Error(`entry must be 3-40 words, got ${words}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
console.log(`wrote ${chars} chars to /output/entry.txt`);
