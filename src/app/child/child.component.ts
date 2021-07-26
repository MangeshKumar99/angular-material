import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChange, SimpleChanges } from '@angular/core';
import { InteractionService } from '../interaction.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  // @Input()
  // loggedIn!: boolean; 
  message:string | undefined
  @Input()loggedIn!: boolean;
  myName='Mangesh Choudhary'

  @Output()greetEvent=new EventEmitter()
  greetMe(){
    alert('Hey Mangesh....')
  }
  callParentGreet(){
    this.greetEvent.emit(this.myName)
  }


  // private _loggedIn!: boolean;
  // public get loginStatus(){
  //   return this._loggedIn
  // }
  // @Input()
  // public set loginStatus(value:boolean){
  //   this._loggedIn=value
  //   if(this._loggedIn===true){
  //     this.message='You have been logged in to the application currently'
  //   }
  //   else if(this._loggedIn===false){
  //     this.message='You have been logged out from the application currently'
  //   }
  // }




  constructor(private service:InteractionService) { }
  ngOnInit(){
  this.service.teacherMessage$.subscribe(data=>{
    if(data==='Good Morning'){
      alert('Good Morning Teacher')
    }
    else{
      alert('Thank you Teacher')
    }
  })

  }

  ngOnChanges(changes:SimpleChanges){
    console.log(changes)
    const changedValue=changes['loggedIn']
    if(changedValue.currentValue===true){
      this.message='You have been logged in to the application currently'
    }
    else if(changedValue.currentValue===false){
      this.message='You have been logged out from the application currently'
    }
  

  }

}
