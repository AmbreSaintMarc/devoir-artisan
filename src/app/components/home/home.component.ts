import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtisansService} from '../../artisans.service';
import { ArtisanComponent } from '../../artisan/artisan.component';
import { Artisan } from '../../artisan';



@Component({
  selector: 'app-home',
  imports: [CommonModule, ArtisanComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  providers: [ArtisansService]
})
export class HomeComponent {
  artisanList: Artisan[] = [];
  artisanService = inject(ArtisansService);
  filteredArtisanList : Artisan[] = [];

    constructor() { 
      this.artisanService.getAllArtisans().then((artisanList: Artisan[]) =>  {
      this.artisanList = artisanList;
      this.filteredArtisanList = this.artisanList;
    });
  }

    filterResults(text: string) {
      if (!text) {
        this.filteredArtisanList = this.artisanList;
        return;
      }

      this.filteredArtisanList = this.artisanList.filter((artisan) =>
        artisan?.name.toLowerCase().includes(text.toLowerCase()),
      );

  }
}
