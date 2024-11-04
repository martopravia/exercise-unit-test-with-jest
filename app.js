const sum = (a,b) => {
    return a + b
}
console.log(sum(7,3));

let oneEuroIs = {
    "JPY": 156.5, 
    "USD": 1.07, 
    "GBP": 0.87, 
}

const fromDollarToYen = (dollar) => {
    let euros = dollar / oneEuroIs.USD;
    let yenes = euros * oneEuroIs.JPY;
    return yenes;
}

const fromEuroToDollar = (euro) => {
    let dollars = euro * oneEuroIs.USD;
    return dollars;
}

const fromYenToPound = (yen) => {
    let euros = yen / oneEuroIs.JPY;
    let pounds = euros * oneEuroIs.GBP;
    return pounds;
}

console.log(fromDollarToYen(1));
console.log(fromEuroToDollar(1));
console.log(fromYenToPound(1));



module.exports = { sum, fromDollarToYen, fromEuroToDollar, fromYenToPound };