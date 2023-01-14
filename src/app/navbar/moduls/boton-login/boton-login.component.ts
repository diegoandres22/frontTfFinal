import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-boton-login',
  templateUrl: './boton-login.component.html',

  styleUrls: ['./boton-login.css']

})
export class BotonLoginComponent implements OnInit {

  islogged = false;

  constructor(private router: Router, private tokenService: TokenService) { }

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.islogged = true;
    } else {
      this.islogged = false;
    }
  }

  onLogOut(): void {
    this.tokenService.logOut();
    window.location.reload();
  }
  Login(): void {
    this.router.navigate([''])
  }
}
