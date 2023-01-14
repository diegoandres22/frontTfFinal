import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Estudios } from 'src/app/modelo/estudios';
import { EstudioService } from 'src/app/servicios/sEstudio.service';

@Component({
  selector: 'app-edit-estudio',
  templateUrl: './edit-estudio.component.html',
  styleUrls: ['./edit-estudio.component.css']
})
export class EditEstudioComponent implements OnInit {
  estulab: Estudios = null;

  constructor(private sEstudio: EstudioService, private activeRouter: ActivatedRoute,
    private route: Router) { }

  ngOnInit(): void {
    const id = this.activeRouter.snapshot.params['id'];
    this.sEstudio.search(id).subscribe(
      data => {
        this.estulab = data;
      }, err => {
        alert("error al modificar la experiencia");
        this.route.navigate(['']);
      }
    )
  }
  edit(): void {
    const id = this.activeRouter.snapshot.params['id'];
    this.sEstudio.edit(id, this.estulab).subscribe(
      data => {
        this.route.navigate(['']);
      }, err => {
        alert("error al modificar el estudio");
        this.route.navigate(['']);
      }
    )
  }
}
