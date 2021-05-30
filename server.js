const express = require('express');
const routes = require('./controllers');
const exphbs = require('express-handlebars')
const helpers = require('./utils/helpers');
const sequelize = require('./config/connection');
// const portfolio = require("./seeds/portfolioData")

const app = express();
const PORT = process.env.PORT || 3001;


// //get routes to navigate page
// app.get('/', (req, res) => { res.render('homepage', { layout: 'main' }) })
// // app.get('/watchlist', (req, res) => { res.render('stockcarddetails', { layout: 'main' }) })

const hbs = exphbs.create({ helpers });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// app.set('view engine', 'handlebars')
// app.engine('handlebars', handlebars({ layoutsDir: __dirname + '/views/layouts', }))
// app.use(express.static('public'))


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);
// Connect to the database before starting the Express.js server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
})
