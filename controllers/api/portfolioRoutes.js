const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Portfolio } = require('../../models/');
const fetch = require("node-fetch");

//Create new entries into the portfolios table
router.post('/create', async(req, res) => {
    try {
        const newEntry = req.body;
        newEntry.user_id = req.session.user_id;
        newEntry.currentPrice = await fetch('https://api.polygon.io/v2/last/trade/' + req.body.stock + '?&apiKey=0Y07IGLt_i8glVpNFoyZfKjmKX2YqDgY')
            .then(function(response) {
                return response.json();
            })
            .then(function(response) {
                return response.results.p
            });
        const entryData = await Portfolio.create(newEntry);
        res.status(200).json(entryData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

//Get an entry or entries based on account
router.get('/get', async(req, res) => {
    try {
        const primaryKey = req.session.user_id;
        const portfolio = await Portfolio.findAll({ where: { user_id: primaryKey } });
        res.status(200).json(portfolio);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
})


//Delete an entry
router.delete('/delete', async(req, res) => {
    try {
        const selectedRow = await Portfolio.destroy({
            where: {
                user_id: req.session.user_id,
                stock: req.body.stock
            }
        });
        if (!selectedRow) {
            res.status(404).json({ message: 'None of that stock is owned by this account.' });
            return;
        }
        res.status(200).json(selectedRow);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
})

module.exports = router;