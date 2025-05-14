import { Router } from "express";

import{
    createPost,
    getPost,
    getPostById,
    postUpdate,
    deletePost,
}from "../controllers/post.controllers.js"

const router = Router()


router.post("/", createPost);
router.get("/", getPost);
router.get("/:id", getPostById);
router.put("/:id", postUpdate);
router.delete("/:id", deletePost);


export default router