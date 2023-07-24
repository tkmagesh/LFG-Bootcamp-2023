"use strict";
var products = [
    { id: 6, name: 'Pen', cost: 50, units: 20, category: 'stationary' },
    { id: 9, name: 'Ten', cost: 70, units: 70, category: 'stationary' },
    { id: 3, name: 'Len', cost: 60, units: 60, category: 'grocery' },
    { id: 5, name: 'Zen', cost: 30, units: 30, category: 'grocery' },
    { id: 1, name: 'Ken', cost: 20, units: 80, category: 'utencil' },
    { id: 7, name: 'Mouse', cost: 100, units: 20, category: 'electronics' }
];
function useCase(title, fn) {
    console.group(title);
    fn();
    console.groupEnd();
}
useCase('Initial List', function () {
    console.table(products);
});
useCase('Sort', function () {
    useCase('Genaralized Sort', function () {
        function sort(list, by) {
            var comparerFn;
            switch (typeof by) {
                case "function":
                    comparerFn = by;
                    break;
                case "string":
                    comparerFn = function (item1, item2) {
                        if (item1[by] < item2[by])
                            return -1;
                        if (item1[by] === item2[by])
                            return 0;
                        return 1;
                    };
                    break;
                default:
                    return;
            }
            if (!comparerFn)
                return;
            for (var i = 0; i < list.length - 1; i++)
                for (var j = i + 1; j < list.length; j++)
                    if (comparerFn(list[i], list[j]) > 0) {
                        var temp = list[i];
                        list[i] = list[j];
                        list[j] = temp;
                    }
        }
        function getDescComparer(comparer) {
            return function (i1, i2) {
                return comparer(i1, i2) * -1;
            };
        }
        useCase('Any list by any attribute', function () {
            useCase('Products by cost', function () {
                //sortByAttr(products, 'cost')
                sort(products, 'cost');
                console.table(products);
            });
            useCase('Products by units', function () {
                //sortByAttr(products, 'units')
                sort(products, 'units');
                console.table(products);
            });
        });
        useCase('Any list by any comparer', function () {
            /* const productsComparerByValue : Comparer<Product> = (p1, p2) => {
                var p1Value = p1.cost * p1.units,
                    p2Value = p2.cost * p2.units;
                if (p1Value < p2Value) return -1;
                if (p1Value === p2Value) return 0;
                return 1;
            } */
            function productsComparerByValue(p1, p2) {
                var p1Value = p1.cost * p1.units, p2Value = p2.cost * p2.units;
                if (p1Value < p2Value)
                    return -1;
                if (p1Value === p2Value)
                    return 0;
                return 1;
            }
            useCase('products by product value [cost * units]', function () {
                // sortByComparer(products, productsComparerByValue)
                sort(products, productsComparerByValue);
                console.table(products);
            });
            useCase('products by product value [cost * units][descending]', function () {
                /*
                function productsComparerByValueDesc(p1, p2){
                    return productsComparerByValue(p1, p2) * -1;
                }
                */
                var productsComparerByValueDesc = getDescComparer(productsComparerByValue);
                sort(products, productsComparerByValueDesc);
                console.table(products);
            });
        });
    });
});
