import { pool } from "../../config/db.ts";
import type { Post } from "../../types/index.ts";

export async function insertPost(
  userId: number,
  title: string,
  description: string,
): Promise<Post> {
  const res = await pool.query<Post>(
    `INSERT INTO posts (user_id, title, description) VALUES ($1, $2, $3) RETURNING *`,
    [userId, title, description],
  );
  return res.rows[0];
}
