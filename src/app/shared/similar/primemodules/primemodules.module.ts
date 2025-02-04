import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputTextModule } from 'primeng/inputtext';
import { KeyFilterModule } from 'primeng/keyfilter';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { RippleModule } from 'primeng/ripple';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ProgressSpinnerModule,
    RadioButtonModule,
    InputTextModule,
    KeyFilterModule,
    PasswordModule,
    ButtonModule,
    ToastModule,
    RippleModule
  ],
  exports:[
    ProgressSpinnerModule,
    RadioButtonModule,
    InputTextModule,
    KeyFilterModule,
    PasswordModule,
    ButtonModule,
    ToastModule,
    RippleModule
  ]
})
export class PrimemodulesModule { }
