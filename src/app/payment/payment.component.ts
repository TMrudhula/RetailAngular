import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { PaymentService } from '../payment.service';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css',
  providers:[PaymentService]
})
export class PaymentComponent {
  selectedPaymentMethod!: string;
 
  constructor(private router : Router, private paymentService: PaymentService) {}
 
  onSelectPaymentMethod(paymentMethod: string): void {
    this.selectedPaymentMethod = paymentMethod;
  }
 
  processPayment(): void {
    if (this.selectedPaymentMethod) {
      this.paymentService.processPayment(this.selectedPaymentMethod);
      this.router.navigate(['/confirmation']);
    } else {
      console.error('Please select a payment method');
    }
  }

  // paymentAmount: number = 100; // Amount in cents
  // selectedPaymentMethod: string = ''; // Selected payment method (onlinePayment or cod)
 
  // constructor() {}
 
  // processPayment() {
  //   if (this.selectedPaymentMethod === 'onlinePayment') {
  //     // Implement logic for online payment
  //     this.handleOnlinePayment();
  //   } else if (this.selectedPaymentMethod === 'cod') {
  //     // Implement logic for Cash on Delivery
  //     this.handleCOD();
  //   } else {
  //     console.error('Please select a payment method.');
  //   }
  // }
 
  // handleOnlinePayment() {
  //   // Implement logic for processing online payment
  //   console.log('Processing online payment...');
  //   // Update order status to indicate payment pending or processing
  // }
 
  // handleCOD() {
  //   // Implement logic for Cash on Delivery
  //   console.log('Placing order for Cash on Delivery...');
  //   // Update order status to indicate payment pending
  // }
}
