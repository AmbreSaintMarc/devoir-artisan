import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Artisan } from '../../artisan';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-artisan',
  imports: [CommonModule, RouterLink],
  templateUrl: './artisan.component.html',
  styleUrl: './artisan.component.scss'
})
export class ArtisanComponent {
  
  artisan = input.required<Artisan>()
  

  //how to display details page on click 
  constructor(private router: Router) {}
  
  navigateToArtisanDetails() {
    this.router.navigateByUrl("details/:id")
  }
}
