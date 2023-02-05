import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'projects/shared/src/lib/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  constructor(public auth: AuthenticationService, private router: Router) { }
  getFlag() {
    // console.log(localStorage.getItem('currentUser'), 'kkkk');
    return localStorage.getItem('currentUser');
  }
  getCounter() {
    // if (!localStorage.getItem('currentUser')) {
    //   alert('Kindly Login to see counter functions');
    // } else {
      this.router.navigateByUrl('/counter');
    // }
  }
}
