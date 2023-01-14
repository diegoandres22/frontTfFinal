import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencias } from 'src/app/modelo/experiencias';
import { ExperienciasService } from 'src/app/servicios/sExperiencias.service';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css']
})
export class NewExperienciaComponent implements OnInit {

  compania: String = '';
  tareas: String = '';
  fechainiyfina: String = '';
  imgtrabajo: String = '';
  puesto: String = '';

  constructor(private sExperiencias: ExperienciasService, private routes: Router) { }

  ngOnInit(): void {
  }
  onCreate(): void {
    const nExperiencia = new Experiencias(this.compania, this.tareas, this.fechainiyfina, this.imgtrabajo, this.puesto);
    this.sExperiencias.save(nExperiencia).subscribe(data => {
      alert("experiencia añadida");
      this.routes.navigate(['']);
    }, err => {
      alert("falló");
      this.routes.navigate(['']);
    }
    )
  }

}
