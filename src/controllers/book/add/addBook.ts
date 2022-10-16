import handleRouteError from "../../../utils/handleRouteErrors";
import validate from "./validate";
import Book from "../../../models/book";

const addBook = handleRouteError(async(req,res)=>{
    const validated = await validate(req.body);
    const book = new Book(validated);
    //@ts-ignore
    book.owner = req.user._id;
    await book.save();
    return res.status(200).send("Book was successfully uploaded");
});

export default addBook;