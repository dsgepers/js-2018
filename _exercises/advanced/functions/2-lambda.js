/*

    Lambda's are easy

    function () { return 1; }

    =

    () => 1

    note that if you have multiple lines you need to use {} and a return statement

    () => {
        return 1;
    }

    also returning an object in one line is tricky

    () => {
        return {
            x: 1
        };
    }

    is valid, but also

    () => ({ x: 1 })

    Note the () to be weird, but syntactically correct

 */

/*

    As an exercise doe the array exercises but only use lambda's!

 */