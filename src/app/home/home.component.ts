import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  loginprop : boolean = false;
  logindetails : any;
  constructor() { }

  ngOnInit(): void {
  }

  SetShowHide(event : boolean){
    this.loginprop = event;
  }

  GetLoginDetails(event : any){
    //debugger;
    console.log(event);
    this.logindetails= event;
  }

}
