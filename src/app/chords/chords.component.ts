import { Router } from '@angular/router';
import { MoviesService } from './../Services/movies.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chords',
  templateUrl: './chords.component.html',
  styleUrls: ['./chords.component.css']
})
export class ChordsComponent implements OnInit {

  tiles:any
  tile_type="Chords";

  constructor(private moviesService: MoviesService, private router: Router) { }

  ngOnInit(): void {
    this.moviesService.getMoviesWithChords()
    .subscribe(
      res=>{this.tiles=res},
      err=>{console.log(err)}
    )
  } 

}
