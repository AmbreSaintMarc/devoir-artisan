import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

import { ArtisansService } from '../../artisans.service';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-header',
  imports: [RouterLink, NgbCollapseModule, ReactiveFormsModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  providers: []

})
export class HeaderComponent {
	isMenuCollapsed = true;
  private readonly fb = inject(FormBuilder);

  readonly searchForm = this.fb.nonNullable.group({
    searchValue: '',
    });
  
  constructor(private readonly router: Router) {}
  
  navigateToArtisansCategory() {
    this.router.navigateByUrl("artisans-search/")
 
  }

  onSubmit() {
    let searchValue = this.searchForm.value.searchValue ; //Get searchValue from form
    this.router.navigate(['artisans-search', ],{ queryParams:{searchValue : searchValue /*clef : valeur*/}}) 
    this.searchForm.reset();
  }
}
