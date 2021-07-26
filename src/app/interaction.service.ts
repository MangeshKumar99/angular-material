import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {
  // Creating a subject
  private teacherMessageSource=new Subject<string>()

  //Express subject as an observable
  teacherMessage$=this.teacherMessageSource.asObservable()

  constructor() { }
  sendMessage(message:string){
    this.teacherMessageSource.next(message)

  }
}
