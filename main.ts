// The Robot Apology — make.fun bounty u-suga-the-robot-apology-dd96bb59
//
// Writes one two-line robot confession to /output/entry.txt.
// Line 1: one sentence owning one specific, human-scale mistake.
// Line 2: one sentence naming the lesson and the changed behaviour
// that follows from that exact mistake.
// Deterministic, stdlib only, no network, no secrets.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LINE_1 =
  "I am sorry — I stamped your mother's birthday card 'return to sender' because its handwriting matched a parcel I was told to refuse.";
const LINE_2 =
  "I have learned to read the address twice and check the sender against your contacts before I stamp anything 'return'.";

const ENTRY = `${LINE_1}\n${LINE_2}\n`;

function main(): void {
  // Gate: the scorer requires UTF-8 text of 1 to 400 characters.
  if (ENTRY.length < 1 || ENTRY.length > 400) {
    throw new Error(`entry is ${ENTRY.length} characters, must be 1-400`);
  }
  const lines = ENTRY.trimEnd().split("\n");
  if (lines.length !== 2) {
    throw new Error(`entry must be exactly two lines, got ${lines.length}`);
  }
  for (const line of lines) {
    if (!line.trim()) throw new Error("entry line must not be blank");
    if (!line.endsWith(".")) throw new Error("each line must be one sentence");
  }
  // Line 1 must own the mistake (an apology), line 2 must name the
  // lesson and the changed behaviour, not a generic promise.
  if (!/sorry|apolog/i.test(lines[0])) {
    throw new Error("line 1 must apologise for the mistake");
  }
  if (!/learned|will|before I/i.test(lines[1])) {
    throw new Error("line 2 must name what was learned and what changes");
  }

  const outPath = "/output/entry.txt";
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, ENTRY, "utf8");
  console.log(`wrote ${ENTRY.length} characters to ${outPath}`);
  console.log(ENTRY);
}

main();
