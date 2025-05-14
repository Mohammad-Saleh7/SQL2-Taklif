import { User } from "../db/schema.js";


export const CreateUser = async (req, res) => {
    try {
        const { name, email } = req.body;
        if (!name || !email) {
            return res.status(400).json({ message: "Name and email are required" });
        }
        const user = await User.create(req.body);  
        res.status(200).json(user);  
    } catch (error) {
        res.status(500).json({ message: error.message });  
    }
}


export const getUser = async (req,res) => {
    try{
        const user = await User.findAndCountAll()
        res.status(200).json(user)
    }catch(error){
        res.status(500).json({message: error.message})
    }
}

export const getUserById = async (req, res) => {
    try{
        const user = User.findByPk(res.params.id)
        if (!user) {
            res.status(404).json({message:"User not found"})
        }
        res.status(200).json(user)
    }catch(error){
        res.status(500).json({message: error.message})
    }
}

export const userUpdate = async (req , res) => {
    try{
        const user = await User.findByPk(req.params.id)
        if (!user) {
            res.status(404).json({message: "User not found"})
        }
        await user.update(req.body)
        res.status(200).json(user)
    }catch(error){
        res.status(500).json({message: error.message})
    }
}


export const deleteUser = async (req , res) => {
    try{
        const user = User.findByPk(req.params.id)
        if (!user) {
            res.status(404).json({message:"User not found"})
        }
        await user.destroy()
        res.status(200).json(user)
    }catch(error){
        res.status(500).json({message: error.message})
    }
}