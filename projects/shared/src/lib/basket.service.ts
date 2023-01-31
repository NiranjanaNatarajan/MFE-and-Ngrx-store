import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  products: any = null;

  constructor() { }

  public getBasketItems() {
    return this.products;
  }

  public addToBasket(product: Product) {
    this.products = product;
    return this.products;
  }
}

