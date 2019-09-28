import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
  firstNames:string;
  comment:string;
  contactMethods = [
    { id:1, name:'Email'},
    { id:2, name:'SMS'},
    { id:3, name:'MMS'},
    { id:4, name:'Whatsap'},
    { id:5, name:'Facebook'},
  ]
  constructor(){
    this.firstNames = "Taskin Shaikh";
  }
  log(d){
    console.log(d);
  }

  submit(d){
    console.log(d.value)
  }

}
