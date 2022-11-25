const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: [true, "Name is Requires"],
        trim: true,
        maxlenght: [25, "Name must be only 25 Char length"],

    },
    email:{
        type: String,
        require: [true, "Email is required"],
        unique: true,

    }
}

)
module.exports = mongoose.model("user", userSchema)