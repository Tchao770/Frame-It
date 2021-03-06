import { NextFunction } from "express";

interface RequestHandler {
  req: Request;
  res: Response;
  err: Error;
  next?: NextFunction;
}

interface ImageModel {
  uri: string;
  title: string;
}

export { RequestHandler, ImageModel };
