/*import { HeaderComponent } from "./header/header.component";*/
import { CartComponent } from "./cart/cart.component";
import { ProductsComponent } from "./products/products.component";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
/*import { AppRoutingModule } from "./app-routing.module";*/
import { ApiService } from "./api.service";
import { CartService } from "./cart.service";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FilterPipe } from "./filter.pipe";
import { CustomerloginComponent } from "./customerlogin/customerlogin.component";
import { WomenComponent } from "./women/women.component";
import { GadgetsComponent } from "./gadgets/gadgets.component";
import { ApplianceComponent } from "./appliance/appliance.component";
import { PaymentComponent } from "./payment/payment.component";
import { HomepageComponent } from "./homepage/homepage.component";
//app.module.ts
@NgModule({
    declarations: [
        AppComponent,
        CartComponent,
        PaymentComponent,
        ProductsComponent,
        WomenComponent,
        GadgetsComponent,
        ApplianceComponent,
        FilterPipe,
        HomepageComponent
        //CustomerloginComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule
       
    ],
    providers: [ApiService,CartService],
    bootstrap: [AppComponent]
})
    export class AppModule { }
 