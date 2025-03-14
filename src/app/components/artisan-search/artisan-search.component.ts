import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtisansService} from '../../artisans.service';
import { ArtisanComponent } from '../artisan/artisan.component';
import { Artisan } from '../../artisan';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-artisan-search',
  imports: [CommonModule, ArtisanComponent],
  templateUrl: './artisan-search.component.html',
  styleUrl: './artisan-search.component.scss',
  providers : [Location, {provide: LocationStrategy, useClass: PathLocationStrategy}]
})
export class ArtisanSearchComponent implements OnInit{
  public artisans : Artisan[] = []
  artisanList: Artisan[] = [];
  artisanService = inject(ArtisansService);
  router = inject(Router)
  artisan: Artisan | undefined;

  constructor(private service : ArtisansService, private location: Location) {
    this.service.getAllArtisans().then((artisanList: Artisan[]) => {
      this.artisanList = artisanList ;
    });
  }

  isBuilding = false;
  isServices = false;
  isManufacturing = false;
  isFood = false;
  
  ngOnInit(): void {

    this.router.events.subscribe(event => {
      if (this.location.path() !== '/artisans-list/Batiment') {
        this.isBuilding = false;
      } else {
        this.isBuilding = true;
      }
    })
    this.router.events.subscribe(event => {
      if (this.location.path() !== '/artisans-list/Services') {
        this.isServices = false;
      } else {
        this.isServices = true;
      }
    })
    this.router.events.subscribe(event => {
      if (this.location.path() !== '/artisans-list/Fabrication') {
        this.isManufacturing = false;
      } else {
        this.isManufacturing = true;
      }
    })
    this.router.events.subscribe(event => {
      if (this.location.path() !== '/artisans-list/Alimentation') {
        this.isFood = false;
      } else {
        this.isFood = true;
      }
    })
  }


}