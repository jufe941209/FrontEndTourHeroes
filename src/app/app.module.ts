import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetalleHeroeComponent } from './detalle-heroe/detalle-heroe.component';
import { BusquedaHeroeComponent } from './busqueda-heroe/busqueda-heroe.component';
import { HeroeComponent } from './heroe/heroe.component';

import {FormsModule} from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DetalleHeroeComponent,
    BusquedaHeroeComponent,
    HeroeComponent,
  
    NavbarComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
