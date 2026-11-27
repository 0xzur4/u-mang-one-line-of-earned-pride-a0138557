// main.ts — writes one quiet, earned moment of pride
// to <MAKEFUN_OUTPUT_DIR>/entry.txt (default /output).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "At seventy-three, he finished the boat he started with his late wife, pushed it into the tide, and watched it float.";

// Gate (kit competition.yaml): the entry must be UTF-8 text of 1-240
// characters, a single line, not only white space. The pride is earned
// inside the line: a boat begun years ago with his late wife, finished
// alone at seventy-three, and the proof arrives in the last word —
// it floats. A concrete scene with a real person, the effort felt in
// "finished" and "pushed", and nothing stock: no trophy, no podium,
// no graduation. Just work done, and water holding it.
const codePoints = [...line].length;
if (codePoints < 1 || codePoints > 240 || line.includes("\n")) {
  throw new Error(`line is invalid: ${codePoints} code points`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
// Write the line with no trailing newline, so the file is exactly one line.
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
