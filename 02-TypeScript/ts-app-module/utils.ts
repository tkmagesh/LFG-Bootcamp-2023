
export function add(x : number,y : number) : number {
    return x + y
}

export function subtract(x : number,y : number) : number {
    return x - y
}

const calculator = { add, subtract }

// Note : There can be ONLY ONE default export per file
export default calculator;