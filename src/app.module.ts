import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ProductModule } from './models/products/products.module';
import { Product } from './models/products/product.entity';
import { ProductsController } from './models/products/products.controller';
import { ProductsService } from './models/products/products.service';
import { DataSource } from 'typeorm';

const config: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'postgres',
  entities: [Product],
  synchronize: true,
};
@Module({
  imports: [
    ProductModule,
    TypeOrmModule.forRoot(config),
    TypeOrmModule.forFeature([Product]),
  ],
  controllers: [AppController, ProductsController],
  providers: [AppService, ProductsService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
