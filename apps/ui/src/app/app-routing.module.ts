import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/home/home.module').then((m) => m.HomeModule),
  },
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
    path: 'emotions',
    loadChildren: () =>
      import('./modules/emotions/emotions.module').then(
        (m) => m.EmotionsModule
      ),
  },
  {
    path: 'jobs',
    loadChildren: () =>
      import('./modules/jobs/jobs.module').then((m) => m.JobsModule),
  },
  {
    path: 'roles',
    loadChildren: () =>
      import('./modules/roles/roles.module').then((m) => m.RolesModule),
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
