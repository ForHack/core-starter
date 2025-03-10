import { Routes } from '@angular/router';
import { ToolkitLayoutComponent } from '@layouts/toolkit-layout/toolkit-layout.component';
import { ToolkitPageComponent } from '@features/toolkit-page/toolkit-page.component';

export const routes: Routes = [
  {
    path: '',
    component: ToolkitLayoutComponent,
    children: [
      {
        path: '',
        component: ToolkitPageComponent,
      },
    ],
  },
];
