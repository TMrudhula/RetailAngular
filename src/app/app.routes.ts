import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplianceComponent } from './appliance/appliance.component';
import { AuthGuard } from './auth.guard';
import { CartComponent } from './cart/cart.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';

import { CustomerloginComponent } from './customerlogin/customerlogin.component';
import { CustomersignupComponent } from './customersignup/customersignup.component';
import { GadgetsComponent } from './gadgets/gadgets.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PaymentComponent } from './payment/payment.component';
import { ProductsComponent } from './products/products.component';
import { WomenComponent } from './women/women.component';

export const routes: Routes = [
    { path: '', component: HomepageComponent},
   { path: 'homepage', component: HomepageComponent},
    { path: 'customerlogin', component: CustomerloginComponent},
    {path: 'customersignup', component:CustomersignupComponent} ,
    {path: 'products',component:ProductsComponent},
    {path:'products/:subid',component:ProductsComponent},
    {path:'cart',component:CartComponent,canActivate: [AuthGuard]},
    {path:'women',component:WomenComponent},
    {path:'gadgets',component:GadgetsComponent},
    {path:'appliance',component:ApplianceComponent},
    {path:'payment',component:PaymentComponent},
    {path:'confirmation', component:ConfirmationComponent},
    
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }


