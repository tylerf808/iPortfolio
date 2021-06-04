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