import { filter, map } from "rxjs/operators";
import { interval } from "rxjs";

let evenDoubleObs$ = interval(500)
    .pipe(
        filter(no => no % 2 === 0),
        map(no => no * 2)
    );
    
let evenDoubleObsSubscription = evenDoubleObs$.subscribe(evenDoubleNo => console.log(evenDoubleNo));

setTimeout(() => {
    evenDoubleObsSubscription.unsubscribe()
}, 5000); 