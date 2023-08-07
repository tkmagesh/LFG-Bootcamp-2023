import { Subject } from "rxjs";

let subject = new Subject()

// subscribing to the subject
subject.subscribe(val => console.log(val))

subject.next(10)
subject.next(20)
subject.next(30)
subject.next(40)
subject.complete()