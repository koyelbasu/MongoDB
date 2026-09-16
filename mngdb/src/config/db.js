const mongoose = require("mongoose");

const connectDb = async () => {
    try {
        await mongoose.connect(
            "mongodb+srv://koyelbasu2006_db_user:OM2PM9vG2HOLtm7e@cohot-cluster.5gwvuyf.mongodb.net/"
        );
        console.log("mngdb connected");
    } catch (error) {
        console.log("error while connecting db", error);

    }
};

module.exports = connectDb;