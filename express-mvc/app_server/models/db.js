let mongoose = require("mongoose");
let dbURL = "mongodb://localhost:27017/PAWII-si5c";

mongoose.connect(dbURL, {
    //useNewURLParser: true
});

mongoose.connection.on("connected", () => {
    console.log("connnected to mongoDB");
});

mongoose.connection.on("error", (error) => {
    console.log("connnected error : " + error);
});

mongoose.connection.on("disconnected", () => {
    console.log("disconnnected from mongoDB");
});