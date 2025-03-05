import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArtisansService } from '../../../artisans.service';
import { Artisan } from '../../../artisan';

@Component({
  selector: 'app-details',
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  artisanService = inject(ArtisansService);
  artisan: Artisan | undefined;
  artisanId = Number(this.route.snapshot.params['id']);

  constructor() {
    const artisanId = parseInt(this.route.snapshot.params['id'], 10);
    this.artisanService.getArtisansById(artisanId).then((artisan) => {
      this.artisan = artisan;
    });
  }

}
