import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetalleHeroeComponent } from './detalle-heroe/detalle-heroe.component';
import { BusquedaHeroeComponent } from './busqueda-heroe/busqueda-heroe.component';
import { HeroeComponent } from './heroe/heroe.component';
import { MensajesComponent } from './mensajes/mensajes.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DetalleHeroeComponent,
    BusquedaHeroeComponent,
    HeroeComponent,
    MensajesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
