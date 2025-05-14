import { DataTypes } from "sequelize";
import { db } from "./connection.js";

export const User = db.define("user",{
    name:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    email:{
        type:DataTypes.STRING,
        unique: true, 
    },
})

export const Post =db.define("post",{
    title:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    content:{
        type:DataTypes.TEXT,
        allowNull: false,
    },   
})

User.hasMany(Post,{foreignKey:{name:"authorId" , allowNull:false}})
Post.belongsTo(User,{foreignKey:{name:"authorId", allowNull:false}})