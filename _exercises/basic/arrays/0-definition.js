/*

    Arrays are lists. The can be filled with every value you want and can be mixed, although this is not recommended.
    JavaScript however will not check the types that you add to the list.

 */

const list = [1, 2, 3, 4, 5];
const mixed = [1, "2", 3, "4"];
const everything = [
    1,
    "string",
    { x: "object" },
    function () { return "even functions" }
];

/*

    Accessing items from a list can be done by using the index

 */

const first = everything[0];

/*

    Adding items to a list dynamically can be done with the push method

 */

list.push(6);



