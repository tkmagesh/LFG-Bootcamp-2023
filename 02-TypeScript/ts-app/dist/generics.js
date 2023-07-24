"use strict";
function filter(list, predicate) {
    let result = [];
    for (let no of list) {
        if (predicate(no)) {
            result.push(no);
        }
    }
    return result;
}
const nos1 = [3, 1, 4, 2, 5];
// console.log('even numbers => ', filter<number>(nos1, x => x %2 === 0))
//take advantage of type infererence
console.log('even numbers => ', filter(nos1, x => x % 2 === 0));
const productNames1 = ['Pen', 'Pencil', 'Marker', 'ScribblePad', 'Notebook'];
console.log('6 letter product names => ', filter(productNames1, pn => pn.length === 6));
// typesafe negate function?
