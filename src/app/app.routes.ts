import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.page').then(m => m.HomePage)
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about.page').then(m => m.AboutPage)
  },
  {
    path: 'services',
    loadComponent: () => import('./pages/services/services.page').then(m => m.ServicesPage)
  },
  {
    path: 'projects',
    loadComponent: () => import('./pages/projects/projects.page').then(m => m.ProjectsPage)
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact.page').then(m => m.ContactPage)
  },
  { path: '**', redirectTo: '' }
];
