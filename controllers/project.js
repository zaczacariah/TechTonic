const router = require('express').Router();
// Import the User model from the models folder
const { User } = require('../models');



router.get('/:id', async (req, res) => {
   
        // const projectData = await Project.findByPk(req.params.id, {
        //     include: [
        //         {
        //             model: User,
        //             attributes: [
        //                 "name"
        //             ]            
        //         }
        //     ]
        // });

        // if(!projectData){
        //     res.status(404).json();
        // }
  
        // const project = projectData.get({plain:true});
        // console.log(project)
        // res.render('project', { project });
  


})

module.exports = router;
