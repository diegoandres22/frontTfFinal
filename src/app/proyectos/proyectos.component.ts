import { Component, OnInit } from '@angular/core';
import { Proyecto } from '../modelo/proyecto';
import { sProyectoService } from '../servicios/s-proyecto.service';
import { TokenService } from '../servicios/token.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  
  proye: Proyecto[] = [];

  constructor(private proy: sProyectoService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarProyecto();
    if (this.tokenService.getToken()) {
      this.isLogged = true;

    } else {
      this.isLogged = false
    }
  }

  cargarProyecto(): void {
    this.proy.lista().subscribe(data => { this.proye = data });
  }

  delete() {
    const idp = localStorage.getItem("id");
    if (idp != undefined) {
      this.proy.delete(parseInt(idp)).subscribe(
        data => {
          localStorage.clear();
          this.cargarProyecto();
          window.location.reload();
        }, err => {
          alert("no se pudo borrar el proyecto");
        }
      )
    }
  }
  tomaId(id?: number): void{
    localStorage.setItem("id", id.toString());
  }

}
