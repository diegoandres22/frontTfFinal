import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/modelo/proyecto';
import { sProyectoService } from 'src/app/servicios/s-proyecto.service';

@Component({
  selector: 'app-new-proyecto',
  templateUrl: './new-proyecto.component.html',
  styleUrls: ['./new-proyecto.component.css']
})
export class NewProyectoComponent implements OnInit {

  img1: String;
  img2: String;
  img3: String;
  url: String;
 
  
    constructor(private pro : sProyectoService, private routes: Router) { }
  
    ngOnInit(): void {
    }
    onCreate(): void {
      const npro = new Proyecto(this.img1, this.img2, this.img3, this.url);
      this.pro.save(npro).subscribe(data => {
        alert("proyecto añadido");
        this.routes.navigate(['']);
      }, err => {
        alert("falló");
        this.routes.navigate(['']);
      }
      )
    }
  }
  