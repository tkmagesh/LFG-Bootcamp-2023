
import { interval } from "rxjs";

let obs$ = interval(1000);

obs$.subscribe(val => console.log(`[subscriber-1] - ${val}`))
/* 
[subscriber-1] - 0
[subscriber-1] - 1
[subscriber-1] - 2
[subscriber-1] - 3
*/
setTimeout(() => {
    console.log('creating one more subscriber')
    obs$.subscribe(val => console.log(`[subscriber-2] - ${val}`))
}, 5000);

/* 
[subscriber-2] - ?
*/