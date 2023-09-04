import { Component } from '@angular/core';
import { HEROES, Heroe } from '../heroe';
@Component({
  selector: 'detalle-heroe',
  templateUrl: './detalle-heroe.html',
  styleUrls: ['./detalle-heroe.css']
})
export class DetalleHeroeComponent {
  mysHeroes:Heroe[] = HEROES

  deleteHeroe(hero: Heroe): void {
    const index = this.mysHeroes.indexOf(hero);
    if (index !== -1) {
      this.mysHeroes.splice(index, 1);
    }
  }

  mouseDownHandler(event: MouseEvent): void {
    // Cambia el color de fondo del botón cuando se presiona el botón del mouse.
    const button = event.target as HTMLButtonElement;
    button.style.backgroundColor = 'red';
  }

  
}
