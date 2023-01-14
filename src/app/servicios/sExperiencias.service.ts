import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencias } from '../modelo/experiencias';

@Injectable({
  providedIn: 'root'
})
export class ExperienciasService {
experienciaURL = 'https://backtffinal-production.up.railway.app/exlab' 

  constructor(private HttpClient: HttpClient ) { }

  public lista() :Observable<Experiencias[]>{
    return this.HttpClient.get<Experiencias[]>(this.experienciaURL + '/ver/texperiencias');
  }

  public search(id : number): Observable<Experiencias>{
    return this.HttpClient.get<Experiencias>(this.experienciaURL + `/buscarexperi/${id}`);
  }

  public save (experiencias : Experiencias): Observable<any>{
    return this.HttpClient.post<any>(this.experienciaURL + '/new/experiencia' , experiencias);
  }

public edit (id:number, experiencias: Experiencias):Observable<any>{
  return this.HttpClient.put<any>(this.experienciaURL + `/editarexperi/${id}`, experiencias);
}
public delete (id:number): Observable<any>{
  return this.HttpClient.delete<any>(this.experienciaURL + `/delete/${id}`);
}

}
