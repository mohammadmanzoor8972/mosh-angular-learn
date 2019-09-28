import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class PostService {
  private url = "https://jsonplaceholder.typicode.com/posts";
  constructor(private http: Http) {

  }

  getPost(){
    return this.http.get(this.url)
  }
  deletePost(post){
    return this.http.delete(this.url +"/"+post.id)
  }
  updatePost(post){
    return this.http.patch(this.url +"/"+post.id, JSON.stringify({isRead:true}))
  }
  createPost(post){
    return  this.http.post(this.url, JSON.stringify(post));
  }


}
