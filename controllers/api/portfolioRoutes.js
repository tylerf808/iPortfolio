const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Portfolio } = require('../../models/');


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

//Delete an entry
router.delete('/delete', async(req, res) => {
    try {
        const selectedRow = await Portfolio.destroy({
            where: {
                user_id: req.body.user_id,
                stock: req.body.stock
            }
        });
        if (!selectedRow) {
            res.status(404).json({ message: 'No holdings associated with this id!' });
            return;
        }
        res.status(200).json(selectedRow);
    } catch (err) {
        res.status(500).json(selectedRow);
    }
})

module.exports = router;