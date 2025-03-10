import { Injectable} from '@angular/core';

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

  async getArtisansByTop(top:boolean): Promise<Artisan | undefined> {
    const data = await fetch(`${this.url}/${top}`)
    return (await data.json()) ?? {};  
  
  }


  // topArtisans() {
  //   if (this.artisan?.top === true) {
  //     return this.topArtisanList
  //   }
  //   else return
  // }

  
}