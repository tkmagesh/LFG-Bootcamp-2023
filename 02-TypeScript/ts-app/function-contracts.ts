
function add(x : number,y : number) : number {
    return x + y
}

function subtract(x : number, y : number) : number {
    return x - y
}

/* 
console.log(add(100,200))
console.log(subtract(100,200)) 
*/

/* 
console.log('operation started...')
console.log(add(100,200))
console.log('operation completed!')

console.log('operation started...')
console.log(subtract(100,200)) 
console.log('operation completed!') 
*/

/* 
function logAdd(x : number,y : number){
    console.log('operation started...')
    console.log(add(x,y))
    console.log('operation completed!')
}

function logSubtract(x : number,y : number){
    console.log('operation started...')
    console.log(subtract(x,y))
    console.log('operation completed!')
}

logAdd(100,200)
logSubtract(100,200) 
*/

//Apply "commonality variability" on the above

//An interface to define a function contract
/* 
interface MathOperation {
    (x : number, y : number) : number
} 
*/

type MathOperation = (x : number, y : number) => number

function logOperation(x : number,y : number, operation : MathOperation /* any function with 2 numbers as parameters and a number as return result */){
    console.log('operation started...')
    console.log(operation(x,y))
    console.log('operation completed!')
}

logOperation(100,200, add)
logOperation(100,200, subtract)


