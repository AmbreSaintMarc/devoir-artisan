import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Artisan } from '../artisan';


@Component({
  selector: 'app-artisan',
  imports: [CommonModule],
  templateUrl: './artisan.component.html',
  styleUrl: './artisan.component.scss'
})
export class ArtisanComponent {
  
  artisan = input.required<Artisan>()
}
