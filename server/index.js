import express from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import taskRouter from "./routes/listRoutes.js";
import authRouter from "./routes/authRoutes.js";
import usersRoutes from "./routes/usersRoutes.js"


const app = express();
const { API_PORT } = process.env;
const port = process.env.PORT || API_PORT;

// middeleware 
app.use(express.json());
app.use(cors());
app.use(cookieParser())


//Routes
app.use("/auth",authRouter);
app.use("/users",usersRoutes);
app.use("/api/user",taskRouter);



const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/todoDB");
        console.log("mongoDB connected");
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
    
}





app.listen(port,() => {
    connectDB();
    console.log( `server in running in ${port}`);
})