import express from "express";
import Movie from "../movieSchema.js";

const router=express.Router;

router.post("/addMovie",  async (req,res)=>{
    try {
        const {title,director,genre,releaseYear,availablecopies}=req.body;
        if (!title ||!director || !genre ||!availablecopies){
            res.status(400).json({message:"all fields are required"})
        }
        const movie = await Movie.create({title,director,genre,releaseYear,availablecopies})
        res.status(200).json({message:"movie added succesfully"},movie)
    } catch (error) {
        console.log(error)
    }
})
router.get("/getmovie", async(req,res)=>{
    try {
        const movie =  await Movie.find();
        if(!movie){
            res.status(404).json({message:"movies is not found"})
        }
        res.status(200).json({message:"movies"},movie)
    } catch (error) {
        console.log(error)
    }
})

router.put("/updatemovie/:id", async(req,res)=>{
    try {
        const {title,director,genre,releaseYear,availablecopies}=req.body;

        const movie = await Movie.findByIdAndUpdate(req.params.id, {title,director,genre,releaseYear,availablecopies},{new:true})

        res.status(201).json({message:"movie updated"},movie)

    } catch (error) {
        console.log(error)
    }
})
router.delete("/moviedelete/:id",async(req,res)=>{
    try {
        const movie =await Movie.findByIdAndDelete(req.params.id)
        if(!movie){
            res.status(400).json({message:"can find the movie"})
        }
        res.status(200).json({message:"movie deleted"},movie)
    } catch (error) {
        console.log(error)
    }
})

export default router