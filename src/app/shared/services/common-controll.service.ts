import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonControllService {
controll = new BehaviorSubject(false)
  constructor(private messageService: MessageService) { }
  show(){
    this.controll.next(true)
  }
  hide(){
    this.controll.next(false)
  }
  showalert(severity = 'success',code:string,msgstr:string) {
    this.messageService.clear();
    this.messageService.add({ severity: severity, summary: code, detail: msgstr ,life:2000});
  }
  hidealert(){
    this.messageService.clear()
  }
}

