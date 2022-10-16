import mongoose from "mongoose";

const connectDatabase = async() => {
    try {
        await mongoose.connect(`${process.env.MONGO_URL}`);
        console.log("Connected with database");
    } catch (error) {
        console.error("Database not connected");
        console.log(error);
        process.exit(-1);
    }
}

export default connectDatabase;