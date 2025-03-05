import { Injectable, OnInit, Input } from '@angular/core';
import { ArtisanComponent } from './artisan/artisan.component';
import { Observable } from 'rxjs';
import { Artisan } from './artisan';



@Injectable({
  providedIn: 'root'
})
export class ArtisansService {

  url = 'http://localhost:3000/artisans';



  async getAllArtisans(): Promise<Artisan[]> {
    const data = await fetch(this.url);
    return (await data.json()) ?? [];
  }

 

  async getArtisansById(id:number): Promise<Artisan | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return (await data.json()) ?? {};  
  }
  
}
