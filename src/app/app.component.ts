import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from './child/child.component';
import {MediaObserver,MediaChange} from '@angular/flex-layout'
import {Subscription} from 'rxjs'
import { InteractionService } from './interaction.service';
import {Form, FormControl, FormGroup,FormArray} from '@angular/forms'
import {FormBuilder,Validators} from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnDestroy {
  // title = 'pc';
  // userLoggedIn!:boolean
  // opened:boolean=false;
  
  // @ViewChild(ChildComponent)childComponentRef!:ChildComponent
  // ngAfterViewInit(){
  //   this.childComponentRef.message="Message from Daddy..."
  // }
  // greet(name:string){
  //   alert('Hello from' +' ' + name)
  // }
  // constructor(private fb:FormBuilder,private service:InteractionService){}
  // registrationForm:any=this.fb.group({
  //   firstName:['' ,Validators.required],
  //   lastName:['' ,Validators.required],
  //   email:['' ,Validators.required]
    
  // })
  // greetGoodMorning(){
  //   this.service.sendMessage('Good Morning')
  // }
  // greetWellDone(){
  //   this.service.sendMessage('Well Done')
  // }
  mediaSub!:Subscription
  deviceXs!:boolean

  constructor(private mediaObserverService:MediaObserver){}
  ngOnInit(){
    this.mediaSub=this.mediaObserverService.media$.subscribe((result:MediaChange)=>{
      console.log(result)
      console.log(result.mqAlias)
      if(result.mqAlias=='xs'){this.deviceXs=true}
      else{this.deviceXs=false}

    })

  }
  ngOnDestroy(){
    this.mediaSub.unsubscribe()
  }
  


}
