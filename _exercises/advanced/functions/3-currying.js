/*

    The basic principle is simple

    function (x, y) { return x + y }

    can be written as

    function (x) {
        return function (y) {
            return x + y;
        }
    }

    Why is this relevant? Well, sometimes another function will fill in your blanks! Consider the next exercise:

 */

/*

    1. Create a filter function that uses a partial name (first name).
    Note that the code here does not work... you need to make it work ;-)

 */

const customers = require('../../../data/customers');

const byName = (partial) => {  };

const filterByName = (customers, partial) => customers.filter(byName/*...*/);

console.log(filterByName(customers, 'Cher'));

/*

    This is the act of currying... applying some of the parameters and fill in the rest later. In the example above,
    we need to pass along something to the byName function (the partial name) we do NOT pass along the customer yet because
    this is something the filter method will do! So we create a function that takes the partial parameter, that returns
    a function that takes the customer. By invoking the byName function we actually CREATE a new function that takes
    the customer... this newly created function can be used in the filter method.

 */