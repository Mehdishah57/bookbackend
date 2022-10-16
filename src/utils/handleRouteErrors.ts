import { RouteErrorHandler } from "../types/RouteErrorHandler";

const handleRouteError: RouteErrorHandler = (callback) => {
    return async(req,res,next) => {
        try {
            await callback(req,res,next);
        } catch (error: any) {
            if(error.name == "ValidationError")
                return res.status(400).send(error.errors[0]);
            res.status(500).send("Internal Server Error");
            console.error(error)
        }
    }
}

export default handleRouteError;