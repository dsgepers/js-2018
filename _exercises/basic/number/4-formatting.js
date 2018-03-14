/*

    Since ECMAScript 6 you can format numbers natively. This helps you to do a localized formatting for numbers.

 */

const l10nEN = new Intl.NumberFormat("en-US");
const l10nBE = new Intl.NumberFormat("nl-BE");

console.log('1234567.89 EN', l10nEN.format(1234567.89));
console.log('1234567.89 BE', l10nBE.format(1234567.89));