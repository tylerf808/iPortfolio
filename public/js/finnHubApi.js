// const searchbtn = document.querySelector('#searchBtn');

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


// last close price

const lastClosePrice = (paramArray) => {
    paramArray.forEach(ticker => {
        finnhubClient.quote(ticker, (error, data, response) => {
            console.log(data.pc)
        });
    })
}

lastClosePrice(tickerArray);

//Company news from user search criteria 
const currentNews = () => {
    finnhubClient.companyNews("TSLA", "2021-05-22", "2021-05-24", (error, data, response) => {
        if (error) {
            console.error(error);
        } else {
            console.log(response.body[0].headline + '\n' + response.body[0].source + '\n' + response.body[0].image + '\n' + response.body[0].summary)
        }
    });
};


// front end search critera function to search news. 

// searchBtn.addEventListener('click', searchCriteria)
// function searchCriteria() {
//     let stockName = document.querySelector('#stockName').value;
//     let beginDate = document.querySelector('#beginDate').value
//     let endDate = document.querySelector('#endDate').value
//     console.log();
//     currentNews(stockName, beginDate, endDate)
// }


// const upcomingIpo = () => {request('https://finnhub.io/api/v1/calendar/ipo?from=2020-01-01&to=2020-04-30&token=' + apiKey, { json: true }, (err, res, body) => {
//   if (err) { return console.log(err); }
//   console.log(res.body.ipoCalendar);
// })};

currentNews();
// upcomingIpo();
