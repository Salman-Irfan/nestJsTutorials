import { ProductsService } from 'src/services/products-service';
import { CreateProductDTO } from './../dto/createProduct.dto';
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, ValidationPipe } from "@nestjs/common";

@Controller('/products')
export class ProductsController {
    // constructor function
    constructor(private productsService: ProductsService) {
    }
    // create product
    @Post('/add-product')
    addProduct(@Body(ValidationPipe) createProductDTO: CreateProductDTO) {
        this.productsService.addProduct(createProductDTO)
        return {
            success: true,
            message: 'Product added successfully',
            data: createProductDTO
        }
    }
    // find all products
    @Get('/all-products')
    fetchAllProducts() {
        return this.productsService.getProducts();
    }
    // find product by id
    @Get('/:id')
    findProductByProductId(@Param('id', ParseIntPipe) id: number) {
        console.log(typeof id); // number
        return this.productsService.getProductById(+id);
        
    }
    // update product by id
    @Put('/update/:id')
    updateProductById(
        @Param('id') id: number,
        @Body() createProductDTO: CreateProductDTO
    ) {
        const updatedProduct = this.productsService.updateProduct(+id, createProductDTO);
        return {
            success: true,
            id: id,
            data: createProductDTO,
            updatedProduct: updatedProduct
        }
    }
    // delete product by id
    @Delete('/delete/:id')
    deleteProductById(@Param('id') id: number) {
        const deletedProduct = this.productsService.deleteProduct(+id);
        return {
            success: true,
            id: id,
            deletedProduct: deletedProduct
        }
    }
}