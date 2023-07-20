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
```