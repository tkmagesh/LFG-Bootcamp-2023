var products = [
    { id: 6, name: 'Pen', cost: 50, units: 20, category: 'stationary' },
    { id: 9, name: 'Ten', cost: 70, units: 70, category: 'stationary' },
    { id: 3, name: 'Len', cost: 60, units: 60, category: 'grocery' },
    { id: 5, name: 'Zen', cost: 30, units: 30, category: 'grocery' },
    { id: 1, name: 'Ken', cost: 20, units: 80, category: 'utencil' },
    { id: 7, name: 'Mouse', cost: 100, units: 20, category: 'electronics' }
];

/* 
Write the functions for the following tasks:
    - sort
    - filter
    - groupBy
*/

function useCase(title, fn){
    console.group(title);
    fn();
    console.groupEnd();
}

useCase('Initial List', function(){
    console.table(products);
})

useCase('Sorting', function(){
    useCase('Sort products by id', function(){
        function sortProductsById(){
            for(var i = 0; i < products.length-1; i++){
                for (var j = i+1; j < products.length; j++){
                    if (products[i].id > products[j].id){
                        var temp = products[i];
                        products[i] = products[j];
                        products[j] = temp;
                    }
                }
            }
        }
        sortProductsById();
        console.table(products);
    });

    function sort(list, comparer /* either attrName or comparerFn */){
        var comparerFn = null;
        if (typeof comparer === 'function') comparerFn = comparer;
        if (typeof comparer === 'string') {
            comparerFn = function(p1, p2){
                if (p1[comparer] > p2[comparer]) return 1
                if (p1[comparer] < p2[comparer]) return -1
                return 0
            }
        }
        if (!comparerFn) return;
        for(var i = 0; i < list.length-1; i++){
            for (var j = i+1; j < list.length; j++){
                if (comparerFn(list[i], list[j]) > 0){
                    var temp = list[i];
                    list[i] = list[j];
                    list[j] = temp;
                }
            }
        }
    }
    
    useCase('Sort any list by any attribute', function(){
        /* function sortByAttr(list, attrName){
            for(var i = 0; i < list.length-1; i++){
                for (var j = i+1; j < list.length; j++){
                    if (list[i][attrName] > list[j][attrName]){
                        var temp = list[i];
                        list[i] = list[j];
                        list[j] = temp;
                    }
                }
            }
        } */
        useCase('products by cost', function(){
            sort(products, 'cost')
            console.table(products)
        });

        useCase('products by units', function(){
            sort(products, 'units')
            console.table(products)
        });
    });

    useCase('Sort any list by any comparer', function(){
        /* function sortByComparer(list, comparerFn){
            for(var i = 0; i < list.length-1; i++){
                for (var j = i+1; j < list.length; j++){
                    if (comparerFn(list[i], list[j]) > 0){
                        var temp = list[i];
                        list[i] = list[j];
                        list[j] = temp;
                    }
                }
            }
        } */

        useCase('products by value [cost * units]', function(){
            function productsComparerByValue(p1, p2){
                var p1Value = p1.cost * p1.units;
                var p2Value = p2.cost * p2.units;
                if (p1Value < p2Value) return -1;
                if (p1Value === p2Value) return 0;
                return 1;
            }
            sort(products, productsComparerByValue)
            console.table(products)
        });
    });
});