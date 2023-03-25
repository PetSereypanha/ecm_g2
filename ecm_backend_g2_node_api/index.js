const express = require("express")

const app = express()

app.get("/",(req,res)=>{
    res.send("Hello welcome Node ")
})

require("./src/route/customer.route")(app)

// require("./src/route/user.route")(app)
// require("./src/route/product.route")(app)

app.listen(8081,()=>{
    console.log("http://localhost:8081/")
})