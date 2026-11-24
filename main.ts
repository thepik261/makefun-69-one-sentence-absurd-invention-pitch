// One-Sentence Absurd Invention Pitch — make.fun entry.
// Writes a single-sentence pitch (<= 220 chars) to $OUTPUT_DIR/entry.txt
// (default /output). Pure Node stdlib, deterministic, no network.
import { mkdirSync, writeFileSync, chmodSync } from "node:fs";
import { join } from "node:path";

// The pitch: one sentence naming a tiny everyday annoyance (burnt toast),
// a ridiculous invention (a toaster that surrenders), and its silly
// mechanism (a tiny white flag plus a pre-written apology to the smoke
// alarm). The humour lives in the invention itself, not in a bolted-on joke.
const PITCH =
  "The Surrender Toaster: the moment your bread pops up burnt, it waves a tiny white flag and mails a pre-written apology to your smoke alarm.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const file = join(outDir, "entry.txt");
// Exactly the sentence, no trailing newline, so the gate counts only the pitch.
writeFileSync(file, PITCH, "utf8");
try {
  chmodSync(file, 0o644);
} catch {
  // The grader may run as another user; a failed chmod must not fail the run.
}
