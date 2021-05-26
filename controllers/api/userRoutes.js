const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../../models');

// CREATE a new user
router.post('/create', async(req, res) => {
    try {
        const newUser = req.body;

        newUser.password = await bcrypt.hash(req.body.password, 10);

        const userData = await User.create(newUser);

        res.status(200).json(userData);
    } catch (err) {
        res.status(400).json(err);
    }
});

// Log in
router.post('/login', async(req, res) => {
    try {
        const userData = await User.findOne({ where: { email: req.body.email } });

        if (!userData) {
            res.status(404).json({ message: 'Login failed. Please try again!' });
            return;
        }

        const validPassword = await bcrypt.compare(
            req.body.password,
            userData.password
        );

        if (!validPassword) {
            res.status(400).json({ message: 'Login failed. Please try again!' });
            return;
        }

        res.status(200).json({ message: 'You are now logged in!' });
    } catch (err) {
        res.status(500).json(err);
    }
});

// GET a user
router.get('/:id', async(req, res) => {
    try {
        const userData = await User.findByPk(req.params.id);
        if (!userData) {
            res.status(404).json({ message: 'Not logged in.' });
            return;
        }
        res.status(200).json(userData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// UPDATE a user
router.put('/:id', async(req, res) => {
    try {
        const userData = await User.findOne({
            where: { email: req.body.email, }
        });

        if (!userData) {
            res.status(404).json({ message: 'Not logged in.' });
            return;
        }

        const validPassword = await bcrypt.compare(
            req.body.password,
            userData.password
        );

        if (!validPassword) {
            res.status(400).json({ message: 'Invalid password!' });
            return;
        }

        const loggedInUser = await User.update(req.body, {
            where: {
                id: req.params.id,
            },
        });

        res.status(200).json(loggedInUser);
    } catch (err) {
        res.status(500).json(err);
    }
});

// DELETE a user
router.delete('/:id', async(req, res) => {
    try {
        let userData = await User.findOne({ where: { email: req.body.email } });

        if (!userData) {
            res.status(404).json({ message: 'No user with this id!' });
            return;
        }

        const validPassword = await bcrypt.compare(
            req.body.password,
            userData.password
        );

        if (!validPassword) {
            res.status(400).json({ message: 'Invalid password!' });
            return;
        }

        userData = await User.destroy({
            where: {
                id: userData.id,
            },
        });

        res.status(200).json({ message: 'Success! Account deleted.' });

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;