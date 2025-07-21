import { Component, OnInit } from '@angular/core';
import { Navbarn } from '../navbarn/navbarn';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AuthService } from '../services/auth';
import { Footer } from '../footer/footer';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.html',
  styleUrl: './profile.css',
  imports:[CommonModule,RouterOutlet,Navbarn,Footer]
})
export class Profile implements OnInit{
user:any;

constructor(private auth: AuthService){}

ngOnInit(){
  this.user = this.auth.getUser();
}


}

