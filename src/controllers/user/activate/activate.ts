import User from "../../../models/user";
import handleRouteError from "../../../utils/handleRouteErrors";

const activate = handleRouteError(async(req,res)=>{
    const {id} = req.params;
    const {modifiedCount} = await User.updateOne({_id: id, isAdmin:false},[{$set: {isActive: {$not: '$isActive'}}}]);
    if(!modifiedCount) return res.status(400).send("User status was not updated");
    res.status(200).send("User status was successfully updated");
})

export default activate;