import { Router } from "express";
import * as postsController from "./posts.controller.ts";
import { validate } from "../../middlewares/validate.ts";
import { createPostSchema } from "./posts.schema.ts";

const router = Router();

router.post("/", validate(createPostSchema), postsController.create);
router.get("/", postsController.list);

export default router;
