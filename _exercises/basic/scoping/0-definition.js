/*

    Scoping, the most important part of JavaScript, but it's getting better!

    You have to know that scoping in JavaScript is almost a problem of the past. Only older browsers that do not
    support const and let are still prone to older structures to encapsulate data. Also classes can be used instead of
    weird looking function based structures.

    Still, it's important to know what scoping in javascript is and why it is important

 */

var a  = 1;
if (a === 1) {
    var b = 2;
}

console.log('The value of b is = ', b);

/*

    The var-statement (assignment) is not block-scoped! This means that when we assign a value in a block (if, for, while...)
    it will be assigned to the closest scope, which is the function, or when there is no function wrapping the code,
    the global scope.

    This is important to know... take the following code for example

 */

for (var c = 0; c < 10; c++) {
    console.log('Iterating C ', c);
}

console.log('Ended with ', c);

/*

    You see that c (although assigned to the for-loop) is available outside of the loop!

 */

/*

    In the early days of JavaScript (<2014) we needed to encapsulate data in closures to make sure we did not clog up
    the global space. We used namespaces, modules, and closures

 */

// in index.html
var Application = {};

// in different file
(function (parent, undefined) {

    parent['module'] = function () {

        // Private members
        var privateCounter = 0;

        function privateCounterUpper () {
            privateCounter++;
        }

        function getPrivateCounter () {
            return privateCounter;
        }

        // Public interface
        return {
            up: privateCounterUpper,
            counter: getPrivateCounter
        }

    }();

})(Application);

console.log('before up', Application.module.counter());
Application.module.up();
console.log('after up', Application.module.counter());

/*

    As you can see this is a weird looking structure, but was accepted as an elegant solution for a real problem. It made
    sure that your function definitions were not clogging the global scope (you had the Application en Module namespace),
    you could encapsulate private members and expose public ones. You could work in different files without problems.

    Still this system was hard to work with, because nobody learns to problem this way.

 */

