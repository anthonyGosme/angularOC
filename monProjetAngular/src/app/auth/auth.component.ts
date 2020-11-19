import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/authService';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(private authService :AuthService, private router: Router) { }
  authStatus : boolean  = false ;
  ngOnInit(): void {
    this.authStatus = this.authService.isAuth ;
  }
  onSignIn()
  {
    this.authService.SignIn().then(
      ()=> {
        this.router.navigate(["appareils"])
         this.authStatus = this.authService.isAuth ;
      }
    )
  }

  onSignOut()
  {
    this.authService.SignOut() ;
    this.authStatus = this.authService.isAuth ;

  }
}
