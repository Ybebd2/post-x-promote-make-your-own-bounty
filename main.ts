import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(fileURLToPath(import.meta.url));
const post = readFileSync(join(root, "POST.json"), "utf8");
mkdirSync("/output", { recursive: true });
writeFileSync("/output/POST.json", post);
