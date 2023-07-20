var products = [
    { id: 6, name: 'Pen', cost: 50, units: 20, category: 'stationary' },
    { id: 9, name: 'Ten', cost: 70, units: 70, category: 'stationary' },
    { id: 3, name: 'Len', cost: 60, units: 60, category: 'grocery' },
    { id: 5, name: 'Zen', cost: 30, units: 30, category: 'grocery' },
    { id: 1, name: 'Ken', cost: 20, units: 80, category: 'utencil' },
    { id: 7, name: 'Mouse', cost: 100, units: 20, category: 'electronics' }
];

//expected output of grouping
//group products by category
var productsByCategory = {
    'stationary' : [
        { id: 6, name: 'Pen', cost: 50, units: 20, category: 'stationary' },
        { id: 9, name: 'Ten', cost: 70, units: 70, category: 'stationary' }
    ],
    'grocery' : [
        { id: 3, name: 'Len', cost: 60, units: 60, category: 'grocery' },
        { id: 5, name: 'Zen', cost: 30, units: 30, category: 'grocery' }
    ],
    'utencil' : [
        { id: 1, name: 'Ken', cost: 20, units: 80, category: 'utencil' }
    ],
    'electronics' : [
        { id: 7, name: 'Mouse', cost: 100, units: 20, category: 'electronics' }
    ]
}

//group products by cost
var productsByCost = {
    'costly' : [
        { id: 9, name: 'Ten', cost: 70, units: 70, category: 'stationary' },
        { id: 3, name: 'Len', cost: 60, units: 60, category: 'grocery' },
        { id: 7, name: 'Mouse', cost: 100, units: 20, category: 'electronics' }
    ],
    'affordable' : [
        { id: 6, name: 'Pen', cost: 50, units: 20, category: 'stationary' },
        { id: 5, name: 'Zen', cost: 30, units: 30, category: 'grocery' },
        { id: 1, name: 'Ken', cost: 20, units: 80, category: 'utencil' }
    ]
}

function useCase(title, fn){
    console.group(title)
    fn()
    console.groupEnd();
}

useCase('Initial List', function(){
    console.table(products);
})
    
useCase('Sort', function(){
    useCase('Default Sort [products by id]', function(){
        function sortProductsById(){
            for(var i =0;i < products.length-1; i++)
                for(var j = i +1; j < products.length; j++)
                    if (products[i].id > products[j].id) {
                        var temp = products[i];
                        products[i] = products[j];
                        products[j] = temp;
                    }
        }
        sortProductsById()
        console.table(products)
    })
    useCase('Genaralized Sort', function(){
        /* 
        function sort(list, by){
            if (typeof by === 'string'){
                for(var i =0;i < list.length-1; i++)
                    for(var j = i +1; j < list.length; j++)
                        if (list[i][by] > list[j][by]) {
                            var temp = list[i];
                            list[i] = list[j];
                            list[j] = temp;
                        }
            }
            if (typeof by === 'function'){
                for(var i =0;i < list.length-1; i++)
                    for(var j = i +1; j < list.length; j++)
                        if ( by(list[i], list[j]) > 0  ) {
                            var temp = list[i];
                            list[i] = list[j];
                            list[j] = temp;
                        }
            }
        } 
        */
        function sort(list, by){
            var comparerFn = null;
            if (typeof by === 'function') comparerFn = by;
            if (typeof by === 'string') {
                comparerFn = function(item1, item2){
                    if (item1[by] < item2[by]) return -1;
                    if (item1[by] === item2[by]) return 0;
                    return 1;
                }
            }
            if (!comparerFn) return
            for(var i =0;i < list.length-1; i++)
                for(var j = i +1; j < list.length; j++)
                    if ( comparerFn(list[i], list[j]) > 0) {
                        // convert the below to ES6
                        var temp = list[i];
                        list[i] = list[j];
                        list[j] = temp;
                    }
            
        }
        // convert the below to ES6
        function getDescComparer(comparer){
            return function(){
                return comparer.apply(this, arguments) * -1;
            }
        }
        useCase('Any list by any attribute', function(){
            function sortByAttr(list, attrName){
                for(var i =0;i < list.length-1; i++)
                    for(var j = i +1; j < list.length; j++)
                        if (list[i][attrName] > list[j][attrName]) {
                            var temp = list[i];
                            list[i] = list[j];
                            list[j] = temp;
                        }
            }

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
            function sortByComparer(list, comparerFn){
                for(var i =0;i < list.length-1; i++)
                    for(var j = i +1; j < list.length; j++)
                        if ( comparerFn(list[i], list[j]) > 0  ) {
                            var temp = list[i];
                            list[i] = list[j];
                            list[j] = temp;
                        }
            }
            // convert the below to ES6
            function productsComparerByValue(p1, p2){
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
        // convert the below to ES6
        function negate(predicateFn){
            return function(){
                return !predicateFn.apply(this, arguments)
            }
        }
        useCase('Any list by any criteria', function(){
            useCase('Filter stationary products [category = stationary]', function(){
                // convert the below to ES6
                function stationaryProductPredicate(product){
                    return product.category === 'stationary'
                }
                var stationaryProducts = filter(products, stationaryProductPredicate)
                console.table(stationaryProducts);
            });
            useCase("Products by Cost", function(){
                // convert the below to ES6
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
                // convert the below to ES6
                function understockedProductPredicate(product){
                    return product.units <= 60;
                }
                // convert the below to ES6
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

useCase("GroupBy", function(){
    useCase("Concrete implementations", function(){
        useCase("Products by category", function(){
            function groupProductsByCategory(){
                var result = {}
                for (var i = 0; i < products.length; i++){
                    var product = products[i],
                        key = product.category;
                    if (typeof result[key] === 'undefined')
                        result[key] = [];
                    result[key].push(product)
                }
                return result;
            }
            var productsByCategory = groupProductsByCategory()
            console.log(productsByCategory)
        })
        useCase("Products by cost", function(){
            function groupProductsByCost(){
                var result = {}
                for (var i = 0; i < products.length; i++){
                    var product = products[i],
                        key = product.cost > 50 ? 'costly' : 'affordable';
                    if (typeof result[key] === 'undefined')
                        result[key] = [];
                    result[key].push(product)
                }
                return result;
            }
            var productsByCost = groupProductsByCost()
            console.log(productsByCost)
        })
    })
    useCase("Generalized implementations", function(){
        function groupBy(list, keySelector){
            var result = {}
            var keySelectorFn = null;
            if (typeof keySelector === 'function') keySelectorFn = keySelector;
            if (typeof keySelector === 'string') {
                keySelectorFn = function(item){
                    return item[keySelector]
                }
            }
            if (!keySelectorFn) return result;
            for (var i = 0; i < list.length; i++){
                var product = list[i],
                    key = keySelectorFn(product);
                if (typeof result[key] === 'undefined')
                    result[key] = [];
                result[key].push(product)
            }
            return result;
        }
        useCase("Products by category", function(){
            /* 
            function categoryKeySelector(product){
                return product.category
            }
            var productsByCategory = groupBy(products, categoryKeySelector) 
            */
            var productsByCategory = groupBy(products, 'category') 
            console.log(productsByCategory)
        })
        useCase("Products by cost", function(){
            function costKeySelector(product){
                return product.cost > 50 ? 'costly' : 'affordable'
            }
            var productsByCost = groupBy(products, costKeySelector)
            console.log(productsByCost)
        })
    })
})
