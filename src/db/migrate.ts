import { readdir, readFile } from "node:fs/promises";
import { pool } from "../config/db.ts";

const dir = new URL("./migrations/", import.meta.url);

await pool.query(`
  CREATE TABLE IF NOT EXISTS migrations (
    name TEXT PRIMARY KEY,
    applied_at TIMESTAMPTZ NOT NULL DEFAULT now()
  )
`);

const files = (await readdir(dir)).filter((f) => f.endsWith(".sql")).sort();
const { rows } = await pool.query("SELECT name FROM migrations");
const applied = new Set(rows.map((r) => r.name));
const pending = files.filter((f) => !applied.has(f));

console.log(`[migrate] ${files.length} migration file(s), ${pending.length} pending`);

if (pending.length === 0) {
  console.log("[migrate] up to date");
}

for (const file of pending) {
  const sql = await readFile(new URL(file, dir), "utf8");
  console.log(`[migrate] applying ${file}...`);
  await pool.query("BEGIN");
  try {
    await pool.query(sql);
    await pool.query("INSERT INTO migrations (name) VALUES ($1)", [file]);
    await pool.query("COMMIT");
    console.log(`[migrate] applied ${file}`);
  } catch (err) {
    await pool.query("ROLLBACK");
    console.error(`[migrate] failed ${file}:`, err instanceof Error ? err.message : err);
    throw err;
  }
}

await pool.end();
