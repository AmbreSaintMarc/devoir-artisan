import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtisansService } from '../../artisans.service';
import { ArtisanComponent } from '../../artisan/artisan.component';
import { Artisan } from '../../artisan';


@Component({
  selector: 'app-artisan-list',
  imports: [CommonModule, ArtisanComponent],
  templateUrl: './artisan-list.component.html',
  styleUrl: './artisan-list.component.scss',
  providers: [ArtisansService]
})
export class ArtisanListComponent {
  public artisans : Artisan[] = []
  artisanList: Artisan[] = [];

  filteredArtisanList: Artisan[] = [];

  constructor(private service : ArtisansService) {
    this.service.getAllArtisans().then((artisanList: Artisan[]) => {
      this.artisanList = artisanList ;
      this.filteredArtisanList = artisanList;
    });
  }

  filterResults(text: string) {
    if (!text) {
      this.filteredArtisanList = this.artisanList ;
      return; 
    }
  

    this.filteredArtisanList = this.artisanList.filter((artisan) => 
      artisan?.name.toLowerCase().includes(text.toLowerCase()),
    );
  }


}
