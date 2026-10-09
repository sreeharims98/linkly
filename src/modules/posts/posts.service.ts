import { AppError } from "../../middlewares/errorHandler.ts";
import * as postsRepository from "./posts.repository.ts";

export async function createPost(
  userId: number,
  title: string,
  description: string,
) {
  return postsRepository.insertPost(userId, title, description);
}

export async function listPosts() {
  return postsRepository.findAllPosts();
}

export async function getPostById(id: number) {
  const post = postsRepository.findPostById(id);
  if (!post) {
    throw new AppError("Post not found", 404);
  }
  return post;
}
