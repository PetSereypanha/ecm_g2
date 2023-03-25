

const customer = (app) => { // arrow function 

    app.get("/api/customer/get-list",(req,res)=> {
        res.send("Get list customer!")
    })

    app.get("/api/customer/create",(req,res)=> {
        res.send("Create customer!")
    })
    
    app.get("/api/customer/update",(req,res)=> {
        res.send("Dpdate customer!")
    })

    app.get("/api/customer/delete",(req,res)=> {
        res.send("Delete customer!")
    })
    // ......
}

module.exports = customer
