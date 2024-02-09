const express = require("express")
const router = express.Router()
const usermodel1 = require("../model/userModel")

router.post("/signup", async(req,res)=>{
let data = req.body
let usermodelobj = new usermodel1(data)
let result = await usermodelobj.save()
res.json({status:"success"}) 
})



module.exports=router