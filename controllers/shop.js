const express = require('express');
const router = express.Router();
const Post = require('../models/Post');
const shopController = require('../controllers/shop');

const getIndex = (req, res) => {
    res.render('index');
}

const postIndex = async (req, res) =>{
    res.render('index');
    const post = new Post({
        title: req.body.title,
        description: req.body.description,
    });
    try{
    const savedPost = await post.save();
    res.json(savedPost);
    console.log("success");
        res.redirect("/");
    }catch(err){
        res.json({ message: err});
    }
}   



const getCart = (req, res) =>{
    res.render("cart");
}

module.exports = {
    getIndex: getIndex,
    getCart: getCart,
    postIndex: postIndex,
}
