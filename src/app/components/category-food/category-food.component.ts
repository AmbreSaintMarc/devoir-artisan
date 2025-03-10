import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtisansService} from '../../artisans.service';
import { ArtisanComponent } from '../artisan/artisan.component';
import { Artisan } from '../../artisan';


@Component({
  selector: 'app-category-food',
  imports: [CommonModule, ArtisanComponent],
  templateUrl: './category-food.component.html',
  styleUrl: './category-food.component.scss'
})
export class CategoryFoodComponent {
      public artisans : Artisan[] = []
      artisanList: Artisan[] = [];
    
      constructor(private service : ArtisansService) {
        this.service.getAllArtisans().then((artisanList: Artisan[]) => {
          this.artisanList = artisanList ;
        });
      }
}
