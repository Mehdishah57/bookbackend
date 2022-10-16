import { RequestHandler } from "express";
import jwt from "jsonwebtoken";

const auth: RequestHandler = (req, res, next) => {
    const token = req.headers['token'];
    if(!token) return res.status(403).send("Forbidden");
    try {
        const decoded = jwt.verify(token as string, `${process.env.JWT_PRIVATE_KEY}`);
        //@ts-ignore
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(403).send("Forbidden");
    }
}

export default auth;