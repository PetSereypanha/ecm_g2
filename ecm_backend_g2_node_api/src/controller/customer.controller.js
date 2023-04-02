
const db = require("../config/db.cofig")

const create = (req,res) => {
    var body = req.body;
    var sqlInsert = "INSERT INTO customer (firstname,lastname,gender,username,password) VALUES (?,?,?,?,?)"
    var paramInsert = [body.firstname, body.lastname, body.gender, body.username, body.password]
    db.query(sqlInsert,paramInsert,(error,rows)=>{
        if(error){
            res.json({
                error : true,
                message : error
            })
        }else{
            res.json({
                message : "Customer insert success!",
                data : rows
            })
        }
    })
}

const getList = (req,res) => {
    // db.query("sql statements",()=>{})
    db.query("SELECT * FROM customer;",(error,rows)=>{
        if(error){ //mean has some eorre
            res.json({
                error : true,
                message : error
            })
        }else{ // work well , rows data from table 
            res.json({
                list : rows,
            })
        }
    })
}

const getOne = (req,res) => {
    var customer_id = req.params.id
    var sql = "SELECT * FROM customer WHERE customer_id = ?"
    var sqlParams = [customer_id]
    db.query(sql,sqlParams,(error,rows)=>{
        if(error){
            res.json({
                error : true,
                message : error
            })
        }else{
            res.json({
                list: rows
            })
        }
    })
}

const update = (req,res) => {
   var body = req.body
   var sql = "UPDATE customer SET firstname=? , lastname=?, gender=?, password=? WHERE customer_id = ?"
   var sqlParams = [body.firstname, body.lastname, body.gender, body.password, body.customer_id]
   db.query(sql,sqlParams,(error,rows)=>{
        if(error){
            res.json({
                error : true,
                message : error
            })
        }else{
            res.json({
                message : "Customer update success!",
                data : rows
            })
        }
   })
}

const remove = (req,res) => {
    var customer_id = req.params.id
    var sql = "DELETE FROM customer WHERE customer_id = ?"
    var sqlParams = [customer_id]
    db.query(sql,sqlParams,(error,rows)=>{
        if(error){
            res.json({
                error : true,
                message : error
            })
        }else{
            res.json({
                message: "Customer delete success!",
                data : rows
            })
        }
    })
}

module.exports = {
    create,
    getList,
    getOne,
    update,
    remove
}