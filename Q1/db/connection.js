import { Sequelize } from "sequelize";

export const db = new Sequelize({
    dialect : "mysql",
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    password: process.env.DB_PASSWORD,
    username : process.env.DB_USER,
    database : process.env.DB_NAME,
    logging : false    
})

// db.authenticate()
// .then(() => {
//     console.log("connected to the database");
// })
// .catch((error) => console.log(error))