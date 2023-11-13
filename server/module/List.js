import mongoose from "mongoose";

const listSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    complete: {
        type:Boolean,
        default: false
    }
},{timestamp:true});

export default mongoose.model("List",listSchema);
