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