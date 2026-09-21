import express, { type Express, type Request, type Response } from "express";
import { PORT } from "./config/index.ts";
import cors from "cors";

const app: Express = express();

// Middleware
app.use(cors());
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.get("/health", (req: Request, res: Response) => {
  res.status(200).json({ status: "ok", time: new Date() });
});

app.listen(PORT, () => {
  console.log(`Listening on port: http://localhost:${PORT}`);
});
