import { NextFunction } from "express";

interface RequestHandler {
  req: Request;
  res: Response;
  err: Error;
  next?: NextFunction;
}

export { RequestHandler };
