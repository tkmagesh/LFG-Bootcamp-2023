"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_js_1 = require("./utils.js");
(0, utils_js_1.useCase)("GroupBy", function () {
    (0, utils_js_1.useCase)("Generalized implementations", function () {
        /* Record : represents an object  */
        function groupBy(list, keySelector) {
            let result = {};
            let key;
            for (let item of list) {
                switch (typeof keySelector) {
                    case "string":
                        key = item[keySelector];
                        break;
                    case "function":
                        key = keySelector(item);
                        break;
                    default:
                        continue;
                }
                result[key] = result[key] || [];
                result[key].push(item);
            }
            return result;
        }
        (0, utils_js_1.useCase)("Products by category", function () {
            /*
            function categoryKeySelector(product){
                return product.category
            }
            var productsByCategory = groupBy(products, categoryKeySelector)
            */
            var productsByCategory = groupBy(utils_js_1.products, 'category');
            console.log(productsByCategory);
        });
        (0, utils_js_1.useCase)("Products by cost", function () {
            function costKeySelector(product) {
                return product.cost > 50 ? 'costly' : 'affordable';
            }
            var productsByCost = groupBy(utils_js_1.products, costKeySelector);
            console.log(productsByCost);
        });
    });
});
/*
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
} */ 
