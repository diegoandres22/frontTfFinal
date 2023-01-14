import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Soskill } from 'src/app/modelo/soskill';
import { SSoskillService } from 'src/app/servicios/sSoskill.service';

@Component({
  selector: 'app-edit-soskill',
  templateUrl: './edit-soskill.component.html',
  styleUrls: ['./edit-soskill.component.css']
})
export class EditSoskillComponent implements OnInit {
  soskill: Soskill = null;

  constructor(private sosk: SSoskillService, private activeRouter: ActivatedRoute,
    private route: Router) { }

  ngOnInit(): void {
    const id = this.activeRouter.snapshot.params['id'];
    this.sosk.search(id).subscribe(
      data => {
        this.soskill = data;
      }, err => {
        alert("error al modificar la skill");
        this.route.navigate(['']);
      }
    )
  }
  edit(): void {
    const id = this.activeRouter.snapshot.params['id'];
    this.sosk.edit(id, this.soskill).subscribe(
      data => {
        this.route.navigate(['']);
      }, err => {
        alert("error al modificar la skill");
        this.route.navigate(['']);
      }
    )
  }
}
