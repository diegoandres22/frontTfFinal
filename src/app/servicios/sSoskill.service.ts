import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Soskill } from '../modelo/soskill';

@Injectable({
  providedIn: 'root'
})
export class SSoskillService {


  sosURL = 'https://backtffinal-production.up.railway.app/soft'
  constructor(private HttpClient : HttpClient) { }

  public lista(): Observable<Soskill[]> {
    return this.HttpClient.get<Soskill[]>(this.sosURL + '/ver/soft');
  }

  public search(id: number): Observable<Soskill> {
    return this.HttpClient.get<Soskill>(this.sosURL + `/buscarsoft/${id}`);
  }

  public save(soSkill: Soskill): Observable<any> {
    return this.HttpClient.post<any>(this.sosURL + '/new/soft', soSkill);
  }

  public edit(id: number, soSkill: Soskill): Observable<any> {
    return this.HttpClient.put<any>(this.sosURL + `/editarsoft/${id}`, soSkill);
  }
  public delete(id: number): Observable<any> {
    return this.HttpClient.delete<any>(this.sosURL + `/deletesoft/${id}`);
  }




}
