import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.css']
})
export class PlanetComponent implements OnInit {
  myData:string;
  isActive:boolean;
  mycolor:string = "red"
  constructor() { 
    this.myData = "hello";
    this.isActive = !this.isActive;
  }

  ngOnInit() {
  }

}
