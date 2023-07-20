# ES6 Features #
## let ##
```
    let x = 100
    for(let i = 0; i < 10; i++){

    }
    //i is not accessible (unlike "var")
```
## const ##
```
    const pi = 3.14
```
## Array destructuring ##
```
    let nos = [3,1,4,2,5]
    let [x, y] = nos
```
## Rest operator (Array) ##
```
    let nos = [3,1,4,2,5]
    let [x, y, ...z] = nos

    function add(x,y){
        return x + y;
    }
    
    let values = [10,20]
    add(...values)
```
## Spread operator (Array) ##
```
    let nos = [3,1,4,2,5]
    let newNos = [ ...nos, 10, 20, 30 ]

    function sum(...args){
        // args is an Array
        let result = 0;
        for (let i = 0; i < args.length; i++)
            result += args[i]
        return result
    }
    sum(10,20,30,40,50)
    sum(...nos)
```
## Object destructuring ##
```
    let product = {
        id : 100,
        name : 'Pen',
        cost : 5,
        units : 200
    }
    //variable names must match the attribute names
    let {id, cost} = product

    //incase the variables are different from the attribute names
    let {id : x, cost : y} = product
```

## Rest Operator (Object) ##
```
    let product = {
        id : 100,
        name : 'Pen',
        cost : 5,
        units : 200
    }
    let {cost, ...z} = product
```

## Spread Operator (Object) ##
```
    let product = {
        id : 100,
        name : 'Pen',
        cost : 5,
        units : 200
    }
    let newProduct = { ...product, cost : 10, category : 'Stationary' }
```
## Default arguments ##
```
    function add(x = 10,y = 20){
        return x + y
    }
    
    add() //=> 30

    add(100) //=> 120

    add(undefined, 200) //=> 210

    add(100,200) //=> 300

```

## Arrow functions ##
```
    /*
    //function statement
    function add(x,y){
        return x + y
    }

    //function expression
    let add = function(x,y){
        return x + y;
    }

    //arrow function (1)
    //when the function body is a block
    let add = (x,y) => {
        return x + y;
    }
    */

    //arrow function (2)
    //when the function body is an expression
    let add = (x,y) => x + y;

    //arrow function(3)
    //when there is only one parameter
    let isEven = no => no % 2 === 0;
```
## Iterators (for..of) ##
```
    let nos = [3,1,4,2,5]
    
    for(let no of nos)
        console.log(no)

    //custom iterator
    function getNos(){
        let nos = [3,1,4,2,5]
        return {
            [Symbol.iterator](){
                let idx = -1;
                return {
                    next : function(){
                        idx++
                        if (idx >= nos.length){
                            return { value : undefined, done : true }
                        }
                        return {value : nos[idx], done : false}
                    }
                }
            }
        }
    }
    let iter = getNos()
    for(let no of nos){
        console.log(no)
    }
```
## template Literals ##
```
    let x = 100, y = 200
    let s2 = `Sum of ${x} and ${y} is ${x+y}`
```
## Object Literal Enhancements ##
```
    let id = 'P101', name = 'Pen'
    let product = {
        id, 
        name,
        display(){
            console.log(`id = ${this.id}, name = ${this.name}`)
        }
    }
```
## Classes ##
```
    class Employee {
        //instance attributes
        //private attribute
        #id = 0;

        //accessor methods
        get id(){
            console.log('get[id] invoked');
            return this.#id;
        }
        set id(value){
            console.log('set[id] invoked');
            if (value < 0) throw new Error('id cannot be negative')
            this.#id = value
        }

        //public attributes
        name = '';
        city = '';

        //constructor method
        constructor(id, name, city){
            this.id = id;
            this.name = name;
            this.city = city;
        }

        //intance methods
        format(){
            return `id = ${this.id}, name = ${this.name}, city = ${this.city}`
        }

        //static attribute
        static version = '1.0'

        //static method
        static IsEmployee(obj){
            return obj instanceof Employee;
        }
    }

    // Class Inheritance
    class FullTimeEmployee extends Employee {

        benefits = '';

        constructor(id, name, city, benefits){
            super(id, name, city);
            this.benefits = benefits;
        }

        format(){
            return `${super.format()}, benefits = ${this.benefits}`
        }
    }
```

## For Reference ##
http://es6-features.org