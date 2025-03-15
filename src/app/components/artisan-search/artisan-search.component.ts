import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtisansService} from '../../artisans.service';
import { ArtisanComponent } from '../artisan/artisan.component';
import { Artisan } from '../../artisan';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { ParamMap, Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { map, Observable, switchMap } from 'rxjs';

@Component({
  selector: 'app-artisan-search',
  imports: [CommonModule, ArtisanComponent],
  templateUrl: './artisan-search.component.html',
  styleUrl: './artisan-search.component.scss',
  providers : [Location, {provide: LocationStrategy, useClass: PathLocationStrategy}]
})
export class ArtisanSearchComponent implements OnInit{
  public artisans : Observable<Artisan[]> | null = null;
  artisanService = inject(ArtisansService);
  artisansList : Artisan[] = []
  router = inject(Router)
  private readonly route: ActivatedRoute = inject(ActivatedRoute);
  category: string | null = null ;

  constructor(private service : ArtisansService) {}
  
  ngOnInit(): void {
  //Get artisans depending on filter
    this.route.queryParamMap.pipe( 
      map((param: ParamMap) => param.get('searchValue')),
      switchMap(searchValue => this.service.getArtisans().pipe( //Get artisansList
        map( artisansList => [searchValue,  artisansList] as const) //Subscribe to my category AND my artisansList (to be able to do multiple filters) 
      ))
      ).subscribe( //Subscribe to url || searchValue
        ([searchValue, artisansList]) => {
          this.artisansList = artisansList.filter((artisan) => //List = filteredList 
          artisan.name.toLowerCase().includes(searchValue?.toLowerCase() ?? '') // Filter search in artisan.name (and syntax)
          || artisan.specialty.toLowerCase().includes(searchValue?.toLowerCase() ?? '') //  Filter search in artisan.specialty (and syntax)
          || artisan.location.toLowerCase().includes(searchValue?.toLowerCase() ?? ''),  //  Filter search in artisan.location (and syntax)
        )  ;        
      }
    )

    this.route.paramMap.pipe(
        map(param => param.get('category')),  
        ).subscribe((category) => { //Get the url category
            this.category = category //Match url category to artisan.category
        })
  }

}