const express = require("express")
const router = express.Router()
const usermodel1 = require("../model/userModel")
const bcrypt = require("bcryptjs")

hashPasswordGenerator = async(password01) => {
    const salt = await bcrypt.genSalt(10)
    //encryption: 
    return bcrypt.hash(password01,salt)
}

router.post("/signup", async(req,res)=>{
let {data} = {"data":req.body}
let pw = data.pw
hashPasswordGenerator(pw).then(
    (hashedpassword)=>{
        console.log(hashedpassword)
        data.pw = hashedpassword
        console.log(data)

        let usermodelobj = new usermodel1(data)
        let result = usermodelobj.save()
        res.json({status:"success"}) 

    }
)



})

router.post("/signin", async(req,res)=>{
    // let input = req.body
    // let data = await usermodel1.find(input)
    // res.json(data)
    let findemail = req.body.email
    let inputPassword = req.body.pw
    let data = await usermodel1.findOne({"email":findemail})
    if(!data)
    {
        return     res.json({status:"no user found"})

    }
   
 //   console.log(data)
    let dbPassword = data.pw
    console.log(dbPassword)
    console.log(inputPassword)
    
    const match = await bcrypt.compare(inputPassword,dbPassword)
    if(!match)
    {
        return     res.json({status:"incorrect password"})

    }
    res.json({status:"success user hai"})

    })

module.exports=router