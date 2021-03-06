const router = require("express").Router();
const bcrypt = require("bcrypt");
const { User, Portfolio } = require("../../models");

// CREATE a new user
router.post("/create", async(req, res) => {
    try {
        const newUser = req.body;

        newUser.password = await bcrypt.hash(req.body.password, 10);

        const userData = await User.create(newUser);


        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;

            res.json({ user: userData, message: 'You are now logged in!' });
        });
    } catch (err) {
        res.status(400).json(err);
    }
});

//Login route
router.post('/login', async(req, res) => {
    try {
        const userData = await User.findOne({ where: { email: req.body.email } });

        if (!userData) {
            res
                .status(400)
                .json({ message: 'Incorrect email or password, please try again' });
            return;
        }

        const validPassword = await bcrypt.compare(req.body.password, userData.password);

        if (!validPassword) {
            res
                .status(400)
                .json({ message: 'Incorrect email or password, please try again' });
            return;
        }

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;

            res.json({ user: userData, message: 'You are now logged in!' });
        });

    } catch (err) {
        res.status(400).json(err);
    }
});

// GET a user
router.get("/get", async(req, res) => {
    try {
        const userData = await User.findOne({
            where: { email: req.body.email },
            include: {
                model: Portfolio,
            },
            exclude: {
                password,
            },
        });
        res.status(200).json(userData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.post("/logout", (req, res) => {
    if (req.session.logged_in) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

module.exports = router;