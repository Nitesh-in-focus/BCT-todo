import { Component } from '@angular/core';
import { Navbar } from '../navbar/navbar';
import { Footer } from '../footer/footer';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [Navbar, Footer, RouterLink, RouterOutlet, CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  u = {
    email: '',
    password: ''
  };

  error = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    this.authService.login(this.u).subscribe({
      next: (res) => {
        const user = res.user;
        
        // Show success alert with user info
        window.alert(`Login successful!\nEmail: ${user.email || 'N/A'}`);

        // Store and redirect
        this.authService.storeUser(user);
        this.router.navigate(['/profile']);
      },
      error: (err) => {
        // Set error message
        this.error = err.error.message || 'Login failed.';
        
        // Show error alert
        window.alert('Email or password is incorrect. Please try again.');

        // Clear password field
        this.u.password = '';
      }
    });
  }
}
