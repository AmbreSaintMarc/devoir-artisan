import { Injectable} from '@angular/core';

import { Artisan } from './artisan';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ArtisansService {
  url = 'http://localhost:3000/artisans';
  constructor(private http: HttpClient) {}

  async getAllArtisans(): Promise<Artisan[]> {
    const data = await fetch(this.url);
    return (await data.json()) ?? [];
  }

  async getArtisansById(id:number): Promise<Artisan | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return (await data.json()) ?? {};  
  }

  getArtisans(): Observable<Artisan[]> {
    return this.http.get<Artisan[]>(
      `http://localhost:3000/artisans`
    )
  }


}