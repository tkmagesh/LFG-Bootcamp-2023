
/* create a function that creates an observable to emit the data from the given array */

import { Observable } from "rxjs"

let nos = [10,20,30,40,50]

function fromArray(list){
    return new Observable(observer => {
        for (let val of list)
            observer.next(val)
        observer.complete()
    })
}

let obs$ = fromArray(nos)

// subscribe to the obs$ and print the data generated
obs$.subscribe(console.log)