import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private httpClient : HttpClient) { }
 
  getProduct(){
    return this.httpClient.get<any>('http://localhost:5204/api/products/allProducts')
    .pipe(map((res: any)=>{
      return res;
    }))
  }
  //http://localhost:5204/api/products/bySubCategoryId/101
  private apiUrl = 'http://localhost:5204/api';
  getProductsBySubCategoryName(SubCategoryName: string): Observable<any[]> {     
    return this.httpClient.get<any[]>(`${this.apiUrl}/products/bySubCategoryName/${SubCategoryName}`);   }
}
