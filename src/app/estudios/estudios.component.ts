import { Component, OnInit } from '@angular/core';
import { Estudios } from '../modelo/estudios';
import { EstudioService } from '../servicios/sEstudio.service';
import { TokenService } from '../servicios/token.service';

@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css']
})
export class EstudiosComponent implements OnInit {

  estu: Estudios[] = [];

  constructor(private sEstudio: EstudioService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarEstudio();
    if (this.tokenService.getToken()) {
      this.isLogged = true;

    } else {
      this.isLogged = false
    }
  }

  cargarEstudio(): void {
    this.sEstudio.lista().subscribe(data => { this.estu = data });
  }

  delete() {
    
    const ide = localStorage.getItem("id");
    if (ide != undefined) {
      this.sEstudio.delete(parseInt(ide)).subscribe(
        data => {
          console.log(ide);
          localStorage.clear();
          this.cargarEstudio();
          window.location.reload();
        }, err => {
          alert("no se pudo borrar el estudio");
        }
      )
    }
  }
  tomaId(id?: number): void{
    localStorage.setItem("id", id.toString());
  }
}
