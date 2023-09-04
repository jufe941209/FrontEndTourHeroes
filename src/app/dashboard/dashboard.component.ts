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
  

  selectedHero?:Heroe;
  onSelect(hero:Heroe):void{
    this.selectedHero=hero
  }
  mouseDownHandler(event: MouseEvent): void {
    const button = event.target as HTMLElement;
    button.style.backgroundColor = 'red';
  }
  
  mouseMoveHandler(event: MouseEvent): void {
    // Crear un elemento div para el mensaje emergente
    const tooltip = document.createElement('div');
    tooltip.textContent = '¡Mueve el mouse sobre el botón!';
    tooltip.style.position = 'absolute';
    tooltip.style.top = `${event.clientY}px`;
    tooltip.style.left = `${event.clientX}px`;
    document.body.appendChild(tooltip);
  }
  
  mouseOutHandler(event: MouseEvent): void {
    const button = event.target as HTMLElement;
    button.style.backgroundColor = '';
  }
  
  mouseOverHandler(event: MouseEvent): void {
    const button = event.target as HTMLElement;
    button.style.backgroundColor = 'yellow';
  }
  
  mouseUpHandler(event: MouseEvent): void {
    const button = event.target as HTMLElement;
    button.style.backgroundColor = 'green';
  }
}
