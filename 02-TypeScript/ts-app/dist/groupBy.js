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
useCase("GroupBy", function () {
    useCase("Generalized implementations", function () {
        function groupBy(list, keySelector) {
            let result = {};
            let key;
            for (var i = 0; i < list.length; i++) {
                let item = list[i];
                switch (typeof keySelector) {
                    case "string":
                        key = keySelector;
                        break;
                    case "function":
                        key = keySelector(item);
                    default:
                        continue;
                }
                result[key] = result[key] || [];
                result[key].push(item);
            }
            return result;
        }
        useCase("Products by category", function () {
            /*
            function categoryKeySelector(product){
                return product.category
            }
            var productsByCategory = groupBy(products, categoryKeySelector)
            */
            var productsByCategory = groupBy(products, 'category');
            console.log(productsByCategory);
        });
        useCase("Products by cost", function () {
            function costKeySelector(product) {
                return product.cost > 50 ? 'costly' : 'affordable';
            }
            var productsByCost = groupBy(products, costKeySelector);
            console.log(productsByCost);
        });
    });
});
