import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //isLoggedIn: boolean = false;

  constructor() { }

  login() {
    // Your authentication logic here, e.g., check if the user credentials are valid
    // For demonstration purposes, let's just set isLoggedIn to true
    //this.isLoggedIn = true;
  }

  logout() {
    // Your logout logic here, e.g., clear session storage, remove tokens, etc.
    // For demonstration purposes, let's just set isLoggedIn to false
   // this.isLoggedIn = false;
  }

 // isLoggedIn(): boolean {
    //return this.isLoggedIn;
  //}

  
}
