import type { NextFunction, Request, Response } from "express";
import { TEMP_USER_ID } from "../../types/index.ts";
import * as commentsService from "./comments.service.ts";

export async function create(req: Request, res: Response, next: NextFunction) {
  try {
    const { postId, body } = req.body;
    const post = await commentsService.createComment(
      TEMP_USER_ID,
      postId,
      body,
    );
    res.status(201).json(post);
  } catch (error) {
    next(error);
  }
}
