const express = require('express');
const router = express.Router();
const Post = require('../models/Post');
const shopController = require('../controllers/shop');

router.get('/', (req,res) => {
    res.send('hellopd des montages')
})

router.get('/test', (req,res) => {
    res.send('mdrlol')
})
// submit post
router.post('/', async (req, res) => { 
    const post = new Post({
        title: req.body.title,
        description: req.body.description,
    });
    try{
    const savedPost = await post.save();
    res.json(savedPost);
    }catch(err){
        res.json({ message: err});
    }
});
// specific post
router.get('/:postId', async (req,res) =>{
    try{
    const post = await Post.findById(req.params.postId);
    res.json(post);
    }catch(err){
        res.json({ message : err});
    }
});

//Delete a Post 
router.delete("/:postId", async (req, res) => {
    try{
    const removedPost = await Post.remove({_id : req.params.postId });
    res.json(removedPost);
    }catch (err){
        res.json( { message : err});
    }
})


// update a post
router.patch('/:postId', (req, res) =>{
    try{ 
        Post.updateOne( { _id: req.params.postId}, { $set: {title: req.body.title}});
        res.json(updatedPost);
    }catch(err){
        res.json( { message: err});
    }

});

// on lache le CRUD et on s ocuppe au moin de recup les info du formulaire voir d ajouter dna smongoDB

router.get("/shoppy", shopController.getIndex);

router.post("/shoppu", shopController.postIndex);


module.exports = router;