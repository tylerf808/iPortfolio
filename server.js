const express = require('express');
const routes = require('./controllers');
const handlebars = require('express-handlebars')
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

//get routes to navigate page


app.set('view engine','handlebars')
app.engine('handlebars',handlebars({layoutsDir: __dirname +'/views/layouts',}))
app.use(express.static('public'))


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// Connect to the database before starting the Express.js server
sequelize.sync({force: true}).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
})