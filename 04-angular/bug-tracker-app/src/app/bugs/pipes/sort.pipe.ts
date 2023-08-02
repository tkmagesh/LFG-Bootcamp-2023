import { Pipe, PipeTransform } from "@angular/core";

export type Comparer<T> = (i1 : T, i2 : T) => number;
@Pipe({
    name : 'sort'
})
export class SortPipe<T> implements PipeTransform{

    private getComparerFor(attrName : keyof T) : Comparer<T> {
        return function(item1 : T, item2 : T) : number {
            if (item1[attrName] < item2[attrName]) return -1;
            if (item1[attrName] > item2[attrName]) return 1;
            return 0
        }
    }

    private getDescComparer(comparer: Comparer<T>): Comparer<T> {
        return function (item1: T, item2: T): number {
            return comparer(item1, item2) * -1;
        }
    }

    transform(list: T[], attrName : keyof T, desc : boolean = false) {
        console.log('sort.transform - ', attrName);
        if (!list.length || !attrName) return list;
        let comparer : Comparer<T> = this.getComparerFor(attrName)
        if (desc)
            comparer = this.getDescComparer(comparer);
        return list.sort(comparer)
    }

    

}