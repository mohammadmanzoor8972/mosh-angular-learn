import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Angular';
  color = "blue"
  isFav = true;

  zippy = {"title":"Angular JS",
"content":"India got tallent"}

  tweet = {
    body:'Here is the body of tweet.....',
    isLiked:true,
    likesCount:250
  }

  helloIndia(){
   console.log("India is beautiful!");
  }

  myCustomFavrt(isSelected){
    console.log("Calling from Star : " + isSelected);
  }

  myCustomClick(obj){
    console.log(obj);
  }
}


