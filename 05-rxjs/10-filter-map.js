
import { Observable, interval } from "rxjs";

let interval$ = interval(500);

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

function map(obs$, fn){
    return new Observable(observer => {
        let subscription = obs$.subscribe({
            next : val => observer.next(fn(val)),
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
let evenObs$ = filter(interval$, no => no % 2 === 0)
let evenDoubleObs$ = map(evenObs$, no => no * 2)
 
*/

let evenDoubleObs$ = map(filter(interval$, no => no % 2 === 0) , no => no * 2 )
let evenDoubleObsSubscription = evenDoubleObs$.subscribe(evenDoubleNo => console.log(evenDoubleNo));

setTimeout(() => {
    evenDoubleObsSubscription.unsubscribe()
}, 5000); 