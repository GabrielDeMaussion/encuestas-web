import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EncuestaDto } from '../../models/models';

@Component({
  selector: 'app-tabla-encuestas',
  imports: [],
  templateUrl: './tabla-encuestas.component.html',
})
export class TablaEncuestasComponent {
  @Input() encuestas: EncuestaDto[] = [];
  @Output() estadisticas: EventEmitter<number> = new EventEmitter<number>();
  @Output() responder: EventEmitter<number> = new EventEmitter<number>();

}
