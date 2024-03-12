import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormsModule, NgForm, ReactiveFormsModule, FormBuilder,FormGroup, Validators } from '@angular/forms';
import { Router,  RouterOutlet } from '@angular/router';
import { HomepageComponent } from '../homepage/homepage.component';
import { SignupService } from '../signup.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-customersignup',
  standalone: true,
  imports: [FormsModule,CommonModule,HomepageComponent,HttpClientModule,RouterOutlet,ReactiveFormsModule],
  templateUrl: './customersignup.component.html',
  styleUrl: './customersignup.component.css'
})
export class CustomersignupComponent  {
  title = 'ClientApp';
  
  form: FormGroup;
 
 
 
  constructor(private http: HttpClient, private router: Router,private userService : UserService) {
    this.form = new FormGroup({
      'Name': new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50)
      ]),
      'Email': new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      'Password': new FormControl('', [
        Validators.required,
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[^\\da-zA-Z]).{8,}$')
      ]),
      'Phone': new FormControl('', [
        Validators.required,
        Validators.pattern(/^\d{10}$/)
      ]),
    });
  }
 
  updateFile(event:any){
    console.log(event);
      if(event.target.files.length > 0)
      {
        ;
         console.log("File Updated");
      }
      else
        console.log("No file was selected");
  }
 
  onSubmit() {
    if (this.form.valid) {
      var formData = new FormData();
     // formData.append("data", JSON.stringify(this.form.value));
      //formData.append("Photo", this.photo);
 
      console.log(formData);
 
      try {
        this.http.post("http://localhost:5204/api/customer/SignUp",
          this.form.value)
          .subscribe(o => {
            console.log(o);
            this.router.navigate(['/customerlogin']);
          });
      } catch (e: any) {
        console.log("Error", e);
      }
    } else {
      // If form is invalid, do not proceed with submission
      alert("Form is invalid. Please fill in all required fields.");
    }
  }
 
  }
