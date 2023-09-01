import { Component } from '@angular/core';
import { Heroe } from '../heroe';
@Component({
  selector: 'detalle-heroe',
  templateUrl: './detalle-heroe.html',
  styleUrls: ['./detalle-heroe.css']
})
export class DetalleHeroeComponent {
  mysHeroes:Heroe[] =[
  {
    id:1,
    name: "Radamel Falcao",
    posicion: "Delantero",
    equipo:"Rayo Vayecano",
    numeroCamiseta: 9
  },  
  {
    id:2,
    name:'Linda Caicedo',
    posicion: "Extremo",
    equipo:"Real Madrid",
    numeroCamiseta: 7
  },
  {
    id:3,
    name:'James Rodriguez',
    posicion: "Volante",
    equipo:"Sao Paulo",
    numeroCamiseta: 10
  },
  {
    id:4,
    name:'Luis Diaz',
    posicion: 'Extremo',
    equipo: 'Liverpool',
    numeroCamiseta: 11
  },
  {
    id:5,
    name:'Yoreli Rincon',
    posicion: 'Centrocampista',
    equipo: 'Atletico Nacional',
    numeroCamiseta: 7
  },
  {
    id:6,
    name:'Mario Yepez',
    posicion: 'Defensa central',
    equipo: 'Retirado',
    numeroCamiseta: 3
  },
  {
    id:7,
    name:'Santos Borre',
    posicion: 'Delantero',
    equipo: 'Eintracht Frankfurt',
    numeroCamiseta: 9
  },
  {
    id:8,
    name:'Duvan Zapata',
    posicion: "Delantero",
    equipo: 'Atalanta',
    numeroCamiseta: 21
  },
  {
    id:9,
    name:'Pibe Valderrama',
    posicion: "Medio campista",
    equipo: 'Retirado',
    numeroCamiseta: 10
  },
  {
    id:10,
    name:'David Ospina',
    posicion: "Portero",
    equipo: 'AL-Nassr',
    numeroCamiseta: 1
  }
]



}
