import fs from 'fs';
import Stack from '../models/Stack.js';
import imagekit from '../configs/imagekit.js';
import Comment from '../models/Comment.js';

export const addStack = async (req, res) => {
    try {
        const { title, subTitle, description, category, isPublished } = JSON.parse(req.body.stack);

        const imageFile = req.file;


        // check if all required fields are present
        if (!title || !description || !category || !image) {
            return res.json({ success: false, message: 'All fields are required' });
        }
        const fileBuffer = fs.readFileSync(imageFile.path);

        // Upload the image to ImageKit
        const response = await imagekit.upload({
            file: fileBuffer,
            fileName: imageFile.originalname,
            folsder: "/stacks"
        });

        //optimize the image URL
        const optimizedImageUrl = imagekit.url({
            path: response.filePath,
            transformation: [
                { quality: "auto" },
                { format: "webp" },
                { width: '1280' },
            ]
        });
        const image = optimizedImageUrl; // Use the optimized image URL

        await Stack.create({ title, subTitle, description, category, image, isPublished });

        res.json({ success: true, message: 'Stack added successfully' });
    } catch (error) {
        console.error(error);
        res.json({ success: false, message: error.message });
    }

}

export const getAllStacks = async (req, res) => {
    try {
        const stacks = await Stack.find({ isPublished: true });
        res.json({ success: true, stacks });
    } catch (error) {
        // console.error(error);
        res.json({ success: false, message: error.message });
    }
}

export const getStackById = async (req, res) => {
    try {
        const { stackId } = req.params;
        const stack = await Stack.findById(stackId);
        if (!stack) {
            return res.json({ success: false, message: 'Stack not found' });
        }
        res.json({ success: true, stack });
    } catch (error) {
        // console.error(error);
        res.json({ success: false, message: error.message });
    }
}

export const deleteStackById = async (req, res) => {
    try {
        const { id } = req.body;

        await Stack.findByIdAndDelete(id);

        await Comment.deleteMany({ stack: id });

        res.json({ success: true, message: 'Stack deleted successfully' });
    } catch (error) {
        // console.error(error);
        res.json({ success: false, message: error.message });
    }
}


export const togglePublish = async (req, res) => {
    try {
        const { id } = req.body;

        const stack = await Stack.findById(id);

        stack.isPublished = !stack.isPublished;
        await stack.save();
        res.json({ success: true, message: 'publish status updated successfully' });
    } catch (error) {
        // console.error(error);
        res.json({ success: false, message: error.message });
    }
}

export const addComment = async (req, res) => {
    try {
        const { stack, name, content } = req.body;
        await Comment.create({ stack, name, content });
        res.json({ success: true, message: 'Comment added for review' });
    }
    catch (error) {
        res.json({ success: false, message: error.message });
    }   
}


export const getStackComments = async (req, res) => {
    try {
        const { stackId } = req.body;
        const comments = await Comment.find({ stack: stackId, isApproved: true }).sort({ createdAt: -1 });
        res.json({ success: true, comments });
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
}