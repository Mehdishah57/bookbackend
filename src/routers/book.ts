import { Router } from "express";
import addBook from "../controllers/book/add/addBook";
import deleteBook from "../controllers/book/delete/deleteBook";
import getBooks from "../controllers/book/getBooks/getBooks";
import getMyBooks from "../controllers/book/getMyBooks.ts/getMyBooks";
import getText from "../controllers/book/getText/getText";
import publish from "../controllers/book/publish/publish";
import auth from "../middlewares/auth";

const bookRouter = Router();

bookRouter.get("/", auth, getBooks);
bookRouter.get("/my", auth, getMyBooks);
bookRouter.get("/publish/:id", auth, publish);
bookRouter.get("/text/:id/:page", auth, getText);
bookRouter.post("/", auth, addBook);
bookRouter.delete("/:id/:public_id", auth, deleteBook);

export default bookRouter;