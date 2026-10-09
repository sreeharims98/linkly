import * as commentsRepository from "./comments.repository.ts";

export async function createComment(
  userId: number,
  postId: number,
  body: string,
) {
  return commentsRepository.insertComment(userId, postId, body);
}
