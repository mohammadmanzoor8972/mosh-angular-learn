import { AuthorserviceService } from './../authorservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  authors;
  isActive = false;
  color = "red";
  email="me@example.com";
  course;
  text = "Information technology computer professional"
  constructor(services : AuthorserviceService) { 
    this.authors = services.getAuthor();
    this.course = {
      title :"The Complete Angular Course",
      rating: 4.9747,
      students: 30123,
      price: 190.95,
      releaseDate: new Date(2016, 3, 1)
    }

  }

  onSave($event){
    $event.stopPropagation();
  console.log(this.course)
   
  }
  onKeyUp(){
    console.log(this.email);
  }

  onDivClicked(){
    console.log("UL Clicked!");
  }

  ngOnInit() {
    
  }

}
