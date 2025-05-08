import cors from 'cors';

export const corsMiddleware = cors({
    methods : ["GET","POST","PUT","DELETE"],
    origin : true,
    credentials : true,
})
