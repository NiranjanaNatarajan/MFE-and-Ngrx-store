import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BasketService, Product } from '@shared';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styles: [
  ]
})
export class ProductComponent {

  // public notifyPurchase = false;
  @Input() public product!: Product;
  @Output() public purchase: EventEmitter<any> = new EventEmitter<any>()
  constructor(public basketService: BasketService) { }
  public purchaseProduct(): void {
    // this.notifyPurchase = true;
    this.basketService.getEmployeeByID(this.product.id);
    // setTimeout(() => this.notifyPurchase = false, 3000);
  }
  // ngOnDestroy() {
  //   this.notifyPurchase = false;
  // }
}
