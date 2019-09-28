import { PostService } from './../services/post.service';
import { InputFormatDirective } from './../input-format.directive';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts:any[];
  private url = "https://jsonplaceholder.typicode.com/posts";

  constructor(private service:PostService) {
   
  }

  createPost(input:HTMLInputElement){
    let post = {title:input.value};
    input.value = "";
    this.service.createPost(post)
    .subscribe(response=>{
      post["id"]= response.json().id;
      this.posts.splice(0,0, post);
    }, error =>{
      console.log(error);
    })
  }

  updatePost(post){
    this.service.updatePost(post)
    .subscribe(response=>{
      console.log(response.json());
    }, error =>{
      console.log(error);
    })
  }

  deletePost(post, input:HTMLInputElement){
    input.disabled = true;
    this.service.deletePost(post)
    .subscribe(response=>{
      let index = this.posts.indexOf(post);
      this.posts.splice(index,1);
      input.disabled = false;
    }, error =>{
      console.log(error);
    })
  }

  ngOnInit() {
   this.service.getPost()
    .subscribe(response =>{
      this.posts = response.json();
    }, error =>{
      console.log(error);
    })

  }

}
