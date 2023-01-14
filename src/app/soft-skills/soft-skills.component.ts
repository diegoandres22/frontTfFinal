import { Component, OnInit } from '@angular/core';
import { Soskill } from '../modelo/soskill';
import { SSoskillService } from '../servicios/sSoskill.service';
import { TokenService } from '../servicios/token.service';

@Component({
  selector: 'app-soft-skills',
  templateUrl: './soft-skills.component.html',
  styleUrls: ['./soft-skills.component.css']
})
export class SoftSkillsComponent implements OnInit {

  sos: Soskill[] = [];

  constructor(private sskill: SSoskillService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarskil();
    if (this.tokenService.getToken()) {
      this.isLogged = true;

    } else {
      this.isLogged = false
    }
  }
  cargarskil(): void {
    this.sskill.lista().subscribe(data => { this.sos = data });
  }

  delete(id?: number) {
    
    const idha = localStorage.getItem("id");
    if (idha != undefined) {
      this.sskill.delete(parseInt(idha)).subscribe(
        data => {
          this.cargarskil();
          localStorage.clear();
          window.location.reload();
        }, err => {
          alert("no se pudo borrar la skill");
        }
      )
    }
  }
  tomaId(id?: number): void {
    localStorage.setItem("id", id.toString());
  }
}
