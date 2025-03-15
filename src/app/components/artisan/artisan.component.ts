import { Component, inject, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Artisan } from '../../artisan';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { ArtisansService } from '../../artisans.service';


@Component({
  selector: 'app-artisan',
  imports: [CommonModule, RouterLink],
  templateUrl: './artisan.component.html',
  styleUrl: './artisan.component.scss'
})
export class ArtisanComponent {
  artisan = input.required<Artisan>()
  artisansService = inject(ArtisansService);
  artisansList: Artisan[] = []

  

  //how to display details page on click 
  constructor(private router: Router) {}
  
  navigateToArtisanDetails() {
    this.router.navigateByUrl("details/:id")
  }




}

