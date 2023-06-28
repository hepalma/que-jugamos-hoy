import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListadoDisponiblePage } from './listado-disponible.page';

const routes: Routes = [
  {
    path: '',
    component: ListadoDisponiblePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListadoDisponiblePageRoutingModule {}
