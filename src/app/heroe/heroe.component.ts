import { Component } from '@angular/core';
import { Heroe } from '../heroe';

@Component({
  selector: 'heroe',
  templateUrl: './heroe.html',
  styleUrls: ['./heroe.css']
})
export class HeroeComponent {
  myHeroe:Heroe  ={
    id:1,
    name: "marucho"
  }
}
