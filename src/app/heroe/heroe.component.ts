import { Component } from '@angular/core';
import { Heroe } from '../heroe';

@Component({
  selector: 'heroe',
  templateUrl: './heroe.html',
  styleUrls: ['./heroe.css']
})
export class HeroeComponent {
  myHeroe1:Heroe  ={
    id:1,
    name: "Radamel Falcao",
    posicion: "Delantero",
    equipo:"Rayo Vayecano"
    
  }
  myHeroe2:Heroe ={
    id:2,
    name:'Linda Caicedo',
    posicion: "Extremo",
    equipo:"Real Madrid"
  }
  mysHeroes:Heroe[]=[];
  
    constuctor(){
      this.mysHeroes.push(this.myHeroe1);
      this.mysHeroes.push(this.myHeroe2);
      
    }
}
