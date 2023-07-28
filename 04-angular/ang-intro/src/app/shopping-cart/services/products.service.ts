import { Product } from "../models/product";

export class ProductsService {

    private _products : Product[] = [];

    private _nullProduct : Product = {
        id : 0,
        name : "",
        category : "",
        cost : 0,
    }

    get nullProduct() : Product {
        // return the nullProduct object for comparison
        return this._nullProduct;
    }

    get products() : Product[] {
        // return a copy of the array so that the consumer of this service cannot directly manipulate this array
        return [...this._products];
    }

    load() {
        // get the products from the server
        this._products = [
            { id: 6, name: 'Pen', cost: 50, category: 'stationary' },
            { id: 9, name: 'Ten', cost: 70, category: 'stationary' },
            { id: 3, name: 'Len', cost: 60, category: 'grocery' },
            { id: 5, name: 'Zen', cost: 30, category: 'grocery' },
            { id: 1, name: 'Ken', cost: 20, category: 'utencil' },
            { id: 7, name: 'Mouse', cost: 100, category: 'electronics' }
        ];
    }

    getById(id : number) : Product {
        // return the product by id or null product if the product doesnot exist
        return this._products.find(p => p.id === id) || this._nullProduct;
    }
}