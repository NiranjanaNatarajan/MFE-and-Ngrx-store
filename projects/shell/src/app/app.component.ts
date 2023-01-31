import { Component, Inject } from '@angular/core';
import { filter, map, Observable, shareReplay } from 'rxjs';
import { OKTA_AUTH, OktaAuthStateService } from '@okta/okta-angular';
import { OktaAuth } from '@okta/okta-auth-js';
// import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  public isAuthenticated$: Observable<boolean> = this.oktaStateService.authState$
      .pipe(
          filter((authState: any) => !!authState),
          map((authState: { isAuthenticated: any; }) => authState.isAuthenticated ?? false),
          shareReplay()
      );

  public name$: Observable<string> = this.oktaStateService.authState$
      .pipe(
          filter((authState: any)=> !!authState && !!authState.isAuthenticated),
          map((authState: any) => authState.idToken?.claims.name ?? '')
      );

  constructor(private oktaStateService: OktaAuthStateService, @Inject(OKTA_AUTH) private oktaAuth: OktaAuth) { }

  public async signIn(): Promise<void> {
    await this.oktaAuth.signInWithRedirect();
  }

  public async signOut(): Promise<void> {
    await this.oktaAuth.signOut();
  }
}
