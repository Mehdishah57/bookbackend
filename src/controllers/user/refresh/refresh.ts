import handleRouteError from "../../../utils/handleRouteErrors";
import User from "../../../models/user";

const refresh = handleRouteError(async(req,res)=>{
    //@ts-ignore
    const user = await User.findById(req.user._id);
    //@ts-ignore
    user.password = "undefined";
    return res.status(200).send(user);
});

export default refresh;