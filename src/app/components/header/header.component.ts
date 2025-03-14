import { Component, input, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ArtisansService } from '../../artisans.service';


@Component({
  selector: 'app-header',
  imports: [RouterLink, NgbCollapseModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  providers: []

})
export class HeaderComponent {
	isMenuCollapsed = true;
  route: ActivatedRoute = inject(ActivatedRoute);
  artisanService = inject(ArtisansService);

  
  constructor(private router: Router) {}

  
  navigateToArtisansCategory() {
    this.router.navigateByUrl("artisans-list/:category")
  }

}
