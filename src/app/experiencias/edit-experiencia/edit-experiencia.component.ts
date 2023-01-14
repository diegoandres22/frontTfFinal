import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Experiencias } from 'src/app/modelo/experiencias';
import { ExperienciasService } from 'src/app/servicios/sExperiencias.service';

@Component({
  selector: 'app-edit-experiencia',
  templateUrl: './edit-experiencia.component.html',
  styleUrls: ['./edit-experiencia.component.css']
})
export class EditExperienciaComponent implements OnInit {
  explab: Experiencias = null;

  constructor(private sExperiencias: ExperienciasService, private activeRouter: ActivatedRoute,
    private route: Router) { }

  ngOnInit(): void {
    const id = this.activeRouter.snapshot.params['id'];
    this.sExperiencias.search(id).subscribe(
      data => {
        this.explab = data;
      }, err => {
        alert("error al modificar la experiencia");
        this.route.navigate(['']);
      }
    )
  }
  edit(): void {
    const id = this.activeRouter.snapshot.params['id'];
    this.sExperiencias.edit(id, this.explab).subscribe(
      data => {
        this.route.navigate(['']);
      }, err => {
        alert("error al modificar la experiencia");
        this.route.navigate(['']);
      }
    )
  }
}
