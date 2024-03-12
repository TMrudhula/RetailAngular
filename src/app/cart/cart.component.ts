import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';
import { ProductsComponent } from '../products/products.component';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule,ProductsComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
  providers: [CartService]
})
export class CartComponent implements OnInit{
  public products : any = [];
  public grandTotal !: number;

  constructor(private cartService : CartService, private router: Router) {
   // this.cartService.getCart();
  }
  ngOnInit(): void {
    this.products = this.cartService.getProducts();
    console.log("Cart Page",this.products);
   
  }
 
  removeItem(item: any){
    this.cartService.removeCartItem(item);
  }
  emptycart(item:any){
    this.cartService.removeAllCart();
    this.router.navigate(['/products']);
  }

  proceedToPayment() 
  {     // Navigate to the payment component
    this.router.navigate(['/payment']);   
  } 
}

