import { Component } from '@angular/core';

@Component({
  selector: 'app-nation-card',
  standalone: true,
  imports: [],
  templateUrl: './nation-card.component.html',
  styleUrl: './nation-card.component.scss'
})
export class NationCardComponent {
  name: string = '';
  population: number = 0;
  capital: string = '';
  region: string = '';
}
