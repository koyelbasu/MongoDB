const express = require("express");
const connectDb = require("./config/db")

const app = express();



connectDb();

app.get("/", (req, res) => {
    res.send("Done the output");
});

app.get("/products", (req, res) => {
    res.send("products");
});

module.exports = app;