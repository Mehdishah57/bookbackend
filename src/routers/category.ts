import { Router } from "express";
import getCategories from "../controllers/category/get/getCategories";

const categoryRouter = Router();

categoryRouter.get("/", getCategories);

export default categoryRouter;