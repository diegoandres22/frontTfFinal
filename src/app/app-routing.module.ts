import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditAcercaComponent } from './acerca-de/edit-acerca/edit-acerca.component';
import { ErrorComponent } from './error/error.component';
import { EditEstudioComponent } from './estudios/edit-estudio/edit-estudio.component';
import { NewEstudioComponent } from './estudios/new-estudio/new-estudio.component';
import { EditExperienciaComponent } from './experiencias/edit-experiencia/edit-experiencia.component';
import { NewExperienciaComponent } from './experiencias/new-experiencia/new-experiencia.component';
import { EdithaskillComponent } from './hard-skills/edit-haskill/edit-haskill.component';
import { NewHaskillComponent } from './hard-skills/new-haskill/new-haskill.component';
import { IndexComponent } from './index/index.component';
import { EditProyectoComponent } from './proyectos/edit-proyecto/edit-proyecto.component';
import { NewProyectoComponent } from './proyectos/new-proyecto/new-proyecto.component';


import { EditSoskillComponent } from './soft-skills/edit-soskill/edit-soskill.component';
import { NewSoskillComponent } from './soft-skills/new-soskill/new-soskill.component';

const routes: Routes = [
  { path: 'index', component: IndexComponent },

  { path: 'newExpe', component: NewExperienciaComponent },
  { path: 'editarexperi/:id', component: EditExperienciaComponent },


  { path: 'editarsoskil/:id', component: EditSoskillComponent },
  { path: 'newsoskil', component: NewSoskillComponent },

  { path: 'editarhaskil/:id', component: EdithaskillComponent },
  { path: 'newhaskil', component: NewHaskillComponent },

  { path: 'editarEstudi/:id', component: EditEstudioComponent },
  { path: 'newEstu', component: NewEstudioComponent },

  { path: 'newpro', component: NewProyectoComponent },
  { path: 'editarpro/:id', component: EditProyectoComponent },

  { path: 'editar/:id', component: EditAcercaComponent },


   { path: '', component: IndexComponent, pathMatch: 'full' },
   { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
