import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from '../services/auth';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Navbar } from '../navbar/navbar';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-register',
  imports: [RouterOutlet ,RouterLink,FormsModule, Navbar, Footer],
  templateUrl:'./register.html',
  styleUrls: ['./register.css']
})
export class Register {
  user = {
    fullName: '',
    email: '',
    password: '',
   
  };

  constructor(private authService: AuthService,
     private router: Router 
  ) {}

  onRegister(event: Event) {
    event.preventDefault();

    this.authService.register(this.user).subscribe({
      next: (res) => {
        alert('Registration successful!');
         this.router.navigate(['/login']); 
    
      },
      error: (err) => {
        alert(err.error.message || 'Registration failed.');
      }
    });
  }
}