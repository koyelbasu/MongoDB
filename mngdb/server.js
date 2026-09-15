const express = require("express");
const mongoose = require("mongoose")

const app = express();

const connectDb = () =>{
    mongoose.connect(
        "mongodb+srv://koyelbasu2006_db_user:OM2PM9vG2HOLtm7e@cohot-cluster.5gwvuyf.mongodb.net/"
    );
    console.log("mngdb connected");
    
};

app.get("/", (req, res)=>{
    res.send("Done");
})

app.listen(600, () => {
    console.log("Server is running on port 600");
    
});