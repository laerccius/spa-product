import { Component, OnInit } from '@angular/core';
import {Login} from '../_models/login';
import {AuthenticationService} from '../authentication.service';
import {AuthService} from '../auth/auth.service';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/map';
import { catchError, map, tap } from 'rxjs/operators';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
login: Login  ;

  constructor(private authenticationService:AuthenticationService,private authService:AuthService) { 
    this.login = new Login();    
  }

  ngOnInit() {
  }

Authenticate(){  
  var response:any;
   this.authenticationService.Authenticate(this.login.username,this.login.password)
   .subscribe(data => { this.AuthenticateMap(data)});
}

AuthenticateMap(data:any){  
  if(data.access_token){
    this.authService.setProfile(data);
    window.location.href ="http://localhost:4200/products";
  }else 
    alert("Erro ao logar, favor tentar mais tarde.")  
  
}

}
