import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonControllService {
controll = new BehaviorSubject(false)
  constructor() { }
  show(){
    this.controll.next(true)
  }
  hide(){
    this.controll.next(false)
  }
}

