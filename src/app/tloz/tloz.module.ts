import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TlozPageRoutingModule } from './tloz-routing.module';

import { TlozPage } from './tloz.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TlozPageRoutingModule
  ],
  declarations: [TlozPage]
})
export class TlozPageModule {}
