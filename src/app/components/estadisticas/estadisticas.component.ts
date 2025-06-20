import { Component, inject, Input, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { EstadisticasEncuestaDTO } from '../../models/models';
import { EstadisticaPreguntaComponent } from '../estadistica-pregunta/estadistica-pregunta.component';

@Component({
  selector: 'app-estadisticas',
  imports: [EstadisticaPreguntaComponent, RouterLink],
  templateUrl: './estadisticas.component.html',
})
export class EstadisticasComponent implements OnInit {
  estadisticas: EstadisticasEncuestaDTO | null = null;

  private apiService = inject(ApiService);
  private route = inject(ActivatedRoute);

  ngOnInit(): void {
    this.cargarEstadisticas();
  }

  cargarEstadisticas() {
    const idEncuesta = Number(this.route.snapshot.paramMap.get('id'));

    if (idEncuesta) {
      this.apiService.getEstadisticasEncuesta(idEncuesta).subscribe({
        next: (estadisticas) => {
          this.estadisticas = estadisticas;
        },
        error: (error) => {
          console.error('Error al cargar las estadísticas:', error);
        }
      });
    } else {
      console.error('ID de encuesta no válido');
    }
  }

}
