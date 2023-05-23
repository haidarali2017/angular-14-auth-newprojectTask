import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../store/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  get() {
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  }
}
