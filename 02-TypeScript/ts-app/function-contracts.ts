
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

//Math operation as a function contract
type MathOperation = (x : number, y : number) => number

function logOperation(x : number,y : number, operation : MathOperation /* any function with 2 numbers as parameters and a number as return result */){
    console.log('operation started...')
    console.log(operation(x,y))
    console.log('operation completed!')
}

logOperation(100,200, add)
logOperation(100,200, subtract)


type NumberPredicate = (x : number) => boolean
function filterNumbers(numbers :number[], predicate : NumberPredicate){
    let result : number[] = []
    for (let no of numbers){
        if (predicate(no)){
            result.push(no)
        }
    }
    return result;
}

const nos = [3,1,4,2,5]
const evenNos = filterNumbers(nos, x => x %2 === 0)
console.log('even numbers => ', evenNos)

const productNames = ['Pen', 'Pencil', 'Marker', 'ScribblePad', 'Notebook']

type StringPredicate = (x : string) => boolean
function filterStrings(strings :string[], predicate : StringPredicate){
    let result : string[] = []
    for (let str of strings){
        if (predicate(str)){
            result.push(str)
        }
    }
    return result;
}
console.log('6 letter product names => ', filterStrings(productNames, pn => pn.length === 6))
