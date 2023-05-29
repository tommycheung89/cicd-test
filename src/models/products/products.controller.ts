import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from './product.entity';

@Controller('products')
export class ProductsController {
  constructor(private readonly productService: ProductsService) {}

  @Get()
  getAllProducts() {
    return this.productService.findAll();
  }

  @Get('/:id')
  getSingleProduct(@Param('id') id: number) {
    return this.productService.findOne(id);
  }

  @Post()
  saveProduct(@Body() product: Product) {
    return this.productService.create(product);
  }
}
