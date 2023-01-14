import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { haskill } from 'src/app/modelo/haskill';
import { ShaskillService } from 'src/app/servicios/shaskill.service';

@Component({
  selector: 'app-new-haskill',
  templateUrl: './new-haskill.component.html',
  styleUrls: ['./new-haskill.component.css']
})
export class NewHaskillComponent implements OnInit {
  nombre_hard_skill: String;
  img_hard_skill: String;
  liquido: String;

  constructor(private shas: ShaskillService, private routes: Router) { }

  ngOnInit(): void {
  }
  onCreate(): void {
    const nhaskil = new haskill(this.nombre_hard_skill, this.img_hard_skill, this.liquido);
    this.shas.save(nhaskil).subscribe(data => {
      alert("skill añadido");
      this.routes.navigate(['']);
    }, err => {
      alert("falló");
      this.routes.navigate(['']);
    }
    )
  }
}
