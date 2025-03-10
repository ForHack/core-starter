import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'toolkit',
    loadChildren: () => import('./toolkit-page/toolkit-page.routes').then((c) => c.routes),
  },
];
