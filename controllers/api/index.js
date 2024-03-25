const router = require('express').Router();
const userRoutes = require('./userRoutes');
const commentRoutes = require('./commentRoutes')
const postRoutes = require('./postRoutes')
const withAuth = require('../../utils/auth')



router.use('/comments', withAuth, commentRoutes);
router.use('/user', userRoutes);
router.use('/posts', postRoutes);

module.exports = router;
