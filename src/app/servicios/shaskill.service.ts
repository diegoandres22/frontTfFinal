import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { haskill } from '../modelo/haskill';

@Injectable({
  providedIn: 'root'
})
export class ShaskillService {


  hasURL = 'https://backtffinal-production.up.railway.app/hard'
  constructor(private HttpClient : HttpClient) { }

  public lista(): Observable<haskill[]> {
    return this.HttpClient.get<haskill[]>(this.hasURL + '/ver/hard');
  }

  public search(id: number): Observable<haskill> {
    return this.HttpClient.get<haskill>(this.hasURL + `/buscarhard/${id}`);
  }

  public save(haSkill: haskill): Observable<any> {
    return this.HttpClient.post<any>(this.hasURL + '/new/hard', haSkill);
  }

  public edit(id: number, haSkill: haskill): Observable<any> {
    return this.HttpClient.put<any>(this.hasURL + `/editarhard/${id}`, haSkill);
  }
  public delete(id: number): Observable<any> {
    return this.HttpClient.delete<any>(this.hasURL + `/deletehard/${id}`);
  }




}