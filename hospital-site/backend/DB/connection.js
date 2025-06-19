import { connect, disconnect } from "mongoose";

export const connectDB = async(req,res) => {
    try {
        await connect(process.env.MONGODB_URL);
    } catch (error) {
        throw new Error("Error connecting to database");
    }
}

export const disconnectDB = async(req,res) => {
    try {
        await disconnect();
    } catch (error) {
        throw new Error("Error disconnecting database");

    }
}