import { Directive, Input, HostListener, ElementRef, OnInit } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appPasswordValidator]'
})
export class PasswordValidatorDirective implements OnInit {
  @Input() minLength: number = 6; // Default min length
  @Input() pattern: string = '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]+$'; // Default pattern

  constructor(private el: ElementRef, private ngControl: NgControl) {}

  ngOnInit() {
    if (this.ngControl && this.ngControl.control) {
      this.ngControl.control.setValidators([
        control => {
          const value = control.value || '';

          // Min Length Validation
          if (value.length < this.minLength) {
            return { minlength: `Password must be at least ${this.minLength} characters long.` };
          }

          // Pattern Validation
          if (!new RegExp(this.pattern).test(value)) {
            return { pattern: 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.' };
          }

          return null;
        }
      ]);
      this.ngControl.control.updateValueAndValidity();
    }
  }
}
