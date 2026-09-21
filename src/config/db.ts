import { Pool } from "pg";
import { DATABASE_URL } from "./env.ts";

export const pool = new Pool({ connectionString: DATABASE_URL });
