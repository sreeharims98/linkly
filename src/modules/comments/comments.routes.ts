import { Router } from "express";
import * as commentsController from "./comments.controller.ts";
import { validate } from "../../middlewares/validate.ts";
import { createCommentSchema } from "./comments.schema.ts";

const router = Router();

router.post("/", validate(createCommentSchema), commentsController.create);
router.get("/", commentsController.create);

export default router;
