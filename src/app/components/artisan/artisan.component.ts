import { Component, inject, input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Artisan } from '../../artisan';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { ArtisansService } from '../../artisans.service';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-artisan',
  imports: [CommonModule, RouterLink, NgStyle],
  templateUrl: './artisan.component.html',
  styleUrl: './artisan.component.scss'
})
export class ArtisanComponent implements OnInit{
  artisan = input.required<Artisan>()
  artisansService = inject(ArtisansService);
  artisansList: Artisan[] = []
  noteBackground: string = 'linear-gradient(to right, gold %, transparent 33%)'
  paramNoteBackground : string = '% ,transparent 33.333%,transparent 100%)'
  note: number = 1;
  result: any
  
  

  //how to display details page on click 
  constructor(private router: Router) {}
  
  navigateToArtisanDetails() {
    this.router.navigateByUrl("details/:id")
  }

  getNote(note: number) {
    this.artisansList = this.artisansList.filter((artisan) =>
    artisan.note === note)
    
  }

  ngOnInit(): void {
    this.result =
      this.noteBackground = 'linear-gradient(to right,gold'  + (this.note.valueOf()*10)*2  + this.paramNoteBackground ; console.log(this.noteBackground)
    
  }

}

