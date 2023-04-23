const isEmptyOrNull = (value) => {
    if(value == null || value == ""){
        return true
    }
    return false
}

const isEmail = (value) => {

}

module.exports = {
    isEmptyOrNull,
    isEmail
}