import { BehaviorSubject } from "rxjs";

// BehaviorSubject is a subject that can be initialized with a default value
let subject = new BehaviorSubject(0)

// subscribing to the subject
subject.subscribe(val => console.log(val))

subject.next(10)
subject.next(20)
subject.next(30)
subject.next(40)
subject.complete()