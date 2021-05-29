const { User } = require('../models');

const userData = [
    {
        email: "email1@gmail.com",
        password: "password1"
    },
    {
        email: 'email2@gmail.com',
        password: 'password2'
    },
    {
        email: 'email3@gmail.com',
        password: 'password3'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;