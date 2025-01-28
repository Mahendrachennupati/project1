import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ProgressSpinnerModule,
    ToastModule,
    ButtonModule,
    RippleModule
  ],
  exports:[
    ProgressSpinnerModule,
    ToastModule,
    ButtonModule,
    RippleModule
  ]
})
export class SimilarModule { }
