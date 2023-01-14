import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BannerComponent } from './banner/banner.component';
import { NavLateralComponent } from './nav-lateral/nav-lateral.component';
import { ExperienciasComponent } from './experiencias/experiencias.component';
import { EstudiosComponent } from './estudios/estudios.component';
import { SoftSkillsComponent } from './soft-skills/soft-skills.component';
import { HardSkillsComponent } from './hard-skills/hard-skills.component';
import { AcercaDEComponent } from './acerca-de/acerca-de.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { ModulsComponent } from './navbar/moduls/moduls.component';
import { BotonLoginComponent } from './navbar/moduls/boton-login/boton-login.component';
import { ErrorComponent } from './error/error.component';
import { IndexComponent } from './index/index.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule} from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { NewExperienciaComponent } from './experiencias/new-experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './experiencias/edit-experiencia/edit-experiencia.component';
import { NewEstudioComponent } from './estudios/new-estudio/new-estudio.component';
import { EditEstudioComponent } from './estudios/edit-estudio/edit-estudio.component';
import { NewSoskillComponent } from './soft-skills/new-soskill/new-soskill.component';
import { EditSoskillComponent } from './soft-skills/edit-soskill/edit-soskill.component';
import { NewHaskillComponent } from './hard-skills/new-haskill/new-haskill.component';
import { EdithaskillComponent } from './hard-skills/edit-haskill/edit-haskill.component';
import { EditAcercaComponent } from './acerca-de/edit-acerca/edit-acerca.component';
import { NewProyectoComponent } from './proyectos/new-proyecto/new-proyecto.component';
import { EditProyectoComponent } from './proyectos/edit-proyecto/edit-proyecto.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BannerComponent,
    NavLateralComponent,
    ExperienciasComponent,
    EstudiosComponent,
    SoftSkillsComponent,
    HardSkillsComponent,
    AcercaDEComponent,
    ProyectosComponent,
    ModulsComponent,
    BotonLoginComponent,
    ErrorComponent,
    IndexComponent,
    NewExperienciaComponent,
    EditExperienciaComponent,
    NewEstudioComponent,
    EditEstudioComponent,
    NewSoskillComponent,
    EditSoskillComponent,
    NewHaskillComponent,
    EditAcercaComponent,
    EdithaskillComponent,
    NewProyectoComponent,
    EditProyectoComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
