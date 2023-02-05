import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, tap, throwError } from 'rxjs';
import { Product } from './product';
import { UserValue } from './user-data';
// import { User } from './user-data';
import { UserFetch } from './user-fetch';
// import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  products: any = [];
  // [
  //   {
  //     "id": 1,
  //     "name": "Hermoine",
  //     "designation": "Module Leader",
  //     // "link": "",
  //     "empId": "ACE10801",
  //     "description": "Development",
  //     "project": "JLM Project",
  //     "manager": "Arun"
  //   },
  //   {
  //     "id": 2,
  //     "name": "Seetha",
  //     "designation": "Tester",
  //     // "link": "",
  //     "empId": "ACE10802",
  //     "description": "Testing",
  //     "project": "JLM Project",
  //     "manager": "Arun"
  //   },
  //   {
  //     "id": 3,
  //     "name": "Vineetha",
  //     "designation": "Project Leader",
  //     // "link": "",
  //     "empId": "ACE10803",
  //     "description": "Development",
  //     "project": "JLM Project",
  //     "manager": "Arun"
  //   },
  //   {
  //     "id": 4,
  //     "name": "Sandhiya",
  //     "designation": "HR Manager",
  //     // "link": "",
  //     "empId": "ACE10804",
  //     "description": "Human Resource",
  //     "project": "JLM Project",
  //     "manager": "Arun"
  //   },
  //   {
  //     "id": 5,
  //     "name": "Janani",
  //     "designation": "Engineer",
  //     // "link": "",
  //     "empId": "ACE10805",
  //     "description": "Development",
  //     "project": "JLM Project",
  //     "manager": "Arun"
  //   },
  //   {
  //     "id": 6,
  //     "name": "Preethi",
  //     "designation": "Sales Executive",
  //     // "link": "",
  //     "empId": "ACE10806",
  //     "description": "Marketing",
  //     "project": "JLM Project",
  //     "manager": "Arun"
  //   },
  //   {
  //     "id": 7,
  //     "name": "Chandra",
  //     "designation": "Technical Leader",
  //     // "link": "",
  //     "empId": "ACE10807",
  //     "description": "Development",
  //     "project": "JLM Project",
  //     "manager": "Arun"
  //   },
  //   {
  //     "id": 8,
  //     "name": "Dhiya",
  //     "designation": "Senior Engineer",
  //     // "link": "",
  //     "empId": "ACE10808",
  //     "description": "Development",
  //     "project": "JLM Project",
  //     "manager": "Arun"
  //   },
  //   {
  //     "id": 9,
  //     "name": "Tharun",
  //     "designation": "Senior Tester",
  //     // "link": "",
  //     "empId": "ACE10809",
  //     "description": "Testing",
  //     "project": "JLM Project",
  //     "manager": "Arun"
  //   }
  // ];
  ApiURL: string = '';
  selectedData: Product | undefined;

  constructor(private http: HttpClient) {
  }
  apiurl = 'api/users';                
  headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json');
  httpOptions = {
    headers: this.headers
  };
  private handleError(error: any) {
    console.error(error, 'error');                                  
    return throwError(error);
  }
  getUsers(): Observable<UserValue[]> {
    return this.http.get<UserValue[]>(this.apiurl).pipe(
      tap(data => console.log(data, 'data')),
      catchError(this.handleError)
    );
  }
  getUser(id: number): Observable<UserFetch> {
    const url = `${this.apiurl}/${id}`;
    return this.http.get<UserFetch>(url).pipe(catchError(this.handleError));
  }

  addUser(user: UserFetch): Observable<UserFetch> {
    // user.id = 0;
    return this.http.post<UserFetch>(this.apiurl, user, this.httpOptions).pipe(
      tap((data) => console.log(data)),
      catchError(this.handleError)
    );
  }

  deleteUser(id: number): Observable<UserFetch> {
    const url = `${this.apiurl}/${id}`;
    return this.http
      .delete<UserFetch>(url, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  updateUser(user: UserFetch): Observable<UserFetch> {
    const url = `${this.apiurl}/${user.id}`;
    return this.http.put<UserFetch>(this.apiurl, user, this.httpOptions).pipe(
      map(() => user)
    );
  }
  createEmployee(data: any) {
    this.products.push(data);
  }
  delEmployee(id: number) {
    const i = this.products.findIndex((f: any) => f.id === id);
    if (i > -1) {
      this.products.splice(i, 1);
    }
  }
  getEmployeeByID(id: number) {
    this.selectedData = this.products.find((p: any) => p.id === id) as Product;
  }
  updateEmployee(employee: Product) {
    const i = this.products.findIndex((f: any) => f.id === employee.id);
    this.products[i] = employee;
  }
}
