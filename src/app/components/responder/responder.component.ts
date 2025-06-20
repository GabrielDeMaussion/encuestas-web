import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { EncuestaDetalleDto, NuevaRespuestaDTO } from '../../models/models';
import { ApiService } from '../../services/api.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-responder',
  imports: [FormsModule, RouterLink],
  templateUrl: './responder.component.html',
})
export class ResponderComponent implements OnInit, OnDestroy {
  encuesta: EncuestaDetalleDto | null = null;
  respuestas: NuevaRespuestaDTO = {
    encuestaId: 0,
    respuestas: []
  };
  subscriptions: Subscription = new Subscription();

  private apiService = inject(ApiService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  ngOnInit(): void {
    this.cargarEncuesta();
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  cargarEncuesta() {
    const idEncuesta = Number(this.route.snapshot.paramMap.get('id'));

    if (idEncuesta) {
      this.subscriptions.add(
        this.apiService.getEncuestaById(idEncuesta).subscribe({
          next: (encuesta) => {
            this.encuesta = encuesta;
            this.respuestas = {
              encuestaId: idEncuesta,
              respuestas: encuesta.preguntas.map(p => ({
                preguntaId: p.id,
                contenido: ''
              }))
            }
          },
          error: (error) => {
            console.error('Error al cargar la encuesta:', error);
          }
        })
      );
    } else {
      console.error('ID de encuesta no válido');
    }
  }

  enviarRespuestas() {
    console.log('Respuestas enviadas:', this.respuestas);
    this.subscriptions.add(
      this.apiService.responderEncuesta(this.respuestas).subscribe({
        next: () => {
          console.log('Respuestas enviadas correctamente');
          this.router.navigate(['/encuestas']);
        },
        error: (error) => {
          console.error('Error al enviar las respuestas:', error);
        }
      })
    );
  }

}
