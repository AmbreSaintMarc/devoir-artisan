import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtisansService} from '../../artisans.service';
import { ArtisanComponent } from '../artisan/artisan.component';
import { Artisan } from '../../artisan';

@Component({
  selector: 'app-category-manufacturing',
  imports: [CommonModule, ArtisanComponent],
  templateUrl: './category-manufacturing.component.html',
  styleUrl: './category-manufacturing.component.scss'
})
export class CategoryManufacturingComponent {
  public artisans : Artisan[] = []
  artisanList: Artisan[] = [];

  constructor(private service : ArtisansService) {
    this.service.getAllArtisans().then((artisanList: Artisan[]) => {
      this.artisanList = artisanList ;
    });
  }
}
