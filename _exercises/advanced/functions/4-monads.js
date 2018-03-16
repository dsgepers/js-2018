/*

    Monads are data structures that keep a state and transform it by using functions. The Promise object is a monad,
    because the .then takes a function and returns the promise again.

    In this exercise you will need to define a monad called the Optional monad. This is how it should behave:

    Optional(customer)
        .map((customer) => customer.name)
        .map((name) => name.first)
        .getOrElse('There is no name');

    Now if the customer has no name object, the "else" will be displayed, if the customer has a name but no first,
    the default will be displayed, if both are present, the firstname will be displayed.

    This about how to create a structure that returns an instance of itself that can be called again. Know that the Optional
    either has a value or it doesn't... but for the "map" function it does not matter... if there is no value, the function
    just isn't called.

 */

const personWithAddressAndStreet = { address: { street: 'Test' } };
const personWithAddressNoStreet = { address: {  } };
const personWithoutAddress = {  };
const noPerson = null;

const Optional = () => {

    /* ... */

};

const personWithAddressAndStreetOptional = Optional(personWithAddressAndStreet).map((person) => person.address).map((address) => address.street).getOrElse('No street');
const personWithAddressNoStreetOptional = Optional(personWithAddressNoStreet).map((person) => person.address).map((address) => address.street).getOrElse('No street');
const personWithoutAddressOptional = Optional(personWithoutAddress).map((person) => person.address).map((address) => address.street).getOrElse('No street');
const noPersonOptional = Optional(noPerson).map((person) => person.address).map((address) => address.street).getOrElse('No street');

console.log(personWithAddressAndStreetOptional); // Test
console.log(personWithAddressNoStreetOptional); // No street
console.log(personWithoutAddressOptional); // No street
console.log(noPersonOptional); // No street

