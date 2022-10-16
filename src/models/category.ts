import {Prop, getModelForClass} from "@typegoose/typegoose";

class CategoryModel {
    public _id!: string

    @Prop({type: ()=>String, required: true})
    public name!: string
}

const Category = getModelForClass(CategoryModel, {schemaOptions: {collection: "categories"}});

export default Category;
export { CategoryModel }