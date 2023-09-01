import { Component } from '@angular/core';
import { Heroe } from '../heroe';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css']
})
export class DashboardComponent {

  topHeroe1:Heroe  ={
    id:1,
    name: "Radamel Falcao",
    posicion: "Delantero",
    equipo:"Rayo Vayecano",
    numeroCamiseta: 9
    
  }
  topHeroe2:Heroe ={
    id:2,
    name:'Linda Caicedo',
    posicion: "Extremo",
    equipo:"Real Madrid",
    numeroCamiseta: 7
  }
  topHeroe3:Heroe ={
    id:3,
    name:'James Rodriguez',
    posicion: "Volante",
    equipo:"Sao Paulo",
    numeroCamiseta: 10
  }
  topHeroe4:Heroe  ={
    id:4,
    name:'Luis Diaz',
    posicion: 'Extremo',
    equipo: 'Liverpool',
    numeroCamiseta: 11
    
  }
  topHeroe5:Heroe ={
    id:5,
    name:'Yoreli Rincon',
    posicion: 'Centrocampista',
    equipo: 'Atletico Nacional',
    numeroCamiseta: 7
  }
  topHeroe6:Heroe ={
    id:6,
    name:'Mario Yepez',
    posicion: 'Defensa central',
    equipo: 'Retirado',
    numeroCamiseta: 3
  }
  topHeroe7:Heroe  ={
    id:7,
    name:'Santos Borre',
    posicion: 'Delantero',
    equipo: 'Eintracht Frankfurt',
    numeroCamiseta: 9
    
  }
  topHeroe8:Heroe ={
    id:8,
    name:'Duvan Zapata',
    posicion: "Delantero",
    equipo: 'Atalanta',
    numeroCamiseta: 21
  }
  topHeroe9:Heroe ={
    id:9,
    name:'Pibe Valderrama',
    posicion: "Medio campista",
    equipo: 'Retirado',
    numeroCamiseta: 10
  }
  topHeroe10:Heroe  ={
    id:10,
    name:'David Ospina',
    posicion: "Portero",
    equipo: 'AL-Nassr',
    numeroCamiseta: 1
    
  }
  
  mysHeroes:Heroe[]=[];
  
  constuctor(){
    this.mysHeroes.push(this.topHeroe1);
    this.mysHeroes.push(this.topHeroe2);
    this.mysHeroes.push(this.topHeroe3);
    this.mysHeroes.push(this.topHeroe4);
    this.mysHeroes.push(this.topHeroe5);

  }
  
}
