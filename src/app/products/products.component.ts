import { CommonModule } from '@angular/common';

import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { ApiService } from '../api.service';


@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
  providers: [ApiService]
})
export class ProductsComponent implements OnInit {
  /* // category: string[] = [];
  // selectedcategory: string[] = '';
  // productList: any[] = [];
  public productList : any ;
  subCategoryId:number = 0;
  public filterCategory: any;
  searchKey:string = "";
  // router: any;
  constructor(private api : ApiService,private http:HttpClient, private cartService : CartService,private router :Router
    ,private activeRoute:ActivatedRoute) {
       this.activeRoute.params.subscribe(d => {
         this.subCategoryId = d["subid"];
         console.debug(this.subCategoryId,"Subcategory");
        http.get("http://localhost:5204/api/products/bySubCategoryId/" + this.subCategoryId).subscribe(d => {
          console.log(d,"Products from server");
        });
       });

     }
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
        if(a.categoryName=== "Women" || a.categoryName === "Men"){
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
  filter(SubCategory:string){
    this.filterCategory=this.productList
    .filter((a:any)=>{
      if(a.SubCategory == SubCategory || SubCategory == ''){
        return a;
      }
    })
 
  }*/

  subCategoryName: string='';
  products:any;
  constructor(private route: ActivatedRoute, private productService: ApiService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      // Extract the subCategoryId from route parameters
      this.subCategoryName = params['subid'];

      // Call the method to get products by sub category ID
      this.getProductsBySubCategoryName(this.subCategoryName);
    });
  }

  // Method to get products by sub category ID
  getProductsBySubCategoryName(subCategoryName: string): void {
    this.productService.getProductsBySubCategoryName(subCategoryName).subscribe(
      data => {
        // Handle the response data here
        this.products=data;
        console.log('Products:', data);
      },
      error => {
        // Handle any errors
        console.error('Error fetching products:', error);
      }
    );
  }
}


 