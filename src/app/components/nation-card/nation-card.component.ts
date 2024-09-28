import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nation-card',
  standalone: true,
  imports: [],
  templateUrl: './nation-card.component.html',
  styleUrl: './nation-card.component.scss'
})
export class NationCardComponent {
  @Input() name: string = '';
  @Input() population: number = 0;
  @Input() capital: string = '';
  @Input() region: string = '';
  @Input() flag: string = '';
  @Input() alt: string = '';

}
