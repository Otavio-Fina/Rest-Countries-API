import { Component } from '@angular/core';
import { NationServiceService } from '../../services/nation-service.service'; 
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-nation-card',
  standalone: true,
  imports: [],
  templateUrl: './nation-card.component.html',
  styleUrl: './nation-card.component.scss'
})
export class NationCardComponent implements OnInit {
  name: string = '';
  population: number = 0;
  capital: string = '';
  region: string = '';

  constructor(private nationService: NationServiceService) {}

  ngOnInit(): void {
      this.nationService.testeConsoleLog();
  }


  
}
