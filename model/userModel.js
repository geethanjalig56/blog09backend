const mongoose = require("mongoose")
const userSchema = new mongoose.Schema(
    {
        name:String,
        age:String,
        ph:String,
        address:String,
        pincode:String,
        email:String,
        pw:String
    }
)

module.exports = mongoose.model("user",userSchema)