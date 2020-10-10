import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PostsService {

  private _postsUrl="http://localhost:3001/api/posts"
  constructor(private http:HttpClient) {
    
   }

  getPosts(){
   return this.http.get<any>(this._postsUrl)
  }
}
