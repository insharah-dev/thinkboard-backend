import mongoose from "mongoose";

// 1st step: yuo need to create schema
// 2nd step: you would create a model based off of that schema

const noteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
},
    { timestamps: true } //created at, updated at
);


const note = mongoose.model("Note", noteSchema)

export default note