import { debounceTime, filter, map, tap, delay, take, skip, takeUntil  } from "rxjs/operators";
import { interval, timer } from "rxjs";

let stop$ = timer(2000);

let evenDoubleObs$ = interval(100)
    .pipe(
        filter(no => no % 2 === 0),
        tap(even => console.log(`[even no] = ${even}`)),
        map(no => no * 2),
        skip(5),
        // take(10)
        takeUntil(stop$)
    );
 
let evenDoubleObsSubscription = evenDoubleObs$.subscribe(evenDoubleNo => console.log(evenDoubleNo));
/*
setTimeout(() => {
    evenDoubleObsSubscription.unsubscribe()
}, 5000);  */