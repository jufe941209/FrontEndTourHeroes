import { Component } from '@angular/core';
import { HEROES, Heroe } from '../heroe';
@Component({
  selector: 'detalle-heroe',
  templateUrl: './detalle-heroe.html',
  styleUrls: ['./detalle-heroe.css']
})
export class DetalleHeroeComponent {
  mysHeroes:Heroe[] = HEROES

 
}
