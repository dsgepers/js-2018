/*

    Use the following list for the exercises

 */

const orders = [
    { id: 1, paid: true, customer: { isMale: true }, amount: 123 },
    { id: 2, paid: false, customer: { isMale: false }, amount: 321 },
    { id: 3, paid: true, customer: { isMale: true }, amount: 456 },
    { id: 4, paid: true, customer: { isMale: false }, amount: 323 },
    { id: 5, paid: false, customer: { isMale: false }, amount: 212 },
    { id: 6, paid: true, customer: { isMale: true }, amount: 145 },
];

/*

    1. use the every method to check if every order is paid?

 */

// const isEveryOrderedPaid = orders.every ...
const isEveryOrderPayed = orders.every((item) => item.paid);
console.log(isEveryOrderPayed);

/*

    2. use the some method to check if some males (filter) paid for their order

 */
const isSomeMaleOrderPayed = orders.some((item) => item.paid && item.customer.isMale);
console.log(isSomeMaleOrderPayed);

/*

    3. calculate how much needs to be paid (where paid = false)

 */


Array.prototype.sum = function (property) {
    var total = 0;
    for ( var i = 0; i < this.length; i++ ) {
        total += this[i][property]
    }
    return total;
}
 
const totalToBePaid = orders.filter((item) => !item.paid).sum("amount");
console.log(totalToBePaid);


