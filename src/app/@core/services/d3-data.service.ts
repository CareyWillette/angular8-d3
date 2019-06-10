import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class D3DataService {

  BASE_URL = 'assets/data';

  constructor(private http: HttpClient) { }

  getD3Data(chart_type): Observable<any> {
    return this.http.get<any>(`${this.BASE_URL}/${chart_type}.data.json`);
  }

}