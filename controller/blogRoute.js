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



module.exports=router