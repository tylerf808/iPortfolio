const { Portfolio } = require('../models');

const portfolioData = [
    {
        stock: 'AAPL',
        position: 110,
        shares: 30,
        user_id: 1
    },
    {
        stock: 'TSLA',
        position: 500,
        shares: 13,
        user_id: 1
    },
    {
        stock: 'AAPL',
        position: 100,
        shares: 45,
        user_id: 2
    },
    {
        stock: 'F',
        position: 14.5,
        shares: 8,
        user_id: 3
    }
]

const seedPortfolios = () => Portfolio.bulkCreate(portfolioData);

module.exports = seedPortfolios;