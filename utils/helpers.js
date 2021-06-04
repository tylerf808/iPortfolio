module.exports = {
<<<<<<< HEAD
    percentageChange : (currentPrice, purchasePrice) => {
=======
    percentageChange: (currentPrice, purchasePrice) => {
>>>>>>> 07045cec4e66fe3ba1c9866778d0b0ea0d4738e7
        let difference = currentPrice - purchasePrice;
        let percentage = difference / purchasePrice * 100;
        return percentage;
    }
};