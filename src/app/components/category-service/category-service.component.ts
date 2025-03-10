import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtisansService} from '../../artisans.service';
import { ArtisanComponent } from '../artisan/artisan.component';
import { Artisan } from '../../artisan';

@Component({
  selector: 'app-category-service',
  imports: [CommonModule, ArtisanComponent],
  templateUrl: './category-service.component.html',
  styleUrl: './category-service.component.scss'
})
export class CategoryServiceComponent {
      public artisans : Artisan[] = []
      artisanList: Artisan[] = [];
    
      constructor(private service : ArtisansService) {
        this.service.getAllArtisans().then((artisanList: Artisan[]) => {
          this.artisanList = artisanList ;
        });
      }
  
      
}
