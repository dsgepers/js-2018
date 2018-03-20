
/*

    Use the following list for the exercises

 */

const list = [1,2,3,4,5,6];

/*

    1. Use a for loop to log every item in the array

 */
list.forEach((item) => console.log(item));
/*

    2. Use a for loop to filter all even numbers from the array

 */

const even = [];

list.forEach((item) => { if (item % 2 == 0 ){ even.push(item)} });

/*

    3. Use a for loop to square every item in the even list.

 */

const squared = [];
list.forEach((item) => { squared.push(Math.pow(2, item)) });

console.log(even, squared);