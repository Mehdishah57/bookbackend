import { genSalt, hash } from "bcrypt";
import User, { generateAuthToken } from "../../../models/user";
import handleRouteError from "../../../utils/handleRouteErrors";
import validate from "./validate";

const register = handleRouteError(async(req,res)=>{
    const validated = await validate(req.body);
    const exists = await User.findOne({email: validated.email});
    if(exists) return res.status(400).send("User with this email already exists");
    const user = new User(validated);
    const salt = await genSalt(10);
    const hashedPassword = await hash(user.password, salt);
    user.password = hashedPassword;
    await user.save();
    const token = generateAuthToken(user);
    user.password = "null";
    res.status(200).send({ user, token });
});

export default register;