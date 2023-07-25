export function add(x, y) {
    return x + y;
}
export function subtract(x, y) {
    return x - y;
}
const calculator = { add, subtract };
// Note : There can be ONLY ONE default export per file
export default calculator;
