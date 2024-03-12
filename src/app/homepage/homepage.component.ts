import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { routes } from '../app.routes';
import { CustomerloginComponent } from '../customerlogin/customerlogin.component';


@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule,RouterModule,CustomerloginComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {
  constructor(private router: Router) { }
  proceedToHomepage(){
    this.router.navigate(['/homepage']);
   
  }

}

