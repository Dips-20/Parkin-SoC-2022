import { Product } from "./products.model";
import { ProductsService } from "./products.service";
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    addController(prodTitle: string, prodDesc: string, prodPrice: number): any;
    getAllProducts(): Product[];
    getProduct(prodID: string): {
        id: string;
        title: string;
        desc: string;
        price: number;
    };
    updateProduct(prodID: string, prodTitle: string, prodDesc: string, prodPrice: number): any;
    removeProduct(prodID: string): any;
}
