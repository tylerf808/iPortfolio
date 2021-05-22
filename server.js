const express = require('express');
const routes = require('./controllers');
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// Connect to the database before starting the Express.js server
sequelize.sync().then(() => {
    app.listen(PORT, () => console.log('Now listening'));
});