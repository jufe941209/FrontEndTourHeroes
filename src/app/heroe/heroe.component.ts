import { Component } from '@angular/core';
import { HEROES, Heroe } from '../heroe';

@Component({
  selector: 'heroe',
  templateUrl: './heroe.html',
  styleUrls: ['./heroe.css'],
})
export class HeroeComponent {
  mysHeroes: Heroe[] = HEROES;

  newHeroe(nameHeroe: string) {
    let newid: number = this.mysHeroes.length + 1;
    console.log('entro al metodo desde el click');
    this.mysHeroes.push({
      id: newid,
      name: nameHeroe,
      numeroCamiseta: 1 + newid,
      posicion: 'posicion',
      equipo: 'Su equipo',
    });
  }

  mouseMoveHandler(event: MouseEvent): void {
    // Esta función se ejecutará cuando el mouse se mueva sobre el botón.
    // Puedes realizar acciones adicionales aquí.
  
    // Por ejemplo, puedes cambiar el estilo del botón al mover el mouse sobre él.
    const button = event.target as HTMLButtonElement;
    button.style.backgroundColor = 'yellow';
  }
}
