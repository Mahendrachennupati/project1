import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appTrimSpace]'
})
export class TrimSpaceDirective {
  constructor(private el: ElementRef) {}

  @HostListener('blur') onBlur() {
    let inputValue = this.el.nativeElement.value;
    // Replace multiple spaces with a single space & trim leading/trailing spaces
    this.el.nativeElement.value = inputValue.replace(/\s+/g, ' ').trim();
  }
}
