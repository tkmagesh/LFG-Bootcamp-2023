"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_js_1 = require("./utils.js");
(0, utils_js_1.useCase)('Filter', function () {
    (0, utils_js_1.useCase)('Abstract Implementation', function () {
        function filter(list, predicate) {
            var result = [];
            for (var i = 0; i < list.length; i++) {
                if (predicate(list[i]) === true)
                    result.push(list[i]);
            }
            return result;
        }
        function negate(predicateFn) {
            return function (item) {
                return !predicateFn(item);
            };
        }
        (0, utils_js_1.useCase)('Any list by any criteria', function () {
            (0, utils_js_1.useCase)('Filter stationary products [category = stationary]', function () {
                function stationaryProductPredicate(product) {
                    return product.category === 'stationary';
                }
                var stationaryProducts = filter(utils_js_1.products, stationaryProductPredicate);
                console.table(stationaryProducts);
            });
            (0, utils_js_1.useCase)("Products by Cost", function () {
                function costlyProductPredicate(product) {
                    return product.cost > 50;
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
                (0, utils_js_1.useCase)('Filter costly products [cost > 50]', function () {
                    var costlyProducts = filter(utils_js_1.products, costlyProductPredicate);
                    console.table(costlyProducts);
                });
                (0, utils_js_1.useCase)('Filter affordable products [!costlyProduct]', function () {
                    var affordableProducts = filter(utils_js_1.products, affordableProductPredicate);
                    console.table(affordableProducts);
                });
            });
            (0, utils_js_1.useCase)("Products by Units", function () {
                function understockedProductPredicate(product) {
                    return product.units <= 60;
                }
                function wellstockedProductPredicate(product) {
                    return !understockedProductPredicate(product);
                }
                (0, utils_js_1.useCase)('Filter understocked products [units <= 60]', function () {
                    var understockedProducts = filter(utils_js_1.products, understockedProductPredicate);
                    console.table(understockedProducts);
                });
                (0, utils_js_1.useCase)('Filter wellstocked products [units > 60]', function () {
                    var wellstockedProducts = filter(utils_js_1.products, wellstockedProductPredicate);
                    console.table(wellstockedProducts);
                });
            });
        });
    });
});
