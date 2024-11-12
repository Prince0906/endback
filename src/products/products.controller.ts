import {
  Controller,
  Get,
  Param,
  Post,
  Put,
  Delete,
  Body,
} from '@nestjs/common';
import { ProductsService } from './products.service';
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}
  @Get('')
  getProducts() {
    return this.productsService.getProducts();
  }
  @Get(':id')
  getProductById(@Param('id') id: string) {
    return this.productsService.getProductById(id);
  }
  @Post('')
  createProduct(@Body() productData: any) {
    return this.productsService.createProduct(productData);
  }
  @Put(':id')
  updateProduct(@Param('id') id: string, @Body() productData: any) {
    return this.productsService.updateProduct(id, productData);
  }
  @Delete(':id')
  deleteProduct(@Param('id') id: string) {
    return this.productsService.deleteProduct(id);
  }
}
