import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'articulations',
    loadChildren: () =>
      import('./modules/articulations/articulations.module').then(
        (m) => m.ArticulationsModule
      ),
  },
  {
    path: 'categories',
    loadChildren: () =>
      import('./modules/categories/categories.module').then(
        (m) => m.CategoriesModule
      ),
  },
  {
    path: 'classes',
    loadChildren: () =>
      import('./modules/classes/classes.module').then((m) => m.ClassesModule),
  },
  {
    path: 'sounds',
    loadChildren: () =>
      import('./modules/sounds/sounds.module').then((m) => m.SoundsModule),
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
