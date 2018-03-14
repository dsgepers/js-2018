/*

    API: https://swapi.co/api/

    We'll be using SWAPI for our exercises!

    Promises are bits of code that do stuff asynchronous with a promise of completion. When ? we don't know! But somewhere
    in the future, there will be a value or an error.

    Promise => then     => Promise
            => catch    => Promise
            => finally  => Promise

    The then function is called when everything goes fine and returns a new promise. The catch function is called
    when something goes amiss. Finally is always called, this is great for code that needs to be executed regardless
    of success.

 */

const fetch = require('node-fetch');

const toJSON = function (response) {
    return response.json();
};


// Example
fetch('https://swapi.co/api/people/1')
    .then(toJSON)
    .then(console.log)
    .catch(console.error);

/*

    Important to know before you start the exercises is that a Promise inside a then (promise) is flattened

    Promise => then (creates Promise) => Promise

    this means that if you return a promise in a then function, you can just put a then in it's parent


    This means:
    fetch ( something )
        .then ( fetch ( something else ) ) => promise inside of promise is flattened
        .then ( log something else )


    Instead of (this is wrong):
    fetch ( something )
        .then ( fetch ( something else )
                    .then ( log something )
                )

 */