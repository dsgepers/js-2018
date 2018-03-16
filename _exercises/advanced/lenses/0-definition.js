/*

    Lenses are a cool way to handle large json objects.

 */
const R = require('ramda');

let john = {
    "name": "John Doe",
    "date-of-birth": 123456789,
    "email": "j.doe@provider.com",
    "address": {
        "street": "Main",
        "houseNumber": "3454",
        "bus": "2b"
    }
};

const streetLens = R.lensPath(['address', 'street']);
const numberLens = R.lensPath(['address', 'houseNumber']);
const busLens = R.lensPath(['address', 'bus']);
const nameLens = R.lensPath(['address', 'bus']);


console.log('view street: ', R.view(streetLens, john));

john2 = R.set(streetLens, 'First', john);

console.log('view street after set original: ', R.view(streetLens, john));
console.log('view street after set returned: ', R.view(streetLens, john2));

console.log('view complete object original: ', john);
console.log('view complete object originalReturned: ', john2);

/*

    In the example above we notice that the set of the lens is immutable.

    Think about the possibilities of lenses and try to play around with them for a bit.

 */