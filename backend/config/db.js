import mongoose from 'mongoose';
import { config } from './env.js';

export const connectDb = async () => {
    try {
        await mongoose.connect(config.mongo_url, {
            dbName: "mern_tube"
        });
        console.log("DB connected");
    }
    catch (error) {
        console.error(`error connecting to DB ${error.message}`);
        process.exit(1);
    }
}
