const router = require('express').Router();
// Import the Project model from the models folder
const { Post, Comment, User } = require('../models');

router.get('/', async (req, res) => {
    res.redirect('/');
})


router.get('/:id', async (req, res) => {
    const postData = await Post.findByPk(req.params.id, {
        include: [
            {
                model: User, // This assumes that the Post model has a direct association with User

                attributes: ["name"]
            },
            {
                model: Comment,
                include: [
                    {
                        model: User, // This assumes that the Comment model has a direct association with User // Use the alias defined in your association, if there is one
                        attributes: ["name"]
                    }
                ]
            }
        ]
    });
  

    let post = postData ? postData.get({plain: true}) : false; // Serialise

    //Check if post is posted by user and pass to handlebars
    let editPriviledges = false;
    if(post.user_id === req.session.user_id){
        editPriviledges = true;
    }
    res.render('post', { post, comments: post.comments, editPriviledges });
});


module.exports = router;
