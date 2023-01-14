import { Component, OnInit } from '@angular/core';
import { Experiencias } from '../modelo/experiencias';
import { ExperienciasService } from '../servicios/sExperiencias.service';
import { TokenService } from '../servicios/token.service';

@Component({
  selector: 'app-experiencias',
  templateUrl: './experiencias.component.html',
  styleUrls: ['./experiencias.component.css']
})
export class ExperienciasComponent implements OnInit {

  exPe: Experiencias[] = [];

  constructor(private sExperiencias: ExperienciasService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarExperiencia();
    if (this.tokenService.getToken()) {
      this.isLogged = true;

    } else {
      this.isLogged = false
    }
  }

  cargarExperiencia(): void {
    this.sExperiencias.lista().subscribe(data => { this.exPe = data });
  }

  delete() {
    const idt = localStorage.getItem("id");
    if (idt != undefined) {
      this.sExperiencias.delete(parseInt(idt)).subscribe(
        data => {
          console.log(idt);
          localStorage.clear();
          this.cargarExperiencia();
          window.location.reload();
        }, err => {
          alert("no se pudo borrar la experiencia");
        }
      )
    }
  }
  tomaId(id?: number): void{
    localStorage.setItem("id", id.toString());
  }

}
