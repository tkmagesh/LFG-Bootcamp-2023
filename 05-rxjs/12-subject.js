import { Subject } from "rxjs";

// A subject can be used to externalize the data generation logic from the observable
let subject = new Subject()

/* 
// subscribing to the subject
subject.subscribe(val => console.log(val))

subject.next(10)
subject.next(20)
subject.next(30)
subject.next(40)
subject.complete() 
*/

let count = 0;
setInterval(() => {
    subject.next(count)
    count++
}, 500);

// subscriber-1
let obs$ = subject.asObservable()
obs$.subscribe(val => console.log(`[subscriber - 1] - ${val}`))

// subscriber-2 (subscribes after 5 seconds)
/* setTimeout(() => {
    console.log('subscriber-2 subscribes')
    subject.subscribe(val => console.log(`[subscriber - 2] - ${val}`))
}, 5000); */