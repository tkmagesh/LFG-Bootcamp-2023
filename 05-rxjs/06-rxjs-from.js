
import { from } from "rxjs";

// observable from an array
let nos = [10,20,30,40,50]
let arrObs$ = from(nos)
console.log('from Array:')
arrObs$.subscribe(val => console.log(val))

// observable from a promise
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
console.log('from Promise:')
let add$ = from(addAsyncPromise(100,200))
add$.subscribe(result => console.log('add result :', result))