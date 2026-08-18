import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { neon } from "@neondatabase/serverless";

const dir = path.dirname(fileURLToPath(import.meta.url));
const envLocal = path.join(dir, "..", ".env.local");
for (const line of readFileSync(envLocal, "utf8").split("\n")) {
  const match = line.match(/^([A-Z_]+)=(.*)$/);
  if (match) process.env[match[1]] ??= match[2];
}

const sql = neon(process.env.DATABASE_URL);
const schema = readFileSync(path.join(dir, "..", "src", "lib", "schema.sql"), "utf8");

for (const statement of schema.split(";").map((s) => s.trim()).filter(Boolean)) {
  await sql.query(statement);
}

console.log("Migration applied.");
