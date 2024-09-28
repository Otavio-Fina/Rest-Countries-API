import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { NationCardComponent } from '../../components/nation-card/nation-card.component';
import { NationServiceService } from '../../services/nation-service.service'; 
import { OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, InputTextModule, CommonModule,NationCardComponent], 
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  regioes: string[] = ['Select a Region','Africa', 'Europe', 'America', 'Asia', 'Oceania'];
  selectedRegion: string = '';
  inputValue: string = '';
  data: Observable<any>;

  constructor(private nationService: NationServiceService) {
    this.data = nationService.data
  }

  onSelectChange(event: Event) {
    const selectedValue = (event.target as HTMLSelectElement).value
    this.selectedRegion = selectedValue;

    switch (this.selectedRegion) {
      case 'Africa':
        this.nationService.filterRegion = 'Africa';
        break;
      case 'Europe':
        this.nationService.filterRegion = 'Europe';
        break;
      case 'America':
        this.nationService.filterRegion = 'Americas';
        break;
      case 'Asia':
        this.nationService.filterRegion = 'Asia';
        break;
      case 'Oceania':
        this.nationService.filterRegion = 'Oceania';
        break;
      default:
        this.nationService.filterRegion = '';
        break;
    }

    this.nationService.filterByRegion();

    
  }

}
