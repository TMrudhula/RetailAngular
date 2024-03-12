import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  private isLoggedIn = false;
 customerId:number=0;
  constructor(private http: HttpClient, private router: Router) { }
 
  login(formData: any) {
    // Perform authentication logic (e.g., API call)
    //http://localhost:5204/api/customer/SignIn
    this.http.post("http://localhost:5204/api/customer/SignIn", formData)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          console.error('Login failed:', error);
          alert("Invalid credentials");
          return throwError(error); // Rethrow the error
        })
      )
      .subscribe((o: any) => {
        console.log(o);
        console.log("Logged in successfully");
        localStorage.setItem("accessToken", JSON.stringify(o));
        this.isLoggedIn = true;
        this.router.navigate(['/homepage']);
      });
  }
 
  logout() {
    // Perform logout logic (e.g., clear token, invalidate session)
    this.isLoggedIn = false;
  }

  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }

  // private apiUrl = 'http://localhost:5223/api';
  // getUserProfile(): Observable<any> {
  //   return this.http.get<any>(`${this.apiUrl}/customer/signup`);
  // }
}

