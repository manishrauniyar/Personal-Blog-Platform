import jwt from 'jsonwebtoken';
import Stack from '../models/Stack.js';
import Comment from '../models/Comment.js';

export const adminLogin = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (email !== process.env.ADMIN_EMAIL || password !== process.env.ADMIN_PASSWORD) {
            return res.json({ success: false, message: 'Invalid email or password' });
        }
        const token = jwt.sign({ email }, process.env.JWT_SECRET)
        res.json({ success: true, message: 'Login successful', token });
    }
    catch (error) {
        res.json({ success: false, message: error.message });
    }
}

export const getAllStacksAdmin = async (req, res) => {
    try {
        const stacks = await Stack.find({}).sort({ createdAt: -1 });
        res.json({ success: true, stacks });
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
}

export const getAllComments = async (req, res) => {
    try {
        const comments = await Comment.find({}).populate("stack").sort({ createdAt: -1 });
        res.json({ success: true, comments });
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
}

export const getDashboard = async (req, res) => {
    try {
        const recentStacks = await Stack.find({}).sort({ createdAt: -1 }).limit(5);
        const stacks = await Stack.countDocuments();
        const comments = await Comment.countDocuments();
        const drafts = await Stack.countDocuments({ isPublished: false });

        const dashboardData = {
            stacks, comments, drafts, recentStacks
        };
        res.json({ success: true, dashboardData });
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
}

export const deleteCommentById = async (req, res) => {
    try {
        const { id } = req.body;
        await Comment.findByIdAndDelete(id);
        res.json({ success: true, message: 'Comment deleted successfully' });
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
}


export const approveCommentById = async (req, res) => {
    try {
        const { id } = req.body;
        await Comment.findByIdAndUpdate(id, { isApproved: true });
        res.json({ success: true, message: 'Comment approved successfully' });
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
}

