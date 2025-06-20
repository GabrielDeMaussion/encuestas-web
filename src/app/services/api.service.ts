import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EncuestaDetalleDto, EncuestaDto, EstadisticasEncuestaDTO, NuevaRespuestaDTO } from '../models/models';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiURL = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  //Listado
  getEncuestas(): Observable<EncuestaDto[]> {
    return this.http.get<EncuestaDto[]>(`${this.apiURL}/encuestas`);
  }

  //Encuesta con preguntas
  getEncuestaById(id: number): Observable<EncuestaDetalleDto> {
    return this.http.get<EncuestaDetalleDto>(`${this.apiURL}/encuestas/${id}`);
  }

  //Opcional
  crearEncuesta(encuesta: any): Observable<EncuestaDetalleDto> {
    return this.http.post<EncuestaDetalleDto>(`${this.apiURL}/encuestas`, encuesta);
  }

  //
  responderEncuesta(respuesta: NuevaRespuestaDTO) {
    return this.http.post<void>(`${this.apiURL}/respuestas`, respuesta);
  }

  getEstadisticasEncuesta(encuestaId: number) {
    return this.http.get<EstadisticasEncuestaDTO>(`${this.apiURL}/encuestas/${encuestaId}/estadisticas`);
  }

}
