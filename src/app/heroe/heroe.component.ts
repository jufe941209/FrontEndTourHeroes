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
    equipo:"Rayo Vayecano",
    numeroCamiseta: 9
    
  }
  myHeroe2:Heroe ={
    id:2,
    name:'Linda Caicedo',
    posicion: "Extremo",
    equipo:"Real Madrid",
    numeroCamiseta: 7
  }
  myHeroe3:Heroe ={
    id:3,
    name:'James Rodriguez',
    posicion: "Volante",
    equipo:"Sao Paulo",
    numeroCamiseta: 10
  }
  myHeroe4:Heroe  ={
    id:4,
    name:'Luis Diaz',
    posicion: 'Extremo',
    equipo: 'Liverpool',
    numeroCamiseta: 11
    
  }
  myHeroe5:Heroe ={
    id:5,
    name:'Yoreli Rincon',
    posicion: 'Centrocampista',
    equipo: 'Atletico Nacional',
    numeroCamiseta: 7
  }
  myHeroe6:Heroe ={
    id:6,
    name:'Mario Yepez',
    posicion: 'Defensa central',
    equipo: 'Retirado',
    numeroCamiseta: 3
  }
  myHeroe7:Heroe  ={
    id:7,
    name:'Santos Borre',
    posicion: 'Delantero',
    equipo: 'Eintracht Frankfurt',
    numeroCamiseta: 9
    
  }
  myHeroe8:Heroe ={
    id:8,
    name:'Duvan Zapata',
    posicion: "Delantero",
    equipo: 'Atalanta',
    numeroCamiseta: 21
  }
  myHeroe9:Heroe ={
    id:9,
    name:'Pibe Valderrama',
    posicion: "Medio campista",
    equipo: 'Retirado',
    numeroCamiseta: 10
  }
  myHeroe10:Heroe  ={
    id:10,
    name:'David Ospina',
    posicion: "Portero",
    equipo: 'AL-Nassr',
    numeroCamiseta: 1
    
  }
  
  mysHeroes:Heroe[]=[];
  
  constuctor(){
    this.mysHeroes.push(this.myHeroe1);
    this.mysHeroes.push(this.myHeroe2);
    this.mysHeroes.push(this.myHeroe3);
  }
}
