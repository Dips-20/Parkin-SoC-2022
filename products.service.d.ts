import { Product } from "./products.model";
import { Model } from "mongoose";
export declare class ProductsService {
    private readonly productModel;
    private products;
    constructor(productModel: Model<Product>);
    insertProduct(title: string, desc: string, price: number): string;
    getProduct(): Product[];
    getSingleProduct(productID: string): {
        id: string;
        title: string;
        desc: string;
        price: number;
    };
    updateProduct(productId: string, title: string, desc: string, price: number): void;
    deleteProduct(prodId: string): void;
    private findProduct;
}
