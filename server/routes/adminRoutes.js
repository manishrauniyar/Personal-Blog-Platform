import express from 'express';
import { adminLogin, getAllComments, deleteCommentById, getAllStacksAdmin, getDashboard, approveCommentById } from '../controllers/adminController.js';
import auth from '../middleware/auth.js';

const adminRouter = express.Router();

adminRouter.post('/login', adminLogin);

adminRouter.get('/comments', auth, getAllComments);
adminRouter.get('/stacks', auth, getAllStacksAdmin);

adminRouter.post('/delete-comment', auth, deleteCommentById);
adminRouter.post('/approve-comment', auth, approveCommentById);

adminRouter.get("/dashboard", auth, getDashboard);


export default adminRouter;