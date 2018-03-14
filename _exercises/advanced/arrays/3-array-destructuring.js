/*

    Destructuring arrays is fun! You can use it like this

    const list = [ 1, 2 ];
    const [a, b] = list;

    const addToFirst = ([a, ...rest], b) => [a + b, ...rest];

 */
const list = [1,2,3,4];

const addToFirst = ([a, ...rest], b) => [a + b, ...rest];

console.log(addToFirst(list, 1));

/*

    1. define a function that gets the first element of an array by using object destructuring

 */

/*

    2. calculate the sum of numbers from the list by using recursion and object destructuring

 */