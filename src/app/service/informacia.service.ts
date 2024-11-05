import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InformaciuliModel } from '../models/informaciuli.model';

@Injectable({providedIn: 'root'})
export class InformaciaService {
  constructor(private http: HttpClient) { }

  getInformacia(): Observable<InformaciuliModel[]> {
    let apiUrl = 'https://dumbstockapi.com/stock?exchanges=NYSE';

    return this.http.get<InformaciuliModel[]>(apiUrl);
  }
}
