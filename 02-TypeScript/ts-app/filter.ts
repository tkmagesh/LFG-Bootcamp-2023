import type { Product } from './utils.js'
import { useCase, products } from './utils.js';


type Predicate<T> = (i1 : T) => boolean;

useCase('Filter', function(){
    useCase('Abstract Implementation', function(){
        function filter<T>(list : T[], predicate : Predicate<T>){
             var result = [];
                for (var i = 0;i < list.length; i++){
                    if (predicate(list[i]) === true)
                        result.push(list[i])
                }
                return result
        }
        function negate<T>(predicateFn : Predicate<T>) : Predicate<T>{
            return function(item : T) : boolean{
                return !predicateFn(item)
            }
        }
        useCase('Any list by any criteria', function(){
            useCase('Filter stationary products [category = stationary]', function(){
                function stationaryProductPredicate(product : Product){
                    return product.category === 'stationary'
                }
                var stationaryProducts = filter(products, stationaryProductPredicate)
                console.table(stationaryProducts);
            });
            useCase("Products by Cost", function(){
                function costlyProductPredicate(product : Product){
                    return product.cost > 50
                }
                /* 
                function affordableProductPredicate(product){
                    return product.cost <= 50
                } 
                */
                /* 
                function affordableProductPredicate(product){
                    return !costlyProductPredicate(product)
                } 
                */
                var affordableProductPredicate = negate(costlyProductPredicate);

                useCase('Filter costly products [cost > 50]', function(){
                    var costlyProducts = filter<Product>(products, costlyProductPredicate)
                    console.table(costlyProducts)
                })
                useCase('Filter affordable products [!costlyProduct]', function(){
                    var affordableProducts = filter<Product>(products, affordableProductPredicate)
                    console.table(affordableProducts)
                })
            })
            useCase("Products by Units", function(){
                function understockedProductPredicate(product : Product){
                    return product.units <= 60;
                }
                function wellstockedProductPredicate(product : Product){
                    return !understockedProductPredicate(product)
                }
                useCase('Filter understocked products [units <= 60]', function(){
                    
                    var understockedProducts = filter(products, understockedProductPredicate)
                    console.table(understockedProducts);
                })
                useCase('Filter wellstocked products [units > 60]', function(){
                    
                    var wellstockedProducts = filter(products, wellstockedProductPredicate)
                    console.table(wellstockedProducts);
                })
            })
        })
    })
})