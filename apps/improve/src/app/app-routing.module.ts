import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'classes',
    loadChildren: () =>
      import('./modules/classes/classes.module').then((m) => m.ClassesModule),
  },
  {
    path: 'themes',
    loadChildren: () =>
      import('./modules/themes/themes.module').then((m) => m.ThemesModule),
  },
  {
    path: '**',
    redirectTo: '/themes',
  },
];

export const AppRoutingModule = RouterModule.forRoot(routes, { useHash: true });
