import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registration',
    loadChildren: () => import('./registration/registration.module').then( m => m.RegistrationPageModule)
  },
  {
    path: 'aventura',
    loadChildren: () => import('./aventura/aventura.module').then( m => m.AventuraPageModule)
  },
  {
    path: 'tloz',
    loadChildren: () => import('./tloz/tloz.module').then( m => m.TlozPageModule)
  },

  {
    path: 'categorias',
    loadChildren: () => import('./categorias/categorias.module').then( m => m.CategoriasPageModule)
  },
  {
    path: 'rpg',
    loadChildren: () => import('./rpg/rpg.module').then( m => m.RPGPageModule)
  },
  {
    path: 'pokemon',
    loadChildren: () => import('./pokemon/pokemon.module').then( m => m.PokemonPageModule)
  },
  {
    path: 'listado-disponible',
    loadChildren: () => import('./listado-disponible/listado-disponible.module').then( m => m.ListadoDisponiblePageModule)
  },
  {
    path: '**',
    loadChildren: () => import('./terror/terror.module').then( m => m.TerrorPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
