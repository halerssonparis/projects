import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";

async function connection() {
    const memoryMongoDB = await MongoMemoryServer.create();
    
    const uri = memoryMongoDB.getUri();

    mongoose.connect(uri, () => console.log(`Mongoose Connected at: ${uri}`));
}

export default connection;