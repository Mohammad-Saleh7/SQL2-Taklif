import "dotenv/config"
import { db } from "./db/connection.js";
import express from "express";
import userRouter from "./routers/routers.user.js";
import postRouter from "./routers/routers.post.js";

const app = express()
app.use(express.json());
app.use("/users",userRouter)
app.use("/posts",postRouter)

db.sync({alter:true})
.then(()=> {
    console.log("synced to the database");
})
.catch((error) => {
    console.log(error);
    
})

app.listen(3000,() =>{
    console.log("Server is running on port 3000");
    
})