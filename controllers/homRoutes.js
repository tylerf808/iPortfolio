const router = require('express').Router();
const { Portfolio } = require('../models');
const withAuth = require('../utils/auth');
const updatePrices = require('../utils/finnHubApi');

router.get('/', async(req, res) => {

    try {

        res.render('homepage', {
            logged_in: req.session.logged_in
        });

    } catch (err) {
        res.status(500).json(err);
    }

});

router.get('/watchlist', withAuth, async(req, res) => {
    try {
        // Get all stocks based on logged in user
        const userData = await Portfolio.findAll({
            where: {
                user_id: req.session.user_id,
            }
        });


        // Serialize stock data so templates can read it
        const users = userData.map((stock) => { stock.get({ plain: true }) });

        // Pass serialized data into stockcarddetails template
        res.render('stockcarddetails', {
            users,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;