/*

    As an exercise, define a calculator module with an add, substract, divide, and multiple method.
    As an extra, please add a history object that keeps track of the operations that are performed, limiting at 10.


 */
var Calculator = {};

// in different file
(function (parent, undefined) {

    parent['module'] = function () {

        // Private members
        var display = 0;

        var history = [];

        function add (number) {
            var start = display;
            var result = display += number;
            addHistory(start, number, "+", result);
            return result;
        }

        function subtract (number) {
            var start = display;
            var result = display -= number;
            addHistory(start, number, "-", result);
            return result;
        }

        function divideBy (number) {
            
            var start = display;
            var result = display = display / number;;
            addHistory(start, number, "/", result);
            return result;
        }

        function multiplyBy (number) {
            
            var start = display;
            var result = display = display * number;;
            addHistory(start, number, "x", result);
            return result;
        }

        function result () {
            return display;
        }

        function addHistory (x, y, operator, result) {
            history.push(x + operator + y + "=" + result);
            if (history.length > 10) {
                history.shift();
            }
        }

        function reset () {
            history = [];
            display = 0;
        }

        // Public interface
        return {
            add: add,
            subtract: subtract,
            divide: divideBy,
            multiply: multiplyBy,
            history: history,
            display: result,
            reset: reset,
        }

    }();

})(Calculator);

Calculator.module.add(5);
Calculator.module.add(2);
Calculator.module.add(1);
Calculator.module.add(1);
Calculator.module.multiply(6);
Calculator.module.divide(2);
Calculator.module.subtract(7);
Calculator.module.add(5);
Calculator.module.add(2);
Calculator.module.add(1);
Calculator.module.add(1);
Calculator.module.multiply(6);
Calculator.module.divide(2);
Calculator.module.subtract(7);
console.log(Calculator.module.history);