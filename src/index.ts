import express, { type Express, type Request, type Response } from "express";
import { PORT } from "./config/env.ts";
import { pool } from "./config/db.ts";
import cors from "cors";

const app: Express = express();

// Middleware
app.use(cors());
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.get("/health", async (req: Request, res: Response) => {
  try {
    await pool.query("SELECT 1");
    res.status(200).json({ status: "ok", time: new Date() });
  } catch (err) {
    res.status(503).json({ status: "error", db: "unreachable" });
  }
});

app.listen(PORT, () => {
  console.log(`Listening on port: http://localhost:${PORT}`);
});
