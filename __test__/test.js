const {sum, fromDollarToYen, fromYenToPound, fromEuroToDollar} = require('../app.js')

test('adds 14 + 9 to equal 23',() => {
    let total = sum(14,9);
    expect(total).toBe(23);
});

test('1 dolar debe de ser 146.26168 yenes', () => {
    const yenes = fromDollarToYen(10);
    const expected = (10/1.07)*156.5;
    expect(yenes).toBe(expected);
});


test('1 yen debe de ser 0.00555 pounds', () => {
    const pounds = fromYenToPound(10);
    const expected = (10/156.5)*0.87;
    expect(pounds).toBe(expected);
});

test('1 euro debe de ser 1.07 dolares', () =>{
    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5 * 1.07;
    expect(dollars).toBe(expected);
});



