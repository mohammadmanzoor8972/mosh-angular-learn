import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {
  @Input() isLiked:boolean;
  @Input() likesCount:number = 0;
  constructor() { }

  ngOnInit() {
  }

  myLikeClick(){
    this.isLiked=!this.isLiked;
    this.likesCount += (this.isLiked) ? 1 : -1;
  }

}
