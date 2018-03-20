/*

    Create the calculator functions, add, substract, multiply, and divide.

    Make sure you can't divide by zero.

 */
const add = function (a,b) { return a + b; }
const subtract = function (a,b) { return a - b; }
const multiply = function (a,b) { return a * b; }
const divide = function (a,b) { 
    if (b == 0) { return false; }
    return a / b; 
}
