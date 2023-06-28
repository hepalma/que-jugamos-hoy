import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListadoDisponiblePageRoutingModule } from './listado-disponible-routing.module';

import { ListadoDisponiblePage } from './listado-disponible.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListadoDisponiblePageRoutingModule
  ],
  declarations: [ListadoDisponiblePage]
})
export class ListadoDisponiblePageModule {}
