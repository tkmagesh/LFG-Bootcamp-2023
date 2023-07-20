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

    window['addAsyncPromise'] = addAsyncPromise
    
})()