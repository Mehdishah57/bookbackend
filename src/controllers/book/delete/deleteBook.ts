import cloudinary from "../../../cloudinary/cloudinary";
import Book from "../../../models/book";
import handleRouteError from "../../../utils/handleRouteErrors";

const deleteBook = handleRouteError(async(req,res)=>{
    const {id, public_id} = req.params;
    await cloudinary.uploader.destroy(public_id);
    //@ts-ignore
    await Book.deleteOne({_id: id, owner: req.user._id});
    res.status(200).send("Book was deleted");
})

export default deleteBook;