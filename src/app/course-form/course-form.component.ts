import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent implements OnInit {

  courseCategory = [{
    value:1, text:"Development"},
    {value:2, text:"Art"},
    {value:3, text:"Language"}]

    submitCourse(obj){
      console.log(obj.value)
    }
  constructor() { }

  ngOnInit() {
  }

}
