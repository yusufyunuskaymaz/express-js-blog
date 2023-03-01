const express = require("express")
const app = express()
const articleRouter = require("./routes/articles")
const router = express.Router()

app.set("view engine","ejs")

app.use("/articles", articleRouter)

app.get("/", (req,res)=>{
    const articles = [{
        title :"Test article",
    }]
    res.render("index", {articles: "merhaba"})
})

app.listen(3000)