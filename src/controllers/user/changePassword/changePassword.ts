import User from "../../../models/user";
import handleRouteError from "../../../utils/handleRouteErrors";
import validate from "./validate";
import { compare, genSalt, hash } from "bcrypt";

const changePassword = handleRouteError(async(req,res)=>{
    const {oldPassword, newPassword} = await validate(req.body);
    //@ts-ignore
    const user = await User.findById(req.user._id);
    if(!user) return res.status(404).send("There was some error");
    const isPassOk = await compare(oldPassword, user.password);
    if(!isPassOk) return res.status(400).send("Password you entered was incorrect");
    const isPassSame = await compare(newPassword, user.password);
    if(isPassSame) return res.status(400).send("This is your current password");
    const salt = await genSalt(10);
    const hashed = await hash(newPassword, salt);
    user.password = hashed;
    await user.save();
    return res.status(200).send("Password was changed successfully");
})

export default changePassword;