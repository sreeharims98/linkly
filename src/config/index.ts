import "dotenv/config";

const required = ["PORT", "DATABASE_URL"] as const;

const missing = required.filter((key) => !process.env[key]);
if (missing.length > 0) {
  throw new Error(`Missing required env vars: ${missing.join(", ")}`);
}

export const PORT = process.env.PORT as string;
export const DATABASE_URL = process.env.DATABASE_URL as string;
