import { Injectable } from '@nestjs/common';
import axios from 'axios';
@Injectable()
export class ProductsService {
  async getProducts() {
    const res = await axios.get('https://dummyjson.com/products');
    return res.data;
  }
  async getProductById(id: string) {
    const res = await axios.get(`https://dummyjson.com/products/${id}`);
    return res.data;
  }

  async createProduct(productData: any) {
    const res = await axios.post(
      `https://dummyjson.com/products/add`,
      productData,
    );
    return res.data;
  }

  async updateProduct(id: string, productData: any) {
    const res = await axios.put(
      `https://dummyjson.com/products/${id}`,
      productData,
    );
    return res.data;
  }

  async deleteProduct(id: string) {
    const res = await axios.delete(`https://dummyjson.com/products/${id}`);
    return res.data;
  }
}
