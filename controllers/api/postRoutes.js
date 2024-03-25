const router = require('express').Router();
// Import the Project model from the models folder
const { Post } = require('../../models');

router.delete('/', async (req, res) => {
    const { post_id } = req.body;


    if(!post_id){
        res.status(400).json( { message: "No Post Id"});
        return;
    } 

    try{
        const deletedPost = await Post.destroy({
            where: {
                id: post_id
            }          
        })

        res.status(410).json(deletedPost);

    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;
