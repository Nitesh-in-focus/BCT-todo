import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from '../services/auth';

@Component({
  selector: 'app-navbarn',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './navbarn.html',
  styleUrl: './navbarn.css'
})
export class Navbarn {
    constructor(private auth: AuthService){}
logout(){
  this.auth.logout();
}
}
