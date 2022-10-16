import dotenv from "dotenv";

const configEnvVars = () => {
    const { NODE_ENV } = process.env;
    if (!NODE_ENV) return dotenv.config();
    const { parsed } = dotenv.config({ path: `.env.${NODE_ENV.trim()}` });
    for(const variable in parsed)
        if(!parsed[variable]) throw new Error(`${variable} is not set`);
}

export default configEnvVars;