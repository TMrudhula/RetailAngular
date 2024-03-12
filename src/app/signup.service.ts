import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  isLoggedIn = false;

  constructor(private http: HttpClient, private router: Router) {}

  signup(formData: any) {
    this.http.post("http://localhost:5204/api/customer/SignUp", formData)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          console.error('Signup failed:', error);
          alert("Signup failed. Please try again.");
          return throwError(error);
        })
      )
      .subscribe((response: any) => {
        console.log(response);
        console.log("Signed up successfully");
        localStorage.setItem("accessToken", JSON.stringify(response));
        this.isLoggedIn = true;
        this.router.navigate(['/customersignup']);
      });
  }

  logout() {
    // Perform logout logic if needed
    this.isLoggedIn = false;
  }

  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }
}
