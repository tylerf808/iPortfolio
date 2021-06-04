module.exports = {
<<<<<<< HEAD
    percentageChange: (currentPrice, purchasePrice) => {
=======

    percentageChange : (currentPrice, purchasePrice) => {

>>>>>>> eb94228a4952054be247db0877520b3c14023d5c
        let difference = currentPrice - purchasePrice;
        let percentage = difference / purchasePrice * 100;
        return percentage;
    }
};
