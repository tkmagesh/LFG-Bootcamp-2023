"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_js_1 = require("./utils.js");
(0, utils_js_1.useCase)('Initial List', function () {
    console.table(utils_js_1.products);
});
(0, utils_js_1.useCase)('Sort', function () {
    (0, utils_js_1.useCase)('Genaralized Sort', function () {
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
        (0, utils_js_1.useCase)('Any list by any attribute', function () {
            (0, utils_js_1.useCase)('Products by cost', function () {
                //sortByAttr(products, 'cost')
                sort(utils_js_1.products, 'cost');
                console.table(utils_js_1.products);
            });
            (0, utils_js_1.useCase)('Products by units', function () {
                //sortByAttr(products, 'units')
                sort(utils_js_1.products, 'units');
                console.table(utils_js_1.products);
            });
        });
        (0, utils_js_1.useCase)('Any list by any comparer', function () {
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
            (0, utils_js_1.useCase)('products by product value [cost * units]', function () {
                // sortByComparer(products, productsComparerByValue)
                sort(utils_js_1.products, productsComparerByValue);
                console.table(utils_js_1.products);
            });
            (0, utils_js_1.useCase)('products by product value [cost * units][descending]', function () {
                /*
                function productsComparerByValueDesc(p1, p2){
                    return productsComparerByValue(p1, p2) * -1;
                }
                */
                var productsComparerByValueDesc = getDescComparer(productsComparerByValue);
                sort(utils_js_1.products, productsComparerByValueDesc);
                console.table(utils_js_1.products);
            });
        });
    });
});
