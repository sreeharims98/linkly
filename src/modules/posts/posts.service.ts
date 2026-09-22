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
