import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { EncuestaDto } from '../../models/models';
import { ApiService } from '../../services/api.service';
import { TablaEncuestasComponent } from '../tabla-encuestas/tabla-encuestas.component';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-encuestas',
  imports: [TablaEncuestasComponent],
  templateUrl: './encuestas.component.html',
})
export class EncuestasComponent implements OnInit, OnDestroy {
  subscriptions: Subscription = new Subscription();
  encuestas: EncuestaDto[] = [];
  
  private apiService = inject(ApiService);
  private router = inject(Router);

  ngOnInit() {
    this.obtenerEncuestas();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  obtenerEncuestas() {
    this.subscriptions.add(
      this.apiService.getEncuestas().subscribe({
        next: (encuestas) => {
          this.encuestas = encuestas;
        },
        error: (error) => {
          console.error('Error al obtener las encuestas:', error);
        }
      })
    );
  }

  responderEncuesta(id: number) {
    this.router.navigate(['/responder', id]);
  }

  estadisticasEncuesta(id: number) {
    this.router.navigate(['/estadisticas', id]);
  }

}
