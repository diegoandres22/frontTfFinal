import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Diego } from 'src/app/modelo/diego';
import { SDiegoService } from 'src/app/servicios/sDiego.service';

@Component({
  selector: 'app-edit-acerca',
  templateUrl: './edit-acerca.component.html',
  styleUrls: ['./edit-acerca.component.css']
})
export class EditAcercaComponent implements OnInit {

  persona : Diego = null;

  constructor(private diegoS: SDiegoService, private activaterute: ActivatedRoute, private rooute: Router) { }

  ngOnInit(): void {
    const id = this.activaterute.snapshot.params['id'];
    this.diegoS.search(id).subscribe(
      data => {
        this.persona = data;
      }, err => {
        alert("error al modificar acerca de");
        this.rooute.navigate(['']);
      }
    )
  }
  edit(): void {
    const id = this.activaterute.snapshot.params['id'];
    this.diegoS.edit(id, this.persona).subscribe(
      data => {
        this.rooute.navigate(['']);
      }, err => {
        alert("error al modificar acerca de");
        this.rooute.navigate(['']);
      }
    )
  }

}
