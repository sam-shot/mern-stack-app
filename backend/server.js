const express = require("express");
const dotenv = require("dotenv");
const { chats } = require("./data/data");
const cors = require('cors');
const app = express();


app.use(cors());
dotenv.config();
app.get('/', (req, res) => {
    res.send("API is running");
});

app.get('/api/chat', (req, res) => {
    res.send(chats);
});

app.get('/api/chat/:id', (req, res) => {
    // console.log(req.params.id);

    const singleChat = chats.find((e) => e._id === req.params.id);
    res.send(singleChat);
});

const PORT = process.env.PORT || 5000;

app.listen(5000, console.log('Server Started on Port', PORT));