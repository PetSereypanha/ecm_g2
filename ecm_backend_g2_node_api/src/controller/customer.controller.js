
var list = [
    {
        id : 101,
        firstname : "Sok",
        lastname : "Dara",
        gender : "male",
        tel : "09988888"
    },
    {
        id : 102,
        firstname : "Mr",
        lastname : "Join",
        gender : "male",
        tel : "09666668"
    },
    {
        id : 103,
        firstname : "Ms",
        lastname : "Chana",
        gender : "female",
        tel : "09666668"
    }
]

const create = (req,res) => {
    // parameter (query,params,body)
    // #query parameter 
        // ex: http://localhost:8080/api/customer/get-list?name=dara&gender=male // ?name=dara (name is key, dara value)
    // #params parameter 
        // ex: http://localhost:8080/api/customer/get-list/:id  // need declare in route
        // ex: http://localhost:8080/api/customer/get-list/101 => req.params.name
    // #body parameter
        // ex: http://localhost:8080/api/customer/get-lis

    var queryParam = req.query
    var bodyParam = req.body
    res.json({
        queryParam : queryParam,
        bodyParam : bodyParam
    })
}

const getList = (req,res) => {
    // res.send("getlist customer")
    res.json({
        list_customer : list,
        total_record : 2,
    })
}

const getOne = (req,res) => {
    var id = req.query.id; // get query 
    var id101 = req.params.id // get with params
    console.log("id:" , id)
    console.log("id101:" , id101)
    var listTmp = list.filter((item,index)=> item.id == id)
    res.json({
        list_customer : listTmp
    })
}

const update = (req,res) => {
    res.send("update customer")
}

const remove = (req,res) => {
    res.send("remove customer")
}

module.exports = {
    create,
    getList,
    getOne,
    update,
    remove
}