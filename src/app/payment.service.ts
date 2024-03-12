import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  private orderPlaced : boolean = false;

  processPayment(paymentMethod : string): void{
    console.log('Processing payment using Rs{paymentMethod}');
    this.orderPlaced = true;
  }
  isOrderPlaced(): boolean{
    return this.orderPlaced;
  }
}
