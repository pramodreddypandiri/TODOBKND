// business LOGIC
const User = require("../models/userModels")
exports.home = (req, res) => {
    res.send("Hello from Pramod Reddy")
}

exports.createUser = (req, res) => {
    try{
        const { name, email} = req.body
        //
    }
    catch(error){

    }
}