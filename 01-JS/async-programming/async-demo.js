(function(){
    function addSync(x,y){
        console.log('   [@service] processing', x , ' and ', y)
        var result = x + y;
        console.log('   [@service] returing the result')
        return result;
    }

    function addSyncClient(){
        console.log('[@client] invoking the service')
        var result = addSync(100,200)
        console.log('[@client] result = ', result)
    }

    window['addSyncClient'] = addSyncClient;

    function addAsyncCallback(x,y, callbackFn /* phone number */){
        console.log('   [@service] processing', x , ' and ', y)
        setTimeout(function(){
            var result = x + y;
            console.log('   [@service] returing the result')
            callbackFn(result);
        }, 5000)
        return
    }

    function addAsyncCallbackClient(){
        console.log('[@client] invoking the service')
        addAsync(100,200, function(result){
            console.log('[@client] result = ', result)
        })
    }

    window['addAsyncCallbackClient'] = addAsyncCallbackClient;

    function addAsyncPromise(x,y){
        console.log('   [@service] processing', x , ' and ', y)
        var p = new Promise(function(resolveFn, rejectFn){
            setTimeout(function(){
                var result = x + y;
                console.log('   [@service] returing the result')
                //communicate the result to the promise?
                resolveFn(result)
            }, 5000)
        })
        return p;
    }

    function addAsyncPromiseClient(){
        console.log('[@client] invoking the service');
        var p = addAsyncPromise(100,200);
        p.then(function(result){
            console.log('[@client] result = ', result)
        })
    }

    window['addAsyncPromiseClient'] = addAsyncPromiseClient

    function divideAsyncPromise(x,y){
        console.log('   [@service] processing', x , ' and ', y)
        var p = new Promise(function(resolveFn, rejectFn){
            setTimeout(function(){
                if (y === 0){
                    var err = new Error("divisor cannot be zero")
                    rejectFn(err)
                    return
                }
                var result = x / y;
                console.log('   [@service] returing the result')
                //communicate the result to the promise?
                resolveFn(result)
            }, 5000)
        })
        return p;
    }

    /* 
    function divideAsyncPromiseClient(x,y){
        console.log('[@client] invoking the service');
        var p = divideAsyncPromise(x,y);
        p.then(function(result){
            console.log('[@client] result = ', result)
        })
        p.catch(function(err){
            console.log('promise rejected with error :', err)
        })
    } 
    */
    function divideAsyncPromiseClient(x,y){
        console.log('[@client] invoking the service');
        divideAsyncPromise(x,y)
            .then(function(result){
                console.log('[@client] result = ', result)
            })
            .catch(function(err){
                console.log('promise rejected with error :', err)
            })
            .finally(function(){
                console.log('async operation completed')
            })
    }

    window['divideAsyncPromiseClient'] = divideAsyncPromiseClient
    
})()