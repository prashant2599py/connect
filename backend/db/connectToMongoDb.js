import mongoose from "mongoose";

const connectToMongoDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB_URL)
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log("Failed to connect to Mongo" + error.message

        )
    }
}

export default connectToMongoDb;