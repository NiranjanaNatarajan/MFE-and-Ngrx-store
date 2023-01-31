import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { BasketService, Product } from '@shared';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styles: [
  ]
})
export class ProductsComponent implements OnInit {
  public products: any;

  constructor(private http: HttpClient, private basketService: BasketService) { }

  public ngOnInit() {
    this.http.get('/assets/data.json').subscribe((res) => {
      this.products = res;
      console.log(this.products, 'oninit');
    });
  }
  openEmployee(productId: any) {
    const product = this.products.find((p: any) => p.id === productId) as Product;
    this.basketService.addToBasket(product);
  }
}
