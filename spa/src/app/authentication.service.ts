import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import { Login } from './_models/login';

@Injectable()
export class AuthenticationService {

    constructor(private _http: HttpClient) { }

    public Authenticate(userName: string, password: string): any {
        console.log("user: " + userName + " senha " + password);
        return this._http.post<any>("https://localhost:5050/api/token",
            { username: userName, password: password }
            );
        //    .map(data => {
        //       // login successful if there's a jwt token in the response

        //       console.log("data : " +data);
        //       if (data && data.token ) {
        //           // store user details and jwt token in local storage to keep user logged in between page refreshes
        //           localStorage.setItem('currentUser', JSON.stringify(data.token));
        //       }

        //       return data;
        //   });        
    }
}
