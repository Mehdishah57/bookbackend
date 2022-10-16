import Book from "../../../models/book";
import handleRouteError from "../../../utils/handleRouteErrors";

const getBooks = handleRouteError(async(req,res)=>{
    const books = await Book.find({isPublished: true}).populate("category", "name");
    res.status(200).send(books);
});

export default getBooks;