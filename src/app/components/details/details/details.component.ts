import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArtisansService } from '../../../artisans.service';
import { Artisan } from '../../../artisan';
import emailjs from '@emailjs/browser';
import { CommonModule } from '@angular/common';
import {FormsModule } from '@angular/forms';


@Component({
  selector: 'app-details',
  imports: [FormsModule, CommonModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})

export class DetailsComponent{
  //render the artisans
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



  public sendEmail(e: Event) {

    emailjs
      .sendForm('service_portfolioASM2024', 'template_109fh61', e.target as HTMLFormElement, {
        publicKey: 'NnsCukYT7qi_BWB4D',
      })

  }
}
 

