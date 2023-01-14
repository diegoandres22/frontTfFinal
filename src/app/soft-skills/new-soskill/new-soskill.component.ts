import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Soskill } from 'src/app/modelo/soskill';
import { SSoskillService } from 'src/app/servicios/sSoskill.service';

@Component({
  selector: 'app-new-soskill',
  templateUrl: './new-soskill.component.html',
  styleUrls: ['./new-soskill.component.css']
})
export class NewSoskillComponent implements OnInit {

  nombre_soft_skill: String;
  img_soft_skill: String;
 
  constructor(private sSos: SSoskillService, private routes: Router) { }

  ngOnInit(): void {
  }
  onCreate(): void {
    const nsoskil = new Soskill(this.nombre_soft_skill, this.img_soft_skill);
    this.sSos.save(nsoskil).subscribe(data => {
      alert("skill añadido");
      this.routes.navigate(['']);
    }, err => {
      alert("falló");
      this.routes.navigate(['']);
    }
    )
  }
}
