// business LOGIC
const User = require("../models/userModels")
exports.home = (req, res) => {
    console.log("Inside home");
    res.send("Hello from Pramod Reddy")
}

exports.createUser = async(req, res) => {
    try{
        const { name, email} = req.body
        //To check all the details 
        if(!name || !email){
            throw new Error("Name and Email are required")
        }
        const userExists = await User.findOne( {email})
        if(userExists) {
            throw new Error("Email already exists")
        }
        // inserting in to DB
        const user = await User.create( {name, email})
        res.status(201).json({
            success: true,
            message: "User Created successfully",
            user
        })

    }
    catch(error){
        console.log(error);

    }
}

exports.getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json({
            success: true,
            users
        })


    }catch (error) {
        console.log(error);
        res.status(401).json({
            success: false,
            message: error.message

        })
    }
}

exports.editUser = async (req, res) => {
    try {
        const user =  await User.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).json({
            success: true,
            message: "User updated Successflly",
            user
        })
    } catch(error){
        console.log(error);
        res.status(401).json({
            success: false,
            message: error.message
        })
    }
}

exports.deleteUser = async (req, res) => {
    try {
        const user =  await User.findByIdAndDelete(req.params.id, req.body)
        res.status(200).json({
            success: true,
            message: "User deleted Successflly",
            user
        })
    } catch(error){
        console.log(error);
        res.status(401).json({
            success: false,
            message: error.message
        })
    }
}