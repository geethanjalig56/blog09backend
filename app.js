const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const blogrouter = require("./controller/blogRoute")
const postRouter = require("./controller/postRouter")
const app = express()
app.use(express.json())
app.use(cors())

app.use("/api/blog",blogrouter)
app.use("/api/post",postRouter)

mongoose.connect("mongodb+srv://geethanjali2001:ammu2001@cluster0.iwq8qez.mongodb.net/blogDb?retryWrites=true&w=majority",{useNewUrlParser:true})
app.listen(3002, ()=>{
    console.log("yep server running")
})