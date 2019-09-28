import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css'],
  encapsulation: ViewEncapsulation.Emulated
  //inputs:["color","isFavorite"]
  
})

export class StarComponent implements OnInit {
  @Input("Free") isSelected:boolean;
  @Input() fontSize:string;
  @Input() color:string;
  
  @Output() change = new EventEmitter();
  @Output() click = new EventEmitter();

  constructor() {
    this.color = "red";
    this.fontSize="50px";
   }

  ngOnInit() {

  }

  favorute(){
    this.isSelected = !this.isSelected;
    this.change.emit(this.isSelected);
    this.click.emit({"myValue":this.isSelected})
    console.log("Super Class of STAR");
  }

}
