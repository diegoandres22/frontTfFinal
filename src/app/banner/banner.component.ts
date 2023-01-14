import { Component, OnInit } from '@angular/core';
import { Diego } from '../modelo/diego';
import { SDiegoService } from '../servicios/sDiego.service';
import { TokenService } from '../servicios/token.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  dieguito: Diego [] = null;
  isLogged = false;
  
  constructor(private diegui: SDiegoService, private token: TokenService) { }

  ngOnInit(): void {
    this.cargarPersona();
    if (this.token.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false
    }
  }

  cargarPersona() {
    
    this.diegui.lista().subscribe(data => { 
      this.dieguito = data}
    )
  }

}
