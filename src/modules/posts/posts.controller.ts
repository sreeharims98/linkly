import { TEMP_USER_ID } from "../../types/index.ts";
import * as postsService from "./posts.service.ts";
import type { NextFunction, Request, Response } from "express";

export async function create(req: Request, res: Response, next: NextFunction) {
  try {
    const { title, description } = req.body;
    const post = await postsService.createPost(
      TEMP_USER_ID,
      title,
      description,
    );
    res.status(201).json(post);
  } catch (err) {
    next(err);
  }
}
