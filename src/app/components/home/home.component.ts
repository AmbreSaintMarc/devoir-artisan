import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtisansService} from '../../artisans.service';
import { ArtisanComponent } from '../artisan/artisan.component';
import { Artisan } from '../../artisan';


@Component({
  selector: 'app-home',
  imports: [CommonModule, ArtisanComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  providers: [ArtisansService]
})
export class HomeComponent {
  public artisans : Artisan[] = []
  artisanList: Artisan[] = [];


  constructor(private service : ArtisansService) {
    this.service.getAllArtisans().then((artisanList: Artisan[]) => {
      this.artisanList = artisanList ;
    });
  }


}


