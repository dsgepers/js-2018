/*

    NaN is a number that represents not being a valid number. Yes I know... Not a Number = a Number... it's weird

 */

console.log('The type of NaN:', typeof NaN);

/*

    To check if something is NaN you use, Number.isNaN(...)

 */

/*

    Take a look at the following example... it's important to know that operating on strings might turn out just fine!

 */

const divide = function (a, b) {

    return a / b;

};

console.log('4, 2', divide(4, 2));
console.log('"4", "2"', divide("4", "2"));
console.log('"4", 2', divide("4", 2));
console.log('4, "2"', divide(4, "2"));
console.log('2, fdsq', divide(2, "fdsq"));

