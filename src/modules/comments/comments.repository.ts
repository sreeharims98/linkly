import { pool } from "../../config/db.ts";
import type { Comment } from "../../types/index.ts";

export async function insertComment(
  userId: number,
  postId: number,
  body: string,
): Promise<Comment> {
  const res = await pool.query<Comment>(
    `INSERT INTO comments (user_id, post_id, body) VALUES ($1, $2, $3) RETURNING *`,
    [userId, postId, body],
  );
  return res.rows[0];
}
