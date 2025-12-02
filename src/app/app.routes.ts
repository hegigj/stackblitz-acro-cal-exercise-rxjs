import { Routes } from '@angular/router';
import {ExerciseDashboard} from './features/exercise-dashboard/exercise-dashboard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: ExerciseDashboard
  },
  {
    path: '**',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  }
];
