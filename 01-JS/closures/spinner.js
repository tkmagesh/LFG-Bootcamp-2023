
//singleton instance
/* 
var spinner = (function(){
    var count = 0;

    function up(){
        return ++count;
    }

    function down(){
        return --count;
    }

    var spinner = {
        up : up,
        down : down
    };
    return spinner;
})(); 
*/

var spinner = (function(){
    var count = 0;
    return {
        up : function(){
            return ++count;
        },
        down : function(){
            return --count;
        }
    }
})();


//factory
function spinnerFactory(){
    var count = 0;

    function up(){
        return ++count;
    }

    function down(){
        return --count;
    }

    var spinner = {
        up : up,
        down : down
    };
    return spinner;
}

var s1 = spinnerFactory();