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