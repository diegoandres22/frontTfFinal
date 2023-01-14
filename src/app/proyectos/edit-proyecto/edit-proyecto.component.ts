import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/modelo/proyecto';
import { sProyectoService } from 'src/app/servicios/s-proyecto.service';

@Component({
  selector: 'app-edit-proyecto',
  templateUrl: './edit-proyecto.component.html',
  styleUrls: ['./edit-proyecto.component.css']
})
export class EditProyectoComponent implements OnInit {

    prooy: Proyecto = null;
  
    constructor(private sproy: sProyectoService, private activeRouter: ActivatedRoute,
      private route: Router) { }
  
    ngOnInit(): void {
      const id = this.activeRouter.snapshot.params['id'];
      this.sproy.search(id).subscribe(
        data => {
          this.prooy = data;
        }, err => {
          alert("error al modificar el proyecto");
          this.route.navigate(['']);
        }
      )
    }
    edit(): void {
      const id = this.activeRouter.snapshot.params['id'];
      this.sproy.edit(id, this.prooy).subscribe(
        data => {
          this.route.navigate(['']);
        }, err => {
          alert("error al modificar el proyecto");
          this.route.navigate(['']);
        }
      )
    }
  }
  