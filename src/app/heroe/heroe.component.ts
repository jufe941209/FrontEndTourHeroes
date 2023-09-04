import { Component } from '@angular/core';
import { HEROES, Heroe } from '../heroe';

@Component({
  selector: 'heroe',
  templateUrl: './heroe.html',
  styleUrls: ['./heroe.css']
})
export class HeroeComponent {

  mysHeroes:Heroe[] = HEROES
  
  nuevoHeroe(){
    let newID: number = this.mysHeroes.length+1
    console.log("entro al metodo desde el click")
    this.mysHeroes.push({id:newID, name:'namenuevoheroe' + newID ,numeroCamiseta: 1 + newID, posicion:'posicion',equipo:"Su equipo"})
  }
  
}
