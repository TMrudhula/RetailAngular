import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../auth.service';
import { HomepageComponent } from '../homepage/homepage.component';
import { UserService } from '../user.service';

@Component({
  selector: 'app-customerlogin',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule,HomepageComponent,ReactiveFormsModule,HttpClientModule],
  templateUrl: './customerlogin.component.html',
  styleUrl: './customerlogin.component.css'
})
export class CustomerloginComponent {
  form: FormGroup;
 
  constructor(private userService: UserService, private router: Router) {
    this.form = new FormGroup({
      'Email': new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      'Password': new FormControl('', [
        Validators.required
      ])
    });
  }
 
 
  onSubmit() {
    // Check if the form is valid
    if (this.form.valid) {
      console.log(this.form.value);
      this.userService.login(this.form.value);
 
     
     
    } else {
      // If form is invalid, do not proceed with submission
      alert("Form is invalid. Please fill in all required fields.");
    }
 
  }


  
 

  
}
