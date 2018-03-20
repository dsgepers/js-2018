/*

    As an exercise, define a calculator module with an add, substract, divide, and multiple method.
    As an extra, please add a history object that keeps track of the operations that are performed, limiting at 10.


 */
var Calculator = {};

// in different file
(function (parent, undefined) {

    parent['module'] = function () {
        
        var history = [];

        var add = {
            perform: function (a,b) { log(this.output(a,b)); return this.operation(a,b) },
            operation : function (a, b) { return a + b; },
            output : function (a, b) {  return a + "+" + b + "=" + this.operation(a,b); }
        }
        var subtract = {
            perform: function (a,b) { log(this.output(a,b)); return this.operation(a,b) },
            operation : function (a, b) { return a - b; },
            output : function (a, b) {  return a + "-" + b + "=" + this.operation(a,b); }
        }
        var divide = {
            perform: function (a,b) { log(this.output(a,b)); return this.operation(a,b) },
            operation : function (a, b) { return a / b; },
            output : function (a, b) {  return a + "/" + b + "=" + this.operation(a,b);; }
        }
        var multiply = {
            perform: function (a,b) { log(this.output(a,b)); return this.operation(a,b) },
            operation : function (a, b) { return a * b; },
            output : function (a, b) {  return a + "x" + b + "=" + this.operation(a,b);; }
        }

        var log = function (result) {
            history.push(result);
            if (history.length > 10) { history.shift(); }
        }

        // Public interface
        return {
            add: add,
            subtract: subtract,
            divide: divide,
            multiply: multiply,
            log: log,
            history: history
        }

    }();


})(Calculator);

Calculator.module.add.perform(5, 4);
Calculator.module.subtract.perform(5, 4);
Calculator.module.multiply.perform(5, 4);
Calculator.module.divide.perform(5, 4);
Calculator.module.add.perform(4, 5);
Calculator.module.subtract.perform(4, 5);
Calculator.module.multiply.perform(4, 5);
Calculator.module.divide.perform(4, 5);
Calculator.module.add.perform(14,5);
Calculator.module.subtract.perform(14,5);
Calculator.module.multiply.perform(14,5);
Calculator.module.divide.perform(14,5);
Calculator.module.add.perform(2342, 16);
Calculator.module.subtract.perform(2342, 16);
Calculator.module.multiply.perform(2342, 16);
Calculator.module.divide.perform(2342, 16);
console.log(Calculator.module.history);
