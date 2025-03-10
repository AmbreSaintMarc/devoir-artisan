import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtisansService} from '../../artisans.service';
import { ArtisanComponent } from '../artisan/artisan.component';
import { Artisan } from '../../artisan';

@Component({
  selector: 'app-artisan-search',
  imports: [CommonModule, ArtisanComponent],
  templateUrl: './artisan-search.component.html',
  styleUrl: './artisan-search.component.scss'
})
export class ArtisanSearchComponent {
  public artisans : Artisan[] = []
  artisanList: Artisan[] = [];


  constructor(private service : ArtisansService) {
    this.service.getAllArtisans().then((artisanList: Artisan[]) => {
      this.artisanList = artisanList ;
    });
  }


}
