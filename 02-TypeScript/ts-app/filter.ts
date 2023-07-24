type Product = {
    id : number,
    name : string,
    cost : number,
    units : number,
    category : string
}

var products = [
    { id: 6, name: 'Pen', cost: 50, units: 20, category: 'stationary' },
    { id: 9, name: 'Ten', cost: 70, units: 70, category: 'stationary' },
    { id: 3, name: 'Len', cost: 60, units: 60, category: 'grocery' },
    { id: 5, name: 'Zen', cost: 30, units: 30, category: 'grocery' },
    { id: 1, name: 'Ken', cost: 20, units: 80, category: 'utencil' },
    { id: 7, name: 'Mouse', cost: 100, units: 20, category: 'electronics' }
];

function useCase(title : string, fn : () => void){
    console.group(title)
    fn()
    console.groupEnd();
}

useCase('Filter', function(){
    useCase('Concrete Implementations', function(){
        useCase('Filter stationary products [category = stationary]', function(){
            function filterStationaryProducts(){
                var result = [];
                for (var i = 0;i < products.length; i++){
                    if (products[i].category === 'stationary')
                        result.push(products[i])
                }
                return result
            }
            var stationaryProducts = filterStationaryProducts()
            console.table(stationaryProducts)
        });
        useCase('Filter costly products [cost > 50]', function(){
            function filterCostlyProducts(){
                var result = [];
                for (var i = 0;i < products.length; i++){
                    if (products[i].cost > 50)
                        result.push(products[i])
                }
                return result
            }
            var costlyProducts = filterCostlyProducts()
            console.table(costlyProducts)
        })
    })
    useCase('Abstract Implementation', function(){
        function filter(list, predicate){
             var result = [];
                for (var i = 0;i < list.length; i++){
                    if (predicate(list[i]) === true)
                        result.push(list[i])
                }
                return result
        }
        function negate(predicateFn){
            return function(){
                return !predicateFn.apply(this, arguments)
            }
        }
        useCase('Any list by any criteria', function(){
            useCase('Filter stationary products [category = stationary]', function(){
                function stationaryProductPredicate(product){
                    return product.category === 'stationary'
                }
                var stationaryProducts = filter(products, stationaryProductPredicate)
                console.table(stationaryProducts);
            });
            useCase("Products by Cost", function(){
                function costlyProductPredicate(product){
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
                    var costlyProducts = filter(products, costlyProductPredicate)
                    console.table(costlyProducts)
                })
                useCase('Filter affordable products [!costlyProduct]', function(){
                    var affordableProducts = filter(products, affordableProductPredicate)
                    console.table(affordableProducts)
                })
            })
            useCase("Products by Units", function(){
                function understockedProductPredicate(product){
                    return product.units <= 60;
                }
                function wellstockedProductPredicate(product){
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