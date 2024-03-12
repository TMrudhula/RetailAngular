import { Component } from '@angular/core';
import { PaymentService } from '../payment.service';

@Component({
  selector: 'app-confirmation',
  standalone: true,
  imports: [],
  templateUrl: './confirmation.component.html',
  styleUrl: './confirmation.component.css',
  providers: [PaymentService]
})
export class ConfirmationComponent {

  constructor(private paymentService : PaymentService) {}
  isOrderPlaced() : boolean {
    return this.paymentService.isOrderPlaced();
  }
}
