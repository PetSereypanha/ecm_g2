const express = require("express")

const app = express()
app.use(express.json()) //add allow body paremeter

app.get("/",(req,res)=>{ // localhost:8080/
    res.send("Hello welcome Node ")
})

require("./src/route/customer.route")(app)

// require("./src/route/user.route")(app)
// require("./src/route/product.route")(app)

app.listen(8080,()=>{
    console.log("http://localhost:8080/")
})