const { User } = require('../models');

const userData = [
    {
        email: "email1@gmail.com",
        password: "$2y$12$U4sL7Q3U0u8hyKwJqVdiguqYsVndVZlmmAdW4pt.M5W3GBGeOz/smxs"
    },
    {
        email: 'email2@gmail.com',
        password: '$2y$12$z5Q1m2Xht5emwwU/MLiN..UkzVktwBCmNMppo6GH4Uh/4.7VwbNiG'
    },
    {
        email: 'email3@gmail.com',
        password: '$2y$12$QSC2JAqoSmTgkj11cXbQSe4WT3iBe2nr39zQyXEUL7H6mwQb573ve '
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;