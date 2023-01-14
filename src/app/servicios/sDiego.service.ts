import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Diego } from '../modelo/diego';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SDiegoService {


  dieURL = 'https://backtffinal-production.up.railway.app'

  constructor(private HttpClient: HttpClient) { }

  public lista(): Observable<Diego[]> {
    return this.HttpClient.get<Diego[]>(this.dieURL + '/ver/personas');
  }

  public search(id: number): Observable<Diego> {
    return this.HttpClient.get<Diego>(this.dieURL + `/buscar/${id}`);
  }

  public save(dieg: Diego): Observable<any> {
    return this.HttpClient.post<any>(this.dieURL + '/new/persona', dieg);
  }

  public edit(id: number, dieg: Diego): Observable<any> {
    return this.HttpClient.put<any>(this.dieURL + `/editar/${id}`, dieg);
  }
  public delete(id: number): Observable<any> {
    return this.HttpClient.delete<any>(this.dieURL + `/delete/${id}`);
  }




}

