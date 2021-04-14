const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
    username : {
        type : String,
        required : true,
        unique : true,
    },
    fullname : {
        type : String,
        required : true,
    },
    clubs : {
        type : Number,
    },
    rewards : {
        type : Number,
    },
    deals : {
        type : Number,
    },

})

const User = new mongoose.model('User', userSchema);

module.exports = User;