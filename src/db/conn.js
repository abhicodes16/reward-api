const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/reward-api", {
    useCreateIndex:true,
    useFindAndModify:true,
    useUnifiedTopology:true,
    useFindAndModify:false
}).then(() => {
    console.log("Connection is successful...");
}).catch((e) => {
    console.log("No connection..!");
})