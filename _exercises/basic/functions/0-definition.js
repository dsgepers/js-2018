/*

    The most important building block of JavaScript is the function. It is a versatile structure that has a lot to
    offer. The most important part you need to understand about functions in javascript is that they are also values!

 */

function add (x, y) {
    return x + y;
}

/*

    This is the most known syntax for the definition of a function, but it is not the only one. We notice here that
    a function can have multiple parameters (x, y), but has one single return statement (a number in this case).

 */

const multiply = function (x, y) {
  return x * y;
};

/*

    Another way to define a function is by storing an anonymous function into a variable. Note that this is exactly the
    same as the first example. I prefer this method for teaching because it reminds you that a function is actually
    just a variable, this will become more and more important in other sections.

 */

