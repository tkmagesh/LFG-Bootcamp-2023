/* 
    Create an observable that will keep emitting values from 1..10 in a 1 second interval and signal the completion to the subscriber when done.
*/

import { Observable } from "rxjs";

let obs$ = new Observable(observer => {
    let no = 0
    const timerId = setInterval(() => {
        console.log('generating the next value')
        no++
        observer.next(no)
        if (no >= 10){
            clearInterval(timerId)
            observer.complete()
        }
    }, 1000);

    // the returned function will be executed when the subscriber to this observable unsubscribes.  This can be used for any clean up operation.
    return () => {
        // stop the timer
        clearInterval(timerId);
        console.log('unsubscribed by the subscriber')
    }
})

let subscription = obs$.subscribe({
    next : val => console.log(val),
    complete : () => console.log('done!'),
    error : err => console.log(err)
});

// unsubscribe after 5 secs
setTimeout(() => {
    subscription.unsubscribe()    
}, 5000);
