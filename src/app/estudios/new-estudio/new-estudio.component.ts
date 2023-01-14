import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Estudios } from 'src/app/modelo/estudios';
import { EstudioService } from 'src/app/servicios/sEstudio.service';

@Component({
  selector: 'app-new-estudio',
  templateUrl: './new-estudio.component.html',
  styleUrls: ['./new-estudio.component.css']
})
export class NewEstudioComponent implements OnInit {


  colegio: string;
  titulo_obtenido: string;
  fechainiyfin: string;
  img_instituto: string;

  constructor(private sestudio: EstudioService, private routes: Router) { }

  ngOnInit(): void {
  }
  onCreate(): void {
    const nEstudio = new Estudios(this.colegio, this.titulo_obtenido, this.fechainiyfin, this.img_instituto);
    this.sestudio.save(nEstudio).subscribe(data => {
      alert("estudio añadido");
      this.routes.navigate(['']);
    }, err => {
      alert("falló");
      this.routes.navigate(['']);
    }
    )
  }
}
