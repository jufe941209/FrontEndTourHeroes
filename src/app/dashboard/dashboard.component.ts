import { Component } from '@angular/core';
import { Heroe, HEROES } from '../heroe';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css']
})
export class DashboardComponent {

  topHeroe1:Heroe  =HEROES[0];
  topHeroe2:Heroe =HEROES[1];
  topHeroe3:Heroe =HEROES[2];
  topHeroe4:Heroe  =HEROES[3];
  topHeroe5:Heroe =HEROES[4];

  
  mysHeroes:Heroe[]=[];
  

 
}
