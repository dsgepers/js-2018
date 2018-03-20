/*

    Displaying arrays can be a pain. Sometimes you want to combine a list of array quickly with a common delimiter. You
    can use join instead of reduce (see advanced) for this.

 */

const array = [1, 2, 3, 4, 5];

/*

    1. display the list comma separated (to console.log)

 */
console.log(array.join(", "));

/*

    2.  create a html string that looks like this
    <ul><li>1</li><li>2</li>...</ul>

 */
const htmlElements = array.map((item) => "\t<li>" + item + "</li>");
htmlElements.unshift("<ul>");
htmlElements.push("</ul>");
console.log(htmlElements.join("\r\n"));

