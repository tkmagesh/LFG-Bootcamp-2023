function memoize(fn){
    var results = {}
    return function(n){
        if (typeof results[n] !== 'undefined')
            return results[n];
        console.log('processing ', n);
        results[n] = fn(n)
        return results[n]
    }
}

/* 
function isPrime(n){
    if (n <= 1) return false;
    for (var i = 2; i < n; i++)
        if (n % i === 0) return false;
    return true;
}

var memoizedIsPrime = memoize(isPrime) 
*/

var isPrime = memoize(function(n){
    if (n <= 1) return false;
    for (var i = 2; i < n; i++)
        if (n % i === 0) return false;
    return true;
})

/* 
function isOddOrEven(n){
    if (n % 2 === 0) return 'even';
    return 'odd';
}

var memoizedIsOddOrEven = memoize(isOddOrEven)
*/
var isOddOrEven = memoize(function(n){
    if (n % 2 === 0) return 'even';
    return 'odd';
})
