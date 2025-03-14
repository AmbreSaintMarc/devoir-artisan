import { Injectable} from '@angular/core';

import { Artisan } from './artisan';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



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

  async getArtisansByCategory(category:string): Promise<Artisan | undefined> {
    const data = await fetch(`${this.url}/${category}`);
    return (await data.json()) ?? {};  
  }

}