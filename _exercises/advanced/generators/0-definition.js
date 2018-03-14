/*

    A generator is a new concept in javascript that allows you to generate finite or infinite lists. You can use them to
    iterate over an array as well if you want to... At the moment they aren't really used that often, but it's useful
    to know what the posibilities are

    The syntax for a generator function is slightly different of that of a regular function

    function* () {}

    Note the * after the function.


    A generator return value is not done by using the return statement. You should always use yield.

    function* () {
        yield 1;
    }

    This generator yields the number 1 as value and then sets itself to done


 */

const Generator = function* () {
    yield 1;
};

const yielder = Generator();

console.log(yielder.next());
console.log(yielder.next());

/*

    If you want to create a generator that keeps on creating you will need to add a while loop to your generator

 */

const GeneratorOfOnes = function* () {
    while (true) yield 1;
};

const yielderOfOnes = GeneratorOfOnes();

console.log(yielderOfOnes.next());
console.log(yielderOfOnes.next());
console.log(yielderOfOnes.next());
console.log(yielderOfOnes.next());
console.log(yielderOfOnes.next());

/*

    You can add configuration to your generator when creating the yielder

 */

const GeneratorOfNames = function* (config) {
    while (true) yield config.name;
};

const yielderOfNames = GeneratorOfNames({ name: 'test' });

console.log(yielderOfNames.next());
console.log(yielderOfNames.next());
console.log(yielderOfNames.next());
console.log(yielderOfNames.next());
console.log(yielderOfNames.next());

