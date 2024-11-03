import { Routes } from '@angular/router';
import { MenuPrincipalComponent } from "./components/menu-principal/menu-principal.component";



export const routes: Routes = [
  // Rutas fuera del menú (login y registro)
  {
    path: 'login',
    loadComponent: () => import('./page/login/login.page').then(m => m.LoginPage)
  },
  {
    path: 'register',
    loadComponent: () => import('./page/register/register.page').then(m => m.RegisterPage)
  },
  {
    path: 'detalle-dragonball',
    loadComponent: () => import('./page/detalle-dragonball/detalle-dragonball.page').then( m => m.DetalleDragonballPage)
    
  },
  {
    path: 'personajes',
    loadComponent: () => import('./page/personajes/personajes.page').then( m => m.PersonajesPage)
  },

  // Rutas que usan el menú principal
  {
    path: '',
    component: MenuPrincipalComponent,
    children: [
      {
        path: '', loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
      },

      {
        path: 'series',
        loadComponent: () => import('./page/series/series.page').then(m => m.SeriesPage)
      },
      {
        path: 'peliculas',
        loadComponent: () => import('./page/peliculas/peliculas.page').then(m => m.PeliculasPage)
      },
      {
        path: 'categorias',
        loadComponent: () => import('./page/categorias/categorias.page').then(m => m.CategoriasPage)
      },
      {
        path: 'continuar-viendo/:id',
        loadComponent: () => import('./page/continuar-viendo/continuar-viendo.page').then(m => m.ContinuarViendoPage)
      }, {
        path: 'previsualizar-pelicula/:id',
        loadComponent: () => import('./page/previsualizar-pelicula/previsualizar-pelicula.page').then(m => m.PrevisualizarPeliculaPage)
      },
    ]

  },
];
