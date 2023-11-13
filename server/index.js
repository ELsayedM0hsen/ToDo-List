import express from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import itemRouter from "./routes/list.js";

const app = express();
const PORT = 8000

// middeleware 
app.use(express.json());
app.use(cors());

//Routes
app.use("/items",itemRouter);



const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/todoDB");
        console.log("mongoDB connected");
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
    
}





app.listen(PORT,() => {
    connectDB();
    console.log( `server in running in ${PORT}`);
})