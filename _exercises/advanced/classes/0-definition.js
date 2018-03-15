/*

    The first thing you need to know about classes in JavaScript is that they aren't real classes. It's just not real.
    It's not what you would expect coming from a OO background, just... don't think it'll be the same.

    Classes in JavaScript is syntactic sugar for the prototypal inheritance system they've put in place long ago. To
    be fair, the prototypal system works. It does a great job at inheritance, especially when operating in the dynamic
    nature of JavaScript. However, it's something people are not used to... so they decided to include classes into
    ES6 to simulate the behavior that developers are used to.

 */

class Shape {

    constructor (id, x, y) {
        this.id = id;
        this.move(x, y);
    }

    move (x, y) {
        this.x = x;
        this.y = y;
    }

}

const obj = new Shape(1, 0, 0);
obj.move(5,5);

console.log(obj.id);
console.log(obj.x);
console.log(obj.y);

/*

    Note that in this example, there are no private or public members. Your basic encapsulation is not available. This
    is already one of the major issues with classes in JavaScript... where do you define your members? You don't...
    just start using them... this already feels weird, right?

    Still, this notation is arguably better than the legacy ES5 code:

 */

var ES5Shape = function (id, x, y) {
    this.id = id;
    this.move(x, y);
};

ES5Shape.prototype.move = function (x, y) {
    this.x = x;
    this.y = y;
};

/*

    With prototypal inheritance, you define functions and members in a sequential manner instead of wrapping them in a
    class. You immediately notice that structure wise, the ES5 solution is equivalent as te ES6 Class solution, you
    have a construction (a function) and a method (move) that is put on the function prototype.

    It looks a bit weird, but in essence, nothing has changed.

 */
