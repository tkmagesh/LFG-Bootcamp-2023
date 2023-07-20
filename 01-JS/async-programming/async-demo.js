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

    function addAsync(x,y, callbackFn /* phone number */){
        console.log('   [@service] processing', x , ' and ', y)
        setTimeout(function(){
            var result = x + y;
            console.log('   [@service] returing the result')
            callbackFn(result);
        }, 5000)
        return
    }

    function addAsyncClient(){
        console.log('[@client] invoking the service')
        addAsync(100,200, function(result){
            console.log('[@client] result = ', result)
        })
    }

    window['addAsyncClient'] = addAsyncClient;

})()