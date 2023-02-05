import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor(public basketService: BasketService, private router: Router) { }
  public purchaseProduct(): void {
    // this.notifyPurchase = true;
    // this.basketService.getEmployeeByID(this.product.id);
    // this.basketService.getEmployeeByID(productId);
    this.basketService.getUser(this.product.id).subscribe(data => {
      this.basketService.selectedData = data;
      this.router.navigateByUrl('/basket');
    //  this.displayData=true;
    });
    // setTimeout(() => this.notifyPurchase = false, 3000);
  }
  // ngOnDestroy() {
  //   this.notifyPurchase = false;
  // }
}
