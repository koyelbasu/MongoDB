const express = require("express");
const connectDb = require("./config/db")

const app = express();
app.use(express.json)


connectDb();

app.get("/", (req, res) => {
    res.send("Done the output");
});

app.get("/products", (req, res) => {
    res.send("products");
});

app.post('/create', (req, res)=>{
    let {title, description} = req.body;

    const newNote = NoteModel.create({
        title,
        description
    });
    res.send("ok got it")
    
});


module.exports = app;

