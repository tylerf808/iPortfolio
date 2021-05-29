const sequelize = require('../config/connection');
const seedUsers = require('./userData');
const seedPortfolios = require('./portfolioData');

const seedAll = async () => {
    await sequelize.sync({ force: true });

    await seedUsers();

    await seedPortfolios();

    process.exit(0);
};

seedAll();