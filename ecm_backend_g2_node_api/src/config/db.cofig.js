const mysql = require("mysql")

const db = mysql.createConnection({
    host: "localhost",
    port : 3306,
    user: "root",
    password : "",
    database : "ecmbackeng2"
})

module.exports = db