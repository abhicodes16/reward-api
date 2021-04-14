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
        type : String,
    },
    rewards : {
        type : String,
    },
    deals : {
        type : String,
    },

})

const User = new mongoose.model('User', userSchema);

module.exports = User;