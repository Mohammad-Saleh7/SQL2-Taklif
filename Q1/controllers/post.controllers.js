import { Op } from "sequelize";
import { Post,User } from "../db/schema.js";

export const createPost = async (req,res) => {
    try{
        const post = await Post.create(req.body)
        res.status(200).json(post)
    }catch(error){
        res.status(500).json({message:error.message})
    }
}

export const getPost = async (req,res) => {
    try{
        const post = await Post.findAndCountAll({
            where:{
                createdAt:{
                    [Op.gte] : new Date(new Date().setDate(new Date().getDate() - 7)),
                }
            },
            attributes:["id","title"],
            include:{
                model:User,
                attributes:["id","name"]
            }
        })
        res.status(200).json(post)
    }catch(error){
        res.status(500).json({message:error.message})
    }
}

export const getPostById = async (req , res) => {
    try{
        const post = await Post.findByPk(req.params.id,{include:User})
        if (!post) {
            req.status(404).json({message:"Post not found"})
        }
        res.status(200).json(post)
    }catch(error){
        res.status(500).json({message:error.message})
    }
}

export const postUpdate = async (req , res) => {
    try{
        const post = await Post.findByPk(req.params.id)
        if (!post) {
            res.status(404).json({message:"Post not found"})
        }
        await post.update(req.body)
        res.status(200).json(post)
    }catch(error){
        res.status(500).json({message:error.message})
    }
}

export const deletePost = async (req , res) => {
    try{
        const post = await Post.findByPk(req.params.id)
        if (!post) {
            res.status(404).json({message:"Post not found"})
        }
        await post.destroy()
        res.status(200).json(post)
    }catch(error){
        res.status(500).json({message:error.message})
    }
}