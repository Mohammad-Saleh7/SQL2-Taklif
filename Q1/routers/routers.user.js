import { Router } from "express";

import{
    CreateUser,
    getUser,
    getUserById,
    userUpdate,
    deleteUser
}from "../controllers/user.controllers.js"

const router = Router()


router.post("/", CreateUser);
router.get("/", getUser);
router.get("/:id", getUserById);
router.put("/:id", userUpdate);
router.delete("/:id", deleteUser);


export default router