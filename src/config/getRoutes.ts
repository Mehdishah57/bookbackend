import { Express, json } from "express";
import cors from "cors";
import bookRouter from "../routers/book";
import userRouter from "../routers/user";
import categoryRouter from "../routers/category";

const getRoutes = (app: Express) => {
    app.use(json());
    app.use(cors());
    app.use("/api/user", userRouter);
    app.use("/api/book", bookRouter);
    app.use("/api/category", categoryRouter);
}

export default getRoutes;