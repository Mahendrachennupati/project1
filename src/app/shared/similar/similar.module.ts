import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimemodulesModule } from './primemodules/primemodules.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { PasswordValidatorDirective ,TrimSpaceDirective} from '../Directives/';
@NgModule({
  declarations: [
    TrimSpaceDirective,
    PasswordValidatorDirective
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    PrimemodulesModule,
    
  ],
  exports:[
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    PrimemodulesModule
  ]
})
export class SimilarModule { }
