
// //hard coded for testing percentage change
// let currentPrice = 11 
// let purchasePrice = 10.45

// percentageChange = (currentPrice, purchasePrice) => {
//     let difference = currentPrice - purchasePrice;
//     let percentage = difference / purchasePrice * 100;
// console.log(`${percentage.toFixed(2)}%`)

// }

// percentageChange(currentPrice,purchasePrice);



module.exports = {
    percentageChange = (currentPrice, purchasePrice) => {
        let difference = currentPrice - purchasePrice;
        let percentage = difference / purchasePrice * 100;
    console.log(`${percentage.toFixed(2)}%`)
    
    }
    };


