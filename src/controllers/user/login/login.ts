import User, { generateAuthToken } from "../../../models/user";
import handleRouteError from "../../../utils/handleRouteErrors";
import validate from "./validate";
import { compare } from "bcrypt";

const login = handleRouteError(async(req,res)=>{
    const { email, password } = await validate(req.body);
    const user = await User.findOne({ email });
    if(!user) return res.status(404).send("There is no account associated with this email");
    if(!user.isActive) return res.status(400).send("Your account is not active. Contact admin.")
    const isPasswordCorrect = await compare(password, user.password);
    if(!isPasswordCorrect) return res.status(400).send("Email or password was incorrect");
    const token = generateAuthToken(user as any);
    user.password = "undefined";
    res.status(200).send({user,token});
});

export default login;