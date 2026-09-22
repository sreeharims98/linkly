import type { NextFunction, Request, Response } from "express";
import type { ZodType } from "zod";

export function validate(schema: ZodType) {
  return (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse(req.body);
    if (!result.success) {
      return res.status(400).json({
        error: "ValidationError",
        details: result.error.flatten(),
      });
    }
    req.body = result.data; // parsed/typed data replaces raw body
    next();
  };
}
