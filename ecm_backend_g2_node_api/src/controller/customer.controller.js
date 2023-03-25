


const create = (req,res) => {
    res.send("create customer")
}

const getList = (req,res) => {
    res.send("getlist customer")
}

const getOne = (req,res) => {
    res.send("get one customer")
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