import * as yup from "yup";

const validate = (body: any) => {
    const schema = yup.object({
        firstName: yup
            .string()
            .min(3,"Minimum length for first name: 3")
            .max(255,"Maximum length for first name: 255")
            .required("First name can't be empty"),
        lastName: yup
            .string()
            .min(3,"Minimum length for last name: 3")
            .max(255,"Maximum length for last name: 255")
            .required("Last name can't be empty"),
        email: yup
            .string()
            .email("Email is not valid")
            .min(5,"Minimum length for email: 5")
            .max(255, "Email is too long")
            .required("Email can't be empty"),
        password: yup
            .string()
            .min(8, "Minimum length for password: 8")
            .max(25, "Maximum length for password: 25")
            .required("Password can't be empty")
    })
    return schema.validate(body);
}

export default validate;