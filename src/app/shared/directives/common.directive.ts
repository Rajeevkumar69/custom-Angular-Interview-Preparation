import { Directive, ElementRef, HostListener, Injectable } from '@angular/core';

@Directive({
     selector: '[changeBgColor]'
})

@Injectable({
     providedIn: 'root'
})

export class ChangeBgColorDirective {

     constructor(private el: ElementRef) { }

     @HostListener('mouseenter')
     onMouseEnter() {
          this.el.nativeElement.style.backgroundColor = 'yellow';
     }

     @HostListener('mouseleave')
     onMouseLeave() {
          this.el.nativeElement.style.backgroundColor = '';
     }
}
