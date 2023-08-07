
import { Observable, interval } from "rxjs";

let interval$ = interval(500);


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


let doubleObs$ = map(interval$, no => no * 2)
let doubleObsSubscription = doubleObs$.subscribe(doubleNo => console.log(doubleNo));

setTimeout(() => {
    doubleObsSubscription.unsubscribe()
}, 5000); 