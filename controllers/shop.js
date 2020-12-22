const Post = require('../models/Post');

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
    const savedPost = await post.save(fs.writeFile(p, JSON.stringify(this), err => {
        if (err) console.log(err);
    }));
    res.json(savedPost);
    res.redirect("/")
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
