const express = require("express")
// const Article = require('./../models/article')
const router = express.Router()

router.get("/new",(req,res)=>{
    res.render("articles/new", { article: "new Article()" })
})

module.exports = router
