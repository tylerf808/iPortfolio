const express = require('express');
const routes = require('./controllers');
const handlebars = require('express-handlebars')
const sequelize = require('./config/connection');
const handlebars = require('express-handlebars');

const app = express();
const PORT = process.env.PORT || 3001;


//get routes to navigate page
app.get('/', (req, res) => { res.render('homepage', { layout: 'main' }) })
app.get('/watchlist', (req, res) => { res.render('stockcarddetails', { layout: 'main' }) })


app.set('view engine', 'handlebars')
app.engine('handlebars', handlebars({ layoutsDir: __dirname + '/views/layouts', }))
app.use(express.static('public'))


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// Connect to the database before starting the Express.js server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
})