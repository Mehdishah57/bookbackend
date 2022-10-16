import {Prop, getModelForClass} from "@typegoose/typegoose";
import jwt from "jsonwebtoken";

class UserModel {
    public _id!: string

    @Prop({ type: ()=>String, minlength: 1, maxlength: 20 })
    public firstName!: string
    
    @Prop({ type: ()=>String, minlength: 1, maxlength: 20 })
    public lastName!: string
    
    @Prop({ type: ()=>String, minlength: 5, maxlength: 255 })
    public email!: string
    
    @Prop({ type: ()=>String, minlength: 8, maxlength: 2048 })
    public password!: string
    
    @Prop({ type: ()=>Boolean, default: true })
    public isActive!: boolean
    
    @Prop({ type: ()=>Boolean, default: false })
    public isAdmin!: boolean
}

const User = getModelForClass(UserModel, {schemaOptions: {collection: "users"}});

const generateAuthToken = (user: UserModel) => {
    const token = jwt.sign({ _id: user._id, email: user.email }, 
        process.env.JWT_PRIVATE_KEY as string);
    return token;
}

export default User;
export { generateAuthToken, UserModel };
