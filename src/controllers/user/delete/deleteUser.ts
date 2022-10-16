import User from "../../../models/user";
import handleRouteError from "../../../utils/handleRouteErrors";

const deleteUser = handleRouteError(async(req,res)=>{
    const {id} = req.params;
    const {deletedCount} = await User.deleteOne({_id: id, isAdmin:false});
    if(!deletedCount) return res.status(400).send("User was not deleted");
    res.status(200).send("User was deleted");
})

export default deleteUser;