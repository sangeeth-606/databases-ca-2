import express from "express";
import dotenv from "dotenv";
// import cors from "cors";
import connectDb from "./db.js";
import router from "./controller/movieRoutes.js";
dotenv.config()

const app=express();
app.use(express.json())
// app.use(cors())

connectDb(); //MONGODB CONNECTION FILE
app.use("/",router)

app.listen(process.env.PORT,()=>{
    console.log(`server is running on port ${process.env.PORT}`)
})

