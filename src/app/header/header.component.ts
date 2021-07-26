import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit,AfterViewInit {
  @Input() deviceXs!:boolean
  @ViewChild(MatSidenav)sidenav!:MatSidenav

  constructor(public breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
  }
  ngAfterViewInit(){
    this.breakpointObserver.observe(['(max-width:800px)']).subscribe(result=>{
      if(result.matches){
        this.sidenav.mode='over'
        this.sidenav.close()
      }
      else{
        this.sidenav.mode='side'
        this.sidenav.open()
      }
    })
  }

}
