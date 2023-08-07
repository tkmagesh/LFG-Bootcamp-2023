
import { Observable, interval } from "rxjs";

let interval$ = interval(500);


/* 
function filterEven(obs$){
    return new Observable(observer => {
        let subscription = obs$.subscribe({
            next : val => {
                if (val % 2 === 0){
                    observer.next(val)
                }
            },
            complete : () => observer.complete(),
            error : err  => observer.error(err)
        })
        // executed when the subscriber unsubscribes
        return () => {
            subscription.unsubscribe();
        }
    })
}

let evenObs$ = filterEven(interval$)
let evenObsSubscription = evenObs$.subscribe(evenNo => console.log(evenNo));

setTimeout(() => {
    evenObsSubscription.unsubscribe()
}, 10000); 
*/

function filter(obs$, predicate){
    return new Observable(observer => {
        let subscription = obs$.subscribe({
            next : val => {
                if (predicate(val)){
                    observer.next(val)
                }
            },
            complete : () => observer.complete(),
            error : err  => observer.error(err)
        })
        // executed when the subscriber unsubscribes
        return () => {
            subscription.unsubscribe();
        }
    })
}

/* 
let evenObs$ = filter(interval$, no => no % 2 == 0)
let evenObsSubscription = evenObs$.subscribe(evenNo => console.log(evenNo));

setTimeout(() => {
    evenObsSubscription.unsubscribe()
}, 5000); 
*/

let oddObs$ = filter(interval$, no => no % 2 !== 0)
let oddObsSubscription = oddObs$.subscribe(oddNo => console.log(oddNo));

setTimeout(() => {
    oddObsSubscription.unsubscribe()
}, 5000); 