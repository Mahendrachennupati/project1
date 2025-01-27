import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { CommonControllService } from 'src/app/shared/services/common-controll.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit{
  constructor(private _controller:CommonControllService){
    this._controller.show();
  }
  
  ngAfterViewInit(){
    setTimeout(()=>{
      this._controller.hide();
    },1000)
    
  }
}
