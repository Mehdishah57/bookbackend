import Book from "../../../models/book";
import handleRouteError from "../../../utils/handleRouteErrors";

const getMyBooks = handleRouteError(async(req,res)=>{
    //@ts-ignore
    const books = await Book.find({owner: req.user._id}).populate("category");
    if(!books) return res.status(404).send("You don't have any books");
    res.status(200).send(books);
})

export default getMyBooks;