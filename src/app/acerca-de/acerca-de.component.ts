import { Component, OnInit } from '@angular/core';
import { Diego } from '../modelo/diego';
import { SDiegoService } from '../servicios/sDiego.service';
import { TokenService } from '../servicios/token.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDEComponent implements OnInit {

  dieguito: Diego [] = [];
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
