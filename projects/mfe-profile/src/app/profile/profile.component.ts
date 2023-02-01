import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OktaAuthStateService } from '@okta/okta-angular';
import { AuthenticationService } from 'projects/shared/src/lib/authentication.service';
import { filter, map } from 'rxjs';
import { first } from 'rxjs/operators';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styles: []
})
export class ProfileComponent {
  loading = false;
  submitted = false;
  error = '';
  @Input() headerName = 'Login Form'
  loginForm: FormGroup | any;
  constructor(
    // private formBuilder: FormBuilder,
    // private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    // if (this.authenticationService.currentUserValue) {
    //   this.router.navigate(['/']);
    // }
  }
  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });
  }
  loginSubmit(data1: any) {
    this.submitted = true;
    this.loading = true;
    this.authenticationService.login(this.loginForm.getRawValue().email, this.loginForm.getRawValue().password)
      // .pipe(first())
      .subscribe(
        (data: any) => {
          alert('Logged In Successfully');
          this.router.navigate(['/counter']);
        },
        (error: any) => {
          this.error = error;
          this.loading = false;
        });
  }
}