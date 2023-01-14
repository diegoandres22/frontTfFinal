import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Estudios } from '../modelo/estudios';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EstudioService {

  estudioURL = 'https://backtffinal-production.up.railway.app/estudy'
  constructor(private HttpClient: HttpClient) { }

  public lista(): Observable<Estudios[]> {
    return this.HttpClient.get<Estudios[]>(this.estudioURL + '/ver/estudios');
  }

  public search(id: number): Observable<Estudios> {
    return this.HttpClient.get<Estudios>(this.estudioURL + `/buscarEstudy/${id}`);
  }

  public save(estudio: Estudios): Observable<any> {
    return this.HttpClient.post<any>(this.estudioURL + '/new/estudio', estudio);
  }

  public edit(id: number, estudio: Estudios): Observable<any> {
    return this.HttpClient.put<any>(this.estudioURL + `/editarEstudi/${id}`, estudio);
  }
  public delete(id: number): Observable<any> {
    return this.HttpClient.delete<any>(this.estudioURL + `/delete/${id}`);
  }




}
