import {Prop, getModelForClass, Ref} from "@typegoose/typegoose";
import { CategoryModel } from "./category";
import { UserModel } from "./user";

class BookModel {
    public _id!: string

    @Prop({type: ()=>String, required: true})
    public secure_url!: string
    
    @Prop({type: ()=>String, required: true})
    public public_id!: string

    @Prop({type: ()=>[String]})
    public pages!: string[]

    @Prop({type: ()=>String, required: true})
    public name!: string

    @Prop({ref: UserModel, required: true})
    public owner!: Ref<UserModel>

    @Prop({type: ()=>Boolean, default: true})
    public isPublished!: boolean

    @Prop({ref: CategoryModel, required: true})
    public category!: Ref<CategoryModel>
}

const Book = getModelForClass(BookModel, {schemaOptions: {collection: "books"}});

export default Book;