import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
// import { User } from '../models';
// import { environment } from 'src/environments/environment';
import { User } from './user';
import { environment } from 'projects/mfe-profile/src/environments/environment';
import { LoginData } from './logi-data';
import { Router } from '@angular/router';
// import { Observable } from 'rxjs/dist/types/internal/Observable';
// import { BehaviorSubject } from 'rxjs/dist/types/internal/BehaviorSubject';


@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    public currentUserSubject: BehaviorSubject<LoginData>;
    public currentUser: Observable<LoginData>;

    constructor(private http: HttpClient, private router: Router) {
        let val: any = localStorage.getItem('currentUser');
        this.currentUserSubject = new BehaviorSubject<LoginData>(JSON.parse(val));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): LoginData {
        return this.currentUserSubject.value;
    }

    login(username: string, password: string) {
        return this.http.post<LoginData>(`${'api/users'}`, { username, password })
            .pipe(map(user => {
                localStorage.setItem('currentUser', JSON.stringify(user));
                this.currentUserSubject.next(user);
                return user;
            }));
    }

    logout() {
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(new LoginData());
        alert('Logged Out Successfully');
        this.router.navigateByUrl('/');
    }
}