import { Observable } from "rxjs";

// function to convert the given promise into an observable
function fromPromise(p){
    return new Observable(observer => {
        p.then(result => {
            observer.next(result);
            observer.complete()
        })
        .catch(err => {
            observer.error(err)
        });
    })
}

// 3rd party api returning an observable
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

// consuming the promise from the 3rd party API as an observable
let obs$ = fromPromise(addAsyncPromise(100,200))

obs$.subscribe({
    next : val => console.log('result :', val),
    complete : () => console.log('done'),
    error : err => console.log(err)
})