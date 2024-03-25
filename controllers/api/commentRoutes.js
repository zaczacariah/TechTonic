const router = require('express').Router();
// Import the Project model from the models folder
const { Comment } = require('../../models');

router.post('/', async (req, res) => {
    const { content, post_id } = req.body;
    
    console.log(req.body)
    if(!content){
        res.status(400).json( { message: "No Comment Content"});
        return;
    } 

    try{
        const newComment = await Comment.create({
            content,
            post_id,
            user_id: req.session.user_id //need to find a way to get user_id
        })

        res.status(201).json(newComment);

    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;
