import { Observable } from "rxjs";

let obs$ = new Observable(function(observer /* object to communicate with the subscriber */){
    // emitting the values to the subscribers
    observer.next(10)
    observer.next(20)
    observer.next(30)
    // signaling an error
    // observer.error(new Error('dummy error!'))

    // signaling the end of data from the observable
    observer.complete()
})

// subscription
/* 
obs$.subscribe({
    next : val => console.log(val),
    error : (err) => console.log('something went wrong!', err),
    complete : () => console.log('Thats all folks!')
}) 
*/

// all alternative way to subscribe to an observable (deprecated)
/* 
obs$.subscribe(
    val => console.log(val), 
    (err) => console.log('something went wrong!', err),
    () => console.log('Thats all folks!')
) 
*/

// Use the below syntax if you are interested ONLY in the data
// obs$.subscribe(val => console.log(val))

// Use the below syntax if you are interested in data, error & completion
obs$.subscribe({
    next : val => console.log(val),
    error : (err) => console.log('something went wrong!', err),
    complete : () => console.log('Thats all folks!')
}) 

