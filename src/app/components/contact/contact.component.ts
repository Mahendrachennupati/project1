import { Component } from '@angular/core';
import { CommonControllService } from 'src/app/shared/services/common-controll.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
constructor(private _controller:CommonControllService){
    this._controller.show();
    this._controller.showalert('success','200','message configuration done')
  }
  
  ngAfterViewInit(){
    setTimeout(()=>{
      this._controller.hide();
    },1000)
    
  }
}
