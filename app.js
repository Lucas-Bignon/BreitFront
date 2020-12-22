// core import
const express = require("express");
const app = express();
require('dotenv/config');
const path = require('path');
const mongoose = require('mongoose');
var bodyParser = require('body-parser');
// parse application/json
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set("view engine", "pug");
app.set('views', './templates');
app.use(express.static(path.join(__dirname, './static')));
const dirname = "C:\Users\Coal\Desktop\Scarlett\BreitFront\static";


// Way import
const postsRoute = require("./routes/post");
app.use("/post", postsRoute);
const shopRoutes = require("./routes/shop");
app.use("/", shopRoutes);





// Path directory

app.get('/', (req,res) => {
    res.send('Bonjour vous êtes sur page sommaire du projet, veillez prendre connaissance du READ.md');
});

// je commence a listen le serv

app.listen(8000);

// BDD
mongoose.connect('mongodb+srv://Master:5fWTw2FpgaIdt7aJ@cluster0.ljn8w.mongodb.net/breit?retryWrites=true&w=majority', () =>
    console.log('GET CONNECTED MY BOYYYY'));