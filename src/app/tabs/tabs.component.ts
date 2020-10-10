import { Router } from '@angular/router';
import { MoviesService } from './../Services/movies.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

  tiles:any
  tile_type="Tabs";

  constructor(private moviesService: MoviesService, private router: Router) { }

  ngOnInit(): void {
    this.moviesService.getMoviesWithTabs()
    .subscribe(
      res=>{this.tiles=res},
      err=>{console.log(err)}
    )
  } 
}

 // movies=[
  //   {_id:"movie1",name:"Zindagi Na Milegi Dobara",image:"../../assets/tab.jpg",
  //   song_list:[["Khaabon Ke Parinday", "tab1"],["Khaabon Ke Parinday", "tab2"],["Khaabon Ke Parinday", "tab3"]]}
  // ]