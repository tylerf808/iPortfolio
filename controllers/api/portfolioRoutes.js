const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Portfolio, User } = require('../../models/');


//Create new entries into the portfolios table
router.post('/create', async(req, res) => {
    try {
        const newEntry = req.body;
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
        const user = await User.findOne({ where: { email: req.body.email } });
        const userKey = user.dataValues.id;
        const portfolio = await Portfolio.findAll({ where: { user_id: userKey } });
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