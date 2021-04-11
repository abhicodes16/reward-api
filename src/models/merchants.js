const mongoose = require("mongoose");
const validator = require("validator");

const merchantSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
    },
    address : {
        type : String,
        require: true
    },
    points : {
        type : Number,
    }
})

//we will create a new collection
const Merchants = new mongoose.model('Merchants', merchantSchema);

module.exports = Merchants;