const router = require('express').Router();
// Import the User model from the models folder
const { Post } = require('../models');


router.get('/', async (req, res) => {
   

    const postData = await Post.findAll({
        attributes: [
            "id",
            "title",
            "date_created"
        ],
        where: {
          "user_id": req.session.user_id
        }
    })
    
    let posts = postData.map((post) =>  post.get({plain:true}));

    // if not posts add make no posts attr true;
    res.render('posts', posts ? { posts, noposts: false } : { noposts: true });
})




module.exports = router;
