import Book from "../../../models/book";
import handleRouteError from "../../../utils/handleRouteErrors";

const publish = handleRouteError(async(req,res)=>{
    const {id} = req.params;
    const {modifiedCount} = await Book.updateOne({_id: id},[{$set: {isPublished: {$not: '$isPublished'}}}]);
    if(!modifiedCount) return res.status(400).send("Book status was not updated");
    res.status(200).send("Book status was successfully updated");
})

export default publish;