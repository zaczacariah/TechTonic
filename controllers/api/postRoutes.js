const router = require('express').Router();
// Import the Project model from the models folder
const { Post } = require('../../models');

router.post('/', async (req, res) => {
    const { title, content } = req.body;

    if(!title || !content){
        res.status(400).json({ message: "No Title or Content"});
        return;
    }

    try {
        
        const newPost = await Post.create({
            title,
            content,
            user_id: req.session.user_id
        });

        res.status(201).json(newPost)

    } catch (error) {
        res.json(error);
    }
});

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

router.put('/', async (req, res) => {
    const { id, title, content} = req.body;

    //check the editor is the owner, not fully secure but its somethin
    const { user_id } = await Post.findByPk(id, {
        attributes: [
            "user_id"
        ]
    });


    if(req.session.user_id !== user_id){
        res.status(400).json({ message: "You do not have permission to edit this post"});
        return;
    }

    try {
        const updatedPost = await Post.update(
            {
                title: title,
                content: content
            },
            {
                where: {
                    id: id 
                }
            }
        );

        res.status(202).json({ message: "Post Updated"});

    } catch (error) {
        res.status(400).json(error);
    }
})

module.exports = router;
