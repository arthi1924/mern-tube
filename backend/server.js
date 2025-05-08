import express from 'express';
import { config } from './config/env.js';
import { connectDb } from './config/db.js';
import { corsMiddleware } from './middlewares/cors-middleware.js';
import userRoute from './routes/user-route.js'
import { fileUploadMiddleware } from './middlewares/fileUpload-middleware.js';
const app = express();

app.use(corsMiddleware);
app.use(express.json());
app.use('/user', userRoute);
app.use(fileUploadMiddleware);

app.listen(config.port, () => {
    connectDb();
    console.log(`server is running on port ${config.port}`);
});
