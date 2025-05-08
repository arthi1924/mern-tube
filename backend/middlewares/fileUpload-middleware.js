import fileUpload from "express-fileupload";

export const fileUploadMiddleware = fileUpload({
    useTempFiles: true,
    tempFileDir: '/tmp/',
    limits: { fileSize: 16 * 1024 * 1024 },
});
