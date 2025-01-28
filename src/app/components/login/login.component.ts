import { AfterViewInit, Component, OnInit } from '@angular/core';
import { CommonControllService } from 'src/app/shared/services/common-controll.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements AfterViewInit,OnInit {
  isLogin = 1;
  constructor(private _controller:CommonControllService,private _avr:ActivatedRoute){
    this._controller.show();
    this._controller.showalert('success','200','message configuration done')
  }
  ngOnInit(): void {
    let fromType = this._avr.snapshot.paramMap.get('type')
    this.isLogin = fromType ? parseInt(fromType) :1;
  }
  
  ngAfterViewInit(){
    setTimeout(()=>{
      this._controller.hide();
    },1000)
    
  }
}
