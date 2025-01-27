import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonControllService } from 'src/app/shared/services/common-controll.service';
@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit,OnDestroy{
  isLoading: boolean = false;
  constructor(private _controller:CommonControllService){

  }
  ngOnInit(){
    this._controller.controll.subscribe((res:boolean)=>{
      this.isLoading = res;
    })
  }
  ngOnDestroy(){
    this._controller.controll.unsubscribe()
  }
  
}
