const router = require('express').Router();
// Import the User model from the models folder
const { Post } = require('../models');


router.get(['/', '/home'], async (req, res) => {
   

    const postData = await Post.findAll({
        attributes: [
            "id",
            "title",
            "date_created"
        ]
    })
    
    let posts = postData.map((post) =>  post.get({plain:true}));

    // if not posts add make no posts attr true;
    res.render('posts', posts ? { posts, noposts: false } : { noposts: true });
})




router.get('/login', (req, res) => {
    // If a session exists, redirect the request to the homepage
    if (req.session.logged_in) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
  });
  

module.exports = router;
