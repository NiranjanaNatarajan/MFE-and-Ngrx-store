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
  // public products: any;

  constructor(private http: HttpClient, public basketService: BasketService) { }

  public ngOnInit() {
    // this.http.get('/assets/data.json').subscribe((res) => {
    //   this.basketService.products = res;
    //   // this.products = res;
    //   console.log(this.basketService.products, 'oninit');
    // });
  }
  openEmployee(productId: any) {
    this.basketService.getEmployeeByID(productId);
  }
}
