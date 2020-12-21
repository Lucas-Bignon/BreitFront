// core import
const express = require("express");
const app = express();
require('dotenv/config');
const mongoose = require('mongoose');
var bodyParser = require('body-parser');
// parse application/json
app.use(bodyParser.json());




// Way import
const postsRoute = require("./routes/post");
app.use("/post", postsRoute);

// Path directory

app.get('/', (req,res) => {
    res.send('hello boys')
})

// je commence a listen le serv

app.listen(8000);

// BDD
mongoose.connect('mongodb+srv://Master:5fWTw2FpgaIdt7aJ@cluster0.ljn8w.mongodb.net/breit?retryWrites=true&w=majority', () =>
    console.log('GET CONNECTED MY BOYYYY'));