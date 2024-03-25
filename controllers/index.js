// Import just the router express
const router = require('express').Router();
// Import the index.js from 'api' folder
const apiRoutes = require('./api');
const postsRoutes = require('./posts');
const homeRoutes = require('./home');
const dashboardRoutes = require('./dashboard');
const withAuth = require('../utils/auth');

// When a request is made to the /api route, it will be directed to the index.js in the 'api' folder.
router.use('/api', apiRoutes);

router.use('/dashboard', dashboardRoutes)
router.use('/posts', withAuth, postsRoutes)
router.use('/', homeRoutes);




module.exports = router;
