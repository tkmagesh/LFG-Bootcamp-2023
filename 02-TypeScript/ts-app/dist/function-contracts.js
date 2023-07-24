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
