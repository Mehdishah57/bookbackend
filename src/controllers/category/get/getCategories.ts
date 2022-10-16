import handleRouteError from "../../../utils/handleRouteErrors";
import Category from "../../../models/category";

const getCategories = handleRouteError(async(req,res) => {
    const categories = await Category.find();
    if(!categories) return res.status(404).send("No categories were found");
    res.status(200).send(categories)
});

export default getCategories;