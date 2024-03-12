import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  static getCart(): any {
    throw new Error('Method not implemented.');
  }
  // private cartKey = 'shoppingCart';
 
  public cartItemList : any = []
  public productList = new BehaviorSubject<any>([]);
  public search = new BehaviorSubject<string>("");
 
  constructor() { }
  getProducts(){
     var items = localStorage.getItem("cart");

     if(items)
     this.cartItemList = JSON.parse(items);

     return this.cartItemList;
  }
 
  setProduct(product : any){
    this.cartItemList.push(product);
    this.productList.next(product);
  }
  getCart(): any[]{
    const cartData = localStorage.getItem(this.cartItemList);
    return cartData? JSON.parse(cartData) : [];
  }
  addtocart(product : any) {

    this.cartItemList.push(product);
    localStorage.setItem("cart", JSON.stringify(this.cartItemList));
   /* localStorage.setItem(this.cartItemList, JSON.stringify(this.getCart));
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
    console.log(this.cartItemList)*/
    
 
  }
//Addtocart(productId:number,){}
  getTotalPrice() : number{
    let grandTotal = 0;
    this.cartItemList.map((a:any)=>{
      grandTotal += a.total;
    })
    return grandTotal;
  }
  removeCartItem(product : any){
    this.cartItemList.map((a: any, index:any)=>{
      if(product.id=== a.id){
        this.cartItemList.splice(index,1);
      }
    })
    this.productList.next(this.cartItemList);
  }
  removeAllCart(){
    this.cartItemList = []
    this.productList.next(this.cartItemList);
  }
}
