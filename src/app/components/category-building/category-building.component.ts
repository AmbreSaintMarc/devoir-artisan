import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtisansService} from '../../artisans.service';
import { ArtisanComponent } from '../artisan/artisan.component';
import { Artisan } from '../../artisan';


@Component({
  selector: 'app-category-building',
  imports: [CommonModule, ArtisanComponent],
  templateUrl: './category-building.component.html',
  styleUrl: './category-building.component.scss'
})
export class CategoryBuildingComponent {
    public artisans : Artisan[] = []
    artisanList: Artisan[] = [];
  
    constructor(private service : ArtisansService) {
      this.service.getAllArtisans().then((artisanList: Artisan[]) => {
        this.artisanList = artisanList ;
      });
    }
}
