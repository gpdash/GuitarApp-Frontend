import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class MoviesService {

  private _moviesUrl="http://localhost:3001/api/movie"
  constructor(private http:HttpClient) {
    
   }

  getMovies(){
   return this.http.get<any>(this._moviesUrl+"/all")
  }

  getMoviesWithTabs(){
    return this.http.get<any>(this._moviesUrl+"/tabs")
   }
   getMoviesWithChords(){
    return this.http.get<any>(this._moviesUrl+"/chords")
   }
}
