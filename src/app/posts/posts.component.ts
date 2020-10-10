import { MoviesService } from './../Services/movies.service';
import { Router } from '@angular/router';
import { PostsService } from './../Services/posts.service';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  user:any
  movies:any
  constructor(private postsService: PostsService,private moviesService: MoviesService, private router: Router) { }

  ngOnInit(): void {
    this.postsService.getPosts()
    .subscribe(
      res => {this.user=res
      console.log(this.user)},
      err => {
        if(err instanceof HttpErrorResponse){
          if(err.status===401){
            this.router.navigate(['/login'])
          }
        }
      } 
    )

    this.moviesService.getMovies()
    .subscribe(
      res=>{this.movies=res},
      err=>{console.log(err)}
    )
  }



}
