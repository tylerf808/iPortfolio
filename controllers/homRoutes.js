const router = require('express').Router();
const { Portfolio } = require('../models');
const withAuth = require('../utils/auth');



router.get('/', async(req, res) => {

    try {
        // Pass serialized data and session flag into template
        res.render('homepage', {
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }

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
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;