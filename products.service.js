"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let ProductsService = class ProductsService {
    constructor(productModel) {
        this.productModel = productModel;
        this.products = [];
    }
    async insertProduct(title, desc, price) {
        const prodID = new Math.random().toString();
        const newProduct = new this.productModel({
            title: title,
            descripton: desc,
            price: price
        });
        const ;
        return  = await newProduct.save();
        console.log(result);
    }
    getProduct() {
        return this.products;
    }
    getSingleProduct(productID) {
        const product = this.findProduct(productId)[0];
        return Object.assign({}, product);
    }
    updateProduct(productId, title, desc, price) {
        const [product, index] = this.findProduct(productId);
        const updatedProduct = Object.assign({}, product);
        if (title) {
            updatedProduct.title = title;
        }
        ;
        if (desc) {
            updatedProduct.desc = desc;
        }
        ;
        if (price) {
            updatedProduct.price = price;
        }
        ;
        this.products[index] = updatedProduct;
    }
    deleteProduct(prodId) {
        const index = this.findProduct(productId)[1];
        this.products.splice(index, 1);
    }
    findProduct(id) {
        const productIndex = this.products.findIndex(prod => prod.id === productID);
        const product = product[productIndex];
        if (!product) {
            throw new common_1.NotFoundException('Could not find this');
        }
        return [product, productIndex];
    }
};
ProductsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Product')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ProductsService);
exports.ProductsService = ProductsService;
//# sourceMappingURL=products.service.js.map