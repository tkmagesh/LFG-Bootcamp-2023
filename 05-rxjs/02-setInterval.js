/* 
    Create an observable that will keep emitting values from 1..10 in a 1 second interval and signal the completion to the subscriber when done.
*/

import { Observable, timer } from "rxjs";

let obs$ = new Observable(observer => {
    let no = 0
    const timerId = setInterval(() => {
        no++
        observer.next(no)
        if (no >= 10){
            clearInterval(timerId)
            observer.complete()
        }
    }, 1000);
})

obs$.subscribe({
    next : val => console.log(val),
    complete : () => console.log('done!'),
    error : err => console.log(err)
})