const express = require("express");
const connectDb = require("./config/db")

const app = express();
app.use(express.json)


connectDb();

app.get("/", (req, res) => {
    res.send("Done the output");
});

app.get("/product", (req, res) => {
    res.send("products");
});

app.post('/create', async (req, res)=>{
    let {title, description} = req.body;

    const newNote = await NoteModel.create({
        title,
        description
    });
    res.send({
        success:true,
        message: "Note created successfully",
        data: newNote,
    });
    
});


module.exports = app;

