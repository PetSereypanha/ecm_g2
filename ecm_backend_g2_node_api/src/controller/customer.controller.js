
const db = require("../config/db.cofig")

const create = (req,res) => {
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