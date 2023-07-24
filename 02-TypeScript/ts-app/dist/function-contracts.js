"use strict";
function add(x, y) {
    return x + y;
}
function subtract(x, y) {
    return x - y;
}
function logOperation(x, y, operation /* any function with 2 numbers as parameters and a number as return result */) {
    console.log('operation started...');
    console.log(operation(x, y));
    console.log('operation completed!');
}
logOperation(100, 200, add);
logOperation(100, 200, subtract);
function filterNumbers(numbers, predicate) {
    let result = [];
    for (let no of numbers) {
        if (predicate(no)) {
            result.push(no);
        }
    }
    return result;
}
const nos = [3, 1, 4, 2, 5];
const evenNos = filterNumbers(nos, x => x % 2 === 0);
console.log('even numbers => ', evenNos);
const productNames = ['Pen', 'Pencil', 'Marker', 'ScribblePad', 'Notebook'];
function filterStrings(strings, predicate) {
    let result = [];
    for (let str of strings) {
        if (predicate(str)) {
            result.push(str);
        }
    }
    return result;
}
console.log('6 letter product names => ', filterStrings(productNames, pn => pn.length === 6));
