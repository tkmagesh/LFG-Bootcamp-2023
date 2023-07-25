// step-1
/*
import * as utilsModule from './utils.js'

// console.log(utilsModule)
console.log(utilsModule.add(100,200))
console.log(utilsModule.subtract(100,200))
*/
// step-2 (simplifying step-1)
/*
import * as utilsModule from './utils.js'

const add = utilsModule.add,
    subtract = utilsModule.subtract

console.log(add(100,200))
console.log(subtract(100,200))
*/
// step-3
/*
import * as utilsModule from './utils.js'

const { add, subtract } = utilsModule;

console.log(add(100,200))
console.log(subtract(100,200))
*/
//step-4
/*
import { add, subtract } from './utils.js'
console.log(add(100,200))
console.log(subtract(100,200))
*/
//step-5 (importing the default exported entity)
import calc from './utils.js';
console.log(calc.add(100, 200) * calc.subtract(100, 200));
