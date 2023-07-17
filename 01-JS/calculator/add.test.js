function add(x,y){
    function parseArg(n){
        if (typeof n === 'function'){
            return parseArg(n());
        }
        if (Array.isArray(n)){
            // TODO: remove the duplication
            var result = 0;
            for (var i = 0; i < n.length; i++){
                result += parseArg(n[i]);
            }
            return result;
        }
        return isNaN(n) ? 0 : parseInt(n);
    }  
    var result = 0;
    for (var i = 0; i < arguments.length; i++){
        result += parseArg(arguments[i])
    }
    return result
}

test('add(10,20) => 30', function(){
    //Arrange
    var expected = 30;

    //Act
    var actual = add(10,20);

    //Assert
    expect(actual).toBe(expected);
})

/* Hint : use parseInt() to convert string to number */
test("add(10,'20') => 30", function(){
    expect(add(10,'20')).toBe(30);
})

/* Hint : use IsNaN() */
test("add(10, 'abc') => 10", function(){
    expect(add(10, 'abc')).toBe(10);
});

/* Hint : y is undefined */
test("add(10) => 10", function(){
    expect(add(10)).toBe(10);
})

/* Hint : x & y are undefined */
test("add() => 0", function(){
    expect(add()).toBe(0);
})

/* Hint : use arguments object 
    - array like object containing all the arguments passed to the function
    - arguments.length => # of arguments 
    - arguments[0]
    - arguments[1]
    - arguments[2]....
*/
test("add(10,20,30,40,50) => 150", function(){
    expect(add(10,20,30,40,50)).toBe(150);
})

test("add(10,20,30,'40','abc') => 100", function(){
    expect(add(10,20,30,'40','abc')).toBe(100);
})

/* Hint : Use Array.isArray() to check if an object is an array */
test("add([10,20],[30,'40','abc']) => 100", function(){
    expect(add([10,20],[30,'40','abc'])).toBe(100);
})
test("add([10,20],[30,['40','abc']]) => 100", function(){
    expect(add([10,20],[30,['40','abc']])).toBe(100);
})

/* Hint : Use typeof() to check if an object is an function  */
/* 
    var x = function(){}
    typeof x === 'function'
*/
test("add(function(){ return 10;}, function(){ return 20;}) => 30", function(){
    expect(add(function(){ return 10;}, function(){ return 20;})).toBe(30);
})

test("add(function(){ return [10,20];}, function(){ return [30,'40','abc'];}) => 100", function(){
    expect(add(function(){ return [10,20];}, function(){ return [30,'40','abc'];})).toBe(100);
})


test("add([function(){ return [10,20];}, function(){ return [30,'40','abc'];}]) => 100", function(){
    expect(add([function(){ return [10,20];}, function(){ return [30,'40','abc'];}])).toBe(100);
})
