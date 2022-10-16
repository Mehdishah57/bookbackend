import * as yup from "yup";

const validate = (body: any) => {
    const schema = yup.object({
        name: yup
            .string()
            .min(3, "Minimum length for book name: 3")
            .max(255, "Maximum length for book name: 255")
            .required("Book name can't be empty"),
        category: yup
            .string()
            .required("Category must be selected"),
        public: yup
            .bool()
            .notRequired(),
        secure_url: yup
            .string()
            .required(),
        public_id: yup
            .string()
            .required()
    });
    return schema.validate(body)
}

export default validate;