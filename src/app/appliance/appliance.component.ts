import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-appliance',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './appliance.component.html',
  styleUrl: './appliance.component.css', 
  providers: [CartService,ApiService]
  
})
export class ApplianceComponent implements OnInit {

// category: string[] = [];
  // selectedcategory: string[] = '';
  // productList: any[] = [];
  public productList : any ;
  public filterCategory: any;
  searchKey:string = "";
  // router: any;
  constructor(private api : ApiService, private cartService : CartService,private router :Router) { }
  //   this.category=this.getProductCategory();
  //   this.updateproductList();
  // }
  // getProductCategory(): string[]{
  //   const uniqueCategory = [... new Set(this.api.getProduct().map(product => product.category))];
  //   return uniqueCategory;
  // }
 
 
  ngOnInit(): void {
    this.api.getProduct()
    .subscribe(res=>{
      this.productList = res;
      this.filterCategory = res;
      this.productList.forEach((a:any)=>{
        if(a.category === "women's clothing" || a.category === "men's clothing"){
          a.category = "fashion"
        }
        Object.assign(a,{quantity:1,total:a.price});
      });
      console.log(this.productList)
       
      });
      this.cartService.search.subscribe((val:any)=>{
        this.searchKey = val;
      })
   
  }
  addtocart(item: any){
    this.cartService.addtocart(item);
    this.router.navigate(['/cart']);
  }
  filter(category:string){
    this.filterCategory=this.productList
    .filter((a:any)=>{
      if(a.category == category || category == ''){
        return a;
      }
    })
 
  }
}





