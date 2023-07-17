# JavaScript (ES5) #


## Language Features ##
### Data Types ###
1. number
2. boolean
3. string
4. object
5. undefined
6. function
### Programming Constructs ###
1. var
2. if else
3. switch case
4. while
5. for
6. try catch finally
7. throw
8. function
9. typeof
### APIs ###
1. Math
2. Array
3. Regex
4. Error
5. Timer (setTimeout, clearTimeout, setInterval, clearInterval)
6. XMLHttpRequest



## Language Categories ##
1. Line Oriented (GW Basic, Fortran)
2. Procedural (COBOL, C)
3. Object Based (Visual Basic, Delphi, **JavaScript**)
4. Object Oriented (C++, Java, C#)
5. Functional (Haskell, LISP, F#, Scala, **JavaScript**)

1. loosely typed (**JavaScript**, Python)
2. strongly typed

1. static 
2. dynamic (**JavaScript**)
```
var obj = {}
obj.id = 100
obj.name = 'Pen'
```

### Functional Language ###
- Functions are first class citizens (like data (specifically 'object'))

- Creation (1)
```
//function statement
function fn(){
}

//function expression
var x = function(){
}
```

- Creation (2)
```
var fn = new Function()

typeof fn

var f1 = new Function("console.log('f1 invoked')")

var add = new Function("x", "y", "return x + y;")

add(100,200)
```

- Attributes
```
function fn(){
}

fn.id = 100
```

- Methods
```
function fn(){
}
fn.print = function(){
    console.log('Hi there!')
}
```

- Can be passed as arguments to other functions
```
function fn(z){
    console.log('typeof z = ', typeof z)
}

var f1 = function(){
}

fn(f1)
```

- Can be returned as return values
```
function getFn(){
    return function(){
        console.log('fn invoked');
    }
}


var fn = getFn()

typeof fn

fn()
```