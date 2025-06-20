import { Component, Input } from '@angular/core';
import { EstadisticaPreguntaDTO } from '../../models/models';

@Component({
  selector: 'app-estadistica-pregunta',
  imports: [],
  templateUrl: './estadistica-pregunta.component.html',
})
export class EstadisticaPreguntaComponent {
  @Input() pregunta: EstadisticaPreguntaDTO | null = null;

}
