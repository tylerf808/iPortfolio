const finnhub = require('finnhub');
const api_key = finnhub.ApiClient.instance.authentications['api_key'];
api_key.apiKey = "c2ki7haad3i96dg8bltg"
const finnhubClient = new finnhub.DefaultApi()


//Call the API to return the portfolio of the logged in user and push the stock tickers into an array
const getStocks = async() => {

    const response = await fetch('/api/portfolios/get', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    })
    if (response.ok) {
        console.log(response.json());
    } else {
        alert(response.statusText);
    }

};

//Quote
const updatePrices = (paramArray) => {
    setInterval(function() {
        paramArray.forEach(ticker => {
            finnhubClient.quote(ticker, (error, data, response) => {
                console.log(data.c);
            })
        })
    }, 3000);
}

// last close price
const lastClosePrice = (paramArray) => {
    paramArray.forEach(ticker => {
        finnhubClient.quote(ticker, (error, data, response) => {
            console.log(data.pc)
        });
    })
}

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