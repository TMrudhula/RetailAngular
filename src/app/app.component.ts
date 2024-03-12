import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

import { ApplianceComponent } from './appliance/appliance.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';

import { CustomerloginComponent } from './customerlogin/customerlogin.component';
import { CustomersignupComponent } from './customersignup/customersignup.component';
import { FilterPipe } from './filter.pipe';
import { GadgetsComponent } from './gadgets/gadgets.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PaymentComponent } from './payment/payment.component';
import { ProductsComponent } from './products/products.component';
import { WomenComponent } from './women/women.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HomepageComponent,CommonModule,CustomerloginComponent,CustomersignupComponent,HomepageComponent,ProductsComponent,FilterPipe,FormsModule,HttpClientModule,WomenComponent,GadgetsComponent,ApplianceComponent,PaymentComponent,ConfirmationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'retailsystem';
  
}
