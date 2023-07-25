import type { Product } from "./utils.js";
import { useCase, products } from "./utils.js";




useCase('Initial List', function(){
    console.table(products);
})
type Comparer<T> = (i1 : T, i2 : T) => number;

useCase('Sort', function(){
   
    useCase('Genaralized Sort', function(){
        function sort<T>(list : T[], by : keyof T | Comparer<T>){
            var comparerFn : Comparer<T>;
            switch (typeof by) {
                case "function":
                    comparerFn = by;
                    break;
                case "string":
                    comparerFn = function(item1, item2){
                        if (item1[by] < item2[by]) return -1;
                        if (item1[by] === item2[by]) return 0;
                        return 1;
                    }
                    break;
                default:
                    return
            }
            if (!comparerFn) return
            for(var i =0;i < list.length-1; i++)
                for(var j = i +1; j < list.length; j++)
                    if ( comparerFn(list[i], list[j]) > 0) {
                        var temp = list[i];
                        list[i] = list[j];
                        list[j] = temp;
                    }
            
        }
        function getDescComparer<T>(comparer : Comparer<T>){
            return function(i1 : T, i2 : T) : number{
                return comparer(i1, i2) * -1;
            }
        }
        useCase('Any list by any attribute', function(){
            
            useCase('Products by cost', function(){
                //sortByAttr(products, 'cost')
                sort(products, 'cost')
                console.table(products);
            })
            useCase('Products by units', function(){
                //sortByAttr(products, 'units')
                sort(products, 'units')
                console.table(products);
            })
        })
        useCase('Any list by any comparer', function(){
            
            /* const productsComparerByValue : Comparer<Product> = (p1, p2) => {
                var p1Value = p1.cost * p1.units,
                    p2Value = p2.cost * p2.units;
                if (p1Value < p2Value) return -1;
                if (p1Value === p2Value) return 0;
                return 1;
            } */

            function productsComparerByValue(p1 : Product, p2 : Product) : number {
                var p1Value = p1.cost * p1.units,
                    p2Value = p2.cost * p2.units;
                if (p1Value < p2Value) return -1;
                if (p1Value === p2Value) return 0;
                return 1;
            }
            useCase('products by product value [cost * units]', function(){
                
                // sortByComparer(products, productsComparerByValue)
                sort(products, productsComparerByValue)
                console.table(products)
            })
            useCase('products by product value [cost * units][descending]', function(){
                /* 
                function productsComparerByValueDesc(p1, p2){
                    return productsComparerByValue(p1, p2) * -1;
                } 
                */
                var productsComparerByValueDesc = getDescComparer(productsComparerByValue)
                sort(products, productsComparerByValueDesc)
                console.table(products)
            })
        })
    })
})