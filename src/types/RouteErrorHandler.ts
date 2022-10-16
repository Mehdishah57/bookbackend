import { RequestHandler } from "express";

type RouteErrorHandler = (callback: RequestHandler) => RequestHandler;

export {
    RouteErrorHandler
}