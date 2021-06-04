module.exports = {
    percentageChange : (currentPrice, purchasePrice) => {
        let difference = currentPrice - purchasePrice;
        let percentage = difference / purchasePrice * 100;
        return percentage;
    }
};
