import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EncuestaService {
  apiURL = 'localhost:8080/api/encuestas';

  constructor(private http: HttpClient) { }
  
  getEncuesta() {
    return this.http.get<any>(`${this.apiURL}`);
  }
  
  getEncuestaById(id: number) {
    return this.http.get<any>(`${this.apiURL}/${id}`);
  }
  
  createEncuesta(encuesta: any) {
    return this.http.post<any>(`${this.apiURL}`, encuesta);
  }
  
}
