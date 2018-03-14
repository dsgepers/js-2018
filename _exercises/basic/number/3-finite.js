/*

    Infinity is a special number that exceeds the maximum positive number

 */

console.log(Math.pow(10, 1000));

console.log(Infinity          ); /* Infinity */
console.log(Infinity + 1      ); /* Infinity */
console.log(Math.pow(10, 1000)); /* Infinity */
console.log(Math.log(0)       ); /* -Infinity */
console.log(1 / Infinity      ); /* 0 */

/*

    To check if a number is finite, you use the Number.isFinite(...) function

 */

console.log('is 1 finite? ', Number.isFinite(1));
console.log('is INFINITY finite? ', Number.isFinite(Infinity));