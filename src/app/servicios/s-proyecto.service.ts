import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from '../modelo/proyecto';

@Injectable({
  providedIn: 'root'
})
export class sProyectoService {


  proURL = 'https://backtffinal-production.up.railway.app/pro'
  constructor(private HttpClient : HttpClient) { }

  public lista(): Observable<Proyecto[]> {
    return this.HttpClient.get<Proyecto[]>(this.proURL + '/ver/proyectos');
  }

  public search(id: number): Observable<Proyecto> {
    return this.HttpClient.get<Proyecto>(this.proURL + `/buscarpro/${id}`);
  }

  public save(pro: Proyecto): Observable<any> {
    return this.HttpClient.post<any>(this.proURL + '/new/proyecto', pro);
  }

  public edit(id: number, pro: Proyecto): Observable<any> {
    return this.HttpClient.put<any>(this.proURL + `/editarpro/${id}`, pro);
  }
  public delete(id: number): Observable<any> {
    return this.HttpClient.delete<any>(this.proURL + `/deletepro/${id}`);
  }




}