import { Injectable } from "@nestjs/common";

export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
}

@Injectable()
export class ProductsService {
    private store = new Map<number, Product>();
    // service to add product
    addProduct(product: Product){
        this.store.set(product.id, product);
    }
    // service to get products
    getProducts(){
        return Array.from(this.store).map(([_, product])=>product)
    }
    // get products by id
    getProductById(id:number){
        return this.store.get(id);
    }
    // service to update product
    updateProduct(id: number, product: Product){
        this.store.set(id, product);
    }
    // delete product
    deleteProduct(id: number){
        this.store.delete(id);
    }
}