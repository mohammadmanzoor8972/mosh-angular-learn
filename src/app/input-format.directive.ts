import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {
  @Input('format') format:string;
  @HostListener('focus')onFocus(){
    console.log("On Focus");
  }
  @HostListener('blur')onBlur(){
    console.log("On Blur");
    let value:string = this.el.nativeElement.value;
    if(this.format=='lowercase'){
      this.el.nativeElement.value = value.toLocaleLowerCase();
    } else {
      this.el.nativeElement.value = value.toUpperCase();
    }
  }
  constructor(private el: ElementRef) { 
    
  }

}
