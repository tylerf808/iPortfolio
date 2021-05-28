const router = require('express').Router();
const userRoutes = require('./userRoutes');
const testRoutes = require("./test")

router.use('/users', userRoutes);


module.exports = router;