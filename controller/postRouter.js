const express = require("express")
const postModel = require("../model/postModel")
const router = express.Router()


router.post("/add",async(req,res)=>{
    let data = req.body 
    let post01 = new postModel(data)
    let result = await post01.save()

    res.json({
        status:"success"
    })
})

router.get("/view",async(req,res)=>{
   
    let result = await postModel.find()
    .populate("userId","name age ph address pincode -_id")
    .exec()
    res.json(result)
})





module.exports = router