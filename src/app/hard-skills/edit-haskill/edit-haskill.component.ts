import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { haskill } from 'src/app/modelo/haskill';
import { ShaskillService } from 'src/app/servicios/shaskill.service';

@Component({
  selector: 'app-edit-haskill',
  templateUrl: './edit-haskill.component.html',
  styleUrls: ['./edit-haskill.component.css']
})
export class EdithaskillComponent implements OnInit {
  haskill: haskill = null;

  constructor(private hask: ShaskillService, private activeRouter: ActivatedRoute,
    private route: Router) { }

  ngOnInit(): void {
    const id = this.activeRouter.snapshot.params['id'];
    this.hask.search(id).subscribe(
      data => {
        this.haskill = data;
      }, err => {
        alert("error al modificar la skill");
        this.route.navigate(['']);
      }
    )
  }
  editar(): void {
    const id = this.activeRouter.snapshot.params['id'];
    this.hask.edit(id, this.haskill).subscribe(
      data => {
        this.route.navigate(['']);
      }, err => {
        alert("error al modificar la skill");
        this.route.navigate(['']);
      }
    )
  }
}
