const router = require('express').Router();
const { Portfolio, User } = require('../models');
const withAuth = require('../utils/auth');



router.get('/', async(req, res) => {

    res.render('homepage');

});

router.get('/watchlist', withAuth, async(req, res) => {
    try {
        // Get all users, sorted by name
        const userData = await Portfolio.findAll({
            where: {
                user_id: req.session.user_id,
            }
        });

        // Serialize user data so templates can read it
        const users = userData.map((project) => project.get({ plain: true }));

        // Pass serialized data into Handlebars.js template
        res.render('stockcarddetails', {
            users,

        });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;