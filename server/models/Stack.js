import mongoose from "mongoose";

const stackSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    subTitle: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    cotegory: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    isPublished: {
        type: Boolean,
        default: false
    }
},{timestamps: true});

const Stack = mongoose.model('Stack', stackSchema);

export default Stack;