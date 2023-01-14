import { Component, DoCheck, OnInit } from '@angular/core';
import { haskill } from '../modelo/haskill';
import { ShaskillService } from '../servicios/shaskill.service';
import { TokenService } from '../servicios/token.service';
@Component({
  selector: 'app-hard-skills',
  templateUrl: './hard-skills.component.html',
  styleUrls: ['./hard-skills.component.css']
})
export class HardSkillsComponent implements OnInit, DoCheck {


  has: haskill[] = [];

  constructor(private hskill: ShaskillService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {

    this.cargarskil();
    if (this.tokenService.getToken()) {
      this.isLogged = true;


    } else {
      this.isLogged = false
    }

  }



  ngDoCheck(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
      this.margenClas();
    } else {
      this.isLogged = false;
      this.margenNoClas();
    }


  }




  cargarskil(): void {
    this.hskill.lista().subscribe(data => { this.has = data });
  }

  delete(id?: number) {

    const idso = localStorage.getItem("id");
    if (idso != undefined) {
      this.hskill.delete(parseInt(idso)).subscribe(
        data => {
          localStorage.clear();
          this.cargarskil();
          window.location.reload();
        }, err => {
          alert("no se pudo borrar la skill");
        }
      )
    }
  }
  margenClas(): void {
    const pecera = document.querySelectorAll('.conteneHtml');
    pecera.forEach(element => {
      element.classList.add('crecer');
    });
  }
  margenNoClas(): void {
    const pecera = document.querySelectorAll('.conteneHtml');
    pecera.forEach(element => {
      element.classList.remove('crecer');
    });
  }
  tomaId(id?: number): void {
    localStorage.setItem("id", id.toString());
  }
}
