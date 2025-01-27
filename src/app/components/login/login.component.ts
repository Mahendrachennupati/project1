import { Component } from '@angular/core';
import { CommonControllService } from 'src/app/shared/services/common-controll.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
constructor(private _controller:CommonControllService){
    this._controller.show();
  }
  
  ngAfterViewInit(){
    setTimeout(()=>{
      this._controller.hide();
    },1000)
    
  }
}
