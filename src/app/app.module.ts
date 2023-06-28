import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DbService } from './services/db.service';
import { DatabaseService } from './services/database.service';
import { AuthGuard } from './guards/auth.guard';


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,FormsModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, SQLite, DbService, DatabaseService, AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
