import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The excuse a gamer texts their boss to skip work on GTA 6 launch week:
// boring, specific, and almost believable — the office VPN is down again,
// IT blames a firewall update, and nobody can prove otherwise in a hurry.
const line =
  "Sorry, the office VPN keeps dropping and IT said the firewall update broke remote logins again, waiting on a fix.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
if (line.length < 1 || line.length > 140) {
  throw new Error(`entry must be 1-140 characters, got ${line.length}`);
}
if (line.split(/\s+/).length > 20) {
  throw new Error("entry must be at most 20 words");
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
console.log(`Wrote ${line.length} characters to ${join(outDir, "entry.txt")}`);
