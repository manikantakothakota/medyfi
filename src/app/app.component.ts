import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router){

  }
  openhome(){
    this.router.navigate(['home']);
  };
  openaboutus(){
    this.router.navigate(['aboutus']);
  };
  opencareers(){
    this.router.navigate(['careers']);
  };
  opencontactus(){
    this.router.navigate(['contactus']);
  ;}
  openservices(){
    this.router.navigate(['services']);
  }

}
