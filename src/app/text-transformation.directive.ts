import { Directive, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appTextTransformation]'
})
export class TextTransformationDirective {

  fontSize: string;
  @HostBinding('style.background-color') background: string;

  constructor(private elementRef: ElementRef) {
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.background = 'pink';
    this.fontSize = '50px';
    this.IncreaseFontSize();
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.background = 'yellow';
    this.fontSize = '12px';
    this.IncreaseFontSize();
  }

  private IncreaseFontSize() {
    this.elementRef.nativeElement.style.fontSize = this.fontSize;
  }

}
