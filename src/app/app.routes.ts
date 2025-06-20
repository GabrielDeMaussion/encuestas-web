import { Routes } from '@angular/router';
import { EncuestasComponent } from './components/encuestas/encuestas.component';
import { EstadisticasComponent } from './components/estadisticas/estadisticas.component';
import { ResponderComponent } from './components/responder/responder.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'encuestas',
        pathMatch: 'full'
    },
    {
        path: 'encuestas',
        component: EncuestasComponent
    },
    {
        path: 'responder/:id',
        component: ResponderComponent
    },
    {
        path: 'estadisticas/:id',
        component: EstadisticasComponent
    }

];
