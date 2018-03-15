/*

    A big problem with classes is the "this" context. In JavaScript, this behaves differently as in Java.
    It's important to know that the value of "this" is always that which precedes the dot in the method call.

        e.g.
        myObject.something(); => the value of "this" in something will be "myObject"

    There's a but! In JavaScript you can call functions in a different way, providing different contexts, for example:

        myObject.something.call(null); => the value of "this" will be null in this case (see advanced functions 5 for more info).

    We need to be careful... how will this translate to objects?

 */

const customers = require('../../../data/customers');

class CustomerRepository {

    constructor (customers) {
        this._customers = customers;
    }

    getMaleCustomers () {
        return this._customers.filter(this.isMaleCustomer);
    }

    isMaleCustomer (customer) {
        return customer.isMale;
    }

}

const repository = new CustomerRepository(customers);

console.log(repository.getMaleCustomers());

/*

    Note that the code above works. But you have to be careful, the following code would not have worked:

    getMaleCustomers () {
        return this._customers.filter(function (customer) {
            return this.isMaleCustomer(customer)
        });
    }

    The this.isMaleCustomer() in the function has the "this" context of the anonymous function in the filter!

    Lambda's solved that problem, but made everything more complex:

    getMaleCustomers () {
        return this._customers.filter((customer) => {
            return this.isMaleCustomer(customer)
        });
    }

 */