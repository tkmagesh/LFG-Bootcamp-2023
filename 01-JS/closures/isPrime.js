var isPrime = (function (){
    var results = {}
    return function(n){
        if (typeof results[n] !== 'undefined')
            return results[n];
        console.log('processing ', n);
        results[n] = true
        for (var i = 2; i <= (n/2); i++){
            if (n % i === 0){
                results[n] = false;
                break;
            }
        }
        return results[n]
    }
})()
