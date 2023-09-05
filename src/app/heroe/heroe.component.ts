import { Component } from '@angular/core';
import { HEROES, Heroe } from '../heroe';

@Component({
  selector: 'heroe',
  templateUrl: './heroe.html',
  styleUrls: ['./heroe.css'],
})
export class HeroeComponent {
  mysHeroes: Heroe[] = HEROES;
  myNewHeroe:Heroe={id:-1,name:"Nombre Jugador",posicion:"Posicion Jugador",equipo:"Nombre de su equipo",numeroCamiseta:0}

  
newHeroe2(){
  this.myNewHeroe.id = this.mysHeroes.length + 1;
  this.mysHeroes.push(this.myNewHeroe);
  this.myNewHeroe={id:-1,name:"Nombre Jugador",posicion:"Posicion Jugador",equipo:"Nombre de su equipo",numeroCamiseta:-1}

}

  mouseMoveHandler(event: MouseEvent): void {
    // Esta función se ejecutará cuando el mouse se mueva sobre el botón.
    // Puedes realizar acciones adicionales aquí.
  
    // Por ejemplo, puedes cambiar el estilo del botón al mover el mouse sobre él.
    const button = event.target as HTMLButtonElement;
    button.style.backgroundColor = 'yellow';
  }
}
