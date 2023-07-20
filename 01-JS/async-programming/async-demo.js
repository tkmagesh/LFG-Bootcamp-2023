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

    

    /* 
    function addAsyncPromiseClient(){
        console.log('[@client] invoking the service');
        var p = addAsyncPromise(100,200);
        p.then(function(result){
            console.log('[@client] result = ', result)
        })
    } 
    */

    async function addAsyncPromiseClient(){
        console.log('[@client] invoking the service');
        var result = await addAsyncPromise(100,200);        
        console.log('[@client] result = ', result)
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
            }, 3000)
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
    /* 
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
    */
   async function divideAsyncPromiseClient(x,y){
        console.log('[@client] invoking the service');
        try {
            var result = await divideAsyncPromise(x,y);
            console.log('[@client] result = ', result)
        } catch (err) {
            console.log('promise rejected with error :', err)
        } finally {
            console.log('async operation completed')
        }
    }

    window['divideAsyncPromiseClient'] = divideAsyncPromiseClient
    

    function asyncExperiments(){
        // add
        console.log('[@client] invoking the add service');
        var p1 = addAsyncPromise(100,200);
        p1.then(function(result){
            console.log('[@client] result [add] = ', result)
        })

        //divide
        console.log('[@client] invoking the divide service');
        var p2 = divideAsyncPromise(100,2)
        p2.then(function(result){
            console.log('[@client] result [divide]= ', result)
        })
    }

    window['asyncExperiments'] = asyncExperiments;

    function asyncExperiments2(){
        // add
        console.log('[@client] invoking the add service');
        var p1 = addAsyncPromise(100,200);
        p1.then(function(addResult){
            console.log('[@client] result [add] = ', addResult)
            //divide
            console.log('[@client] invoking the divide service');
            var p2 = divideAsyncPromise(addResult,2)
            p2.then(function(result){
                console.log('[@client] result [divide]= ', result)
            })
        })        
    }

    window['asyncExperiments2'] = asyncExperiments2;

    //conver the asyncExperiments to async-await
    async function asyncExperiments_aw(){
        // add
        console.log('[@client] invoking the add service');
        var addResult = await addAsyncPromise(100,200);
        console.log('[@client] result [add] = ', addResult)
        
        //divide
        console.log('[@client] invoking the divide service');
        var divideResult = await divideAsyncPromise(100,2)
        console.log('[@client] result [divide]= ', divideResult)
        
    }

    window['asyncExperiments_aw'] = asyncExperiments_aw;

})()