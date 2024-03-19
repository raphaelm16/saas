import { Routes } from '@angular/router';
import { AfsprakenComponent } from './afspraken/afspraken.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AfspraakcreatieComponent } from './afspraken/afspraakcreatie/afspraakcreatie.component';

export const routes: Routes = [
    {
        path: '', 
        component: DashboardComponent,
        },
    {
        path: 'afspraken', 
        component: AfsprakenComponent,
    },
    {
        path: 'afspraakcreatie',
        component: AfspraakcreatieComponent
    }
];
