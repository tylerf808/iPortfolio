const router = require('express').Router();
const { User } = require('../../models');

router.post('/', (req, res) => {
    try {
        const userData = User.create({
            email: req.body.email,
            password: req.body.password,
        });
        res.json(userData);
    } catch (err) {
        res.status(400).json(err);
    }
})

module.exports = router;