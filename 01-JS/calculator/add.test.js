function add(x,y){
    return x + y;
}

test('add(10,20) => 30', function(){
    //Arrange
    var expected = 30;

    //Act
    var actual = add(10,20);

    //Assert
    expect(actual).toBe(expected);
})

test.skip("add(10,'20') => 30", function(){

})
test.skip("add(10, 'abc') => 10", function(){

})
test.skip("add(10) => 10", function(){

})
test.skip("add() => 0", function(){

})
test.skip("add(10,20,30,40,50) => 150", function(){

})
test.skip("add(10,20,30,'40','abc') => 100", function(){

})
test.skip("add([10,20],[30,'40','abc']) => 100", function(){

})
test.skip("add([10,20],[30,['40','abc']]) => 100", function(){

})
test.skip("add(function(){ return 10;}, function(){ return 20;}) => 30", function(){

})
test.skip("add(function(){ return [10,20];}, function(){ return [30,'40','abc'];}) => 100", function(){

})
test.skip("add([function(){ return [10,20];}, function(){ return [30,'40','abc'];}]) => 100", function(){

})
