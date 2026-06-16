import express from "express";
import { getAllStacks ,addStack, getStackById, addComment, deleteStackById, togglePublish,getStackComments } from "../controllers/stackController.js";
import upload from "../middleware/multer.js";
import auth from "../middleware/auth.js";



const stackRouter = express.Router();

stackRouter.post("/add", upload.single('image'), auth, addStack)
stackRouter.get("/all", getAllStacks);
stackRouter.get("/:stackId", getStackById);
stackRouter.post("/delete", auth, deleteStackById);
stackRouter.post("/toggle-publish", auth, togglePublish);   
stackRouter.post("/add-comment", addComment); 
stackRouter.post("/comments", getStackComments); 

export default stackRouter;