import { Component } from '@angular/core';
import { Navbar } from '../navbar/navbar';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-about',
  imports: [Navbar, Footer],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About {

}
