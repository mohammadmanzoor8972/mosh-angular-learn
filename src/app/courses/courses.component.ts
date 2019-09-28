import { CoursesSerive } from './courses.services';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  title="Authors";
  courses;
  authors;
  
  constructor(services: CoursesSerive) { 
    
    this.courses = services.getCourses();
    this.authors = services.getAuthors();
  }

  ngOnInit() {
  }

}
