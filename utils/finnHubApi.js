const request = require('request');

const tickerArray = ["AAPL", "TSLA", "GOOG"]; //test array


const finnhub = require('finnhub');

const api_key = finnhub.ApiClient.instance.authentications['api_key'];
api_key.apiKey = "c2ki7haad3i96dg8bltg"
const finnhubClient = new finnhub.DefaultApi()

//Quote
const updatePrices = (paramArray) => {
    setInterval(function () {
        paramArray.forEach(ticker => {
            finnhubClient.quote(ticker, (error, data, response) => {
                console.log(data.c);
            })
        })
    }, 3000);
}

updatePrices(tickerArray);


//Company news
const currentNews = () => {
    finnhubClient.companyNews("AAPL", "2021-05-22", "2021-05-24", (error, data, response) => {
        if (error) {
            console.error(error);
        } else {
            console.log(data)
        }
    });};


// const upcomingIpo = () => {request('https://finnhub.io/api/v1/calendar/ipo?from=2020-01-01&to=2020-04-30&token=' + apiKey, { json: true }, (err, res, body) => {
//   if (err) { return console.log(err); }
//   console.log(res.body.ipoCalendar);
// })};

currentNews();
// upcomingIpo();
