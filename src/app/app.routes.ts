import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadComponent: () =>
            import('./components/home/home')
                .then(m => m.Home)
    },
    {
        path: 'about',
        loadComponent: () =>
            import('./components/about/about')
                .then(m => m.About)
    },
    {
        path: 'skills',
        loadComponent: () =>
            import('./components/skills/skills')
                .then(m => m.Skills)
    },
    {
        path: 'projects',
        loadComponent: () =>
            import('./components/projects/projects')
                .then(m => m.Projects)
    },
    {
        path: 'experience',
        loadComponent: () =>
            import('./components/experience/experience')
                .then(m => m.Experience)
    },
    {
        path: 'contact',
        loadComponent: () =>
            import('./components/contact/contact')
                .then(m => m.Contact)
    },
    {
        path: '**',
        redirectTo: 'home'
    }
];
