/*

    Every value in javascript is true or false... this makes conditions really hard,
    can you guess the output of the following statements?

 */

console.log("1 == '1'", 1 == '1');
console.log("1 == [1]", 1 == [1]);
console.log("'1' == [1]", '1' == [1]);

/*

    This is why we started using === because it also checks type

 */

console.log("1 == '1'", 1 === '1');
console.log("1 == [1]", 1 === [1]);
console.log("'1' == [1]", '1' === [1]);

/*

    Do you know the output of the following statements?

 */

console.log('!!true', !!true);
console.log('!!false', !!false);
console.log('!1', !1);
console.log('!![]', !![]);
console.log('!!NaN', !!NaN);
console.log('!0', !0);
console.log('!!undefined', !!undefined);
console.log('!!null', !!null);
console.log('!""', !"");
console.log('!!"test"', !!"test");
console.log('!!321', !!321);

