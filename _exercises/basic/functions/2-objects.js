/*

    1. the calculator

    As stated in exercise 0, javascript only handles one return statement. But you can return objects!

    You can also define functions inside a function. In this exercise we will create a calculator object when an
    input of two parameters is provided. Use an object to return an interface (object of functions)

 */


const calculator = function (x, y) {

    var a = x;
    var b = y;
    return {
        add: function () { return a + b; },
        subtract: function () { return a - b; },
        multiply: function () { return a * b; },
        divide: function () { 
            if (b == 0) { return false; }
            return a / b; 
        }
    };
};

console.log('Add: ', calculator(2, 1).add());
console.log('Subtract: ', calculator(2, 1).subtract());
console.log('Multiply: ', calculator(2, 1).multiply());
console.log('Divide: ', calculator(2, 1).divide());

/*

    2. parameters by reference

    Objects that are passed to a function are passed by reference, it is important to know this! This can cause
    unwanted side effects

 */

const x = { y: 1 };

const change = function (obj) {
    obj.y = 2;
};

change(x);

console.log(x);