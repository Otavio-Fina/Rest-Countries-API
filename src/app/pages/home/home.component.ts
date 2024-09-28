import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { NationCardComponent } from '../../components/nation-card/nation-card.component';
import { NationServiceService } from '../../services/nation-service.service'; 

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, InputTextModule, CommonModule, NationCardComponent], 
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  regioes: string[] = ['Select a Region', 'Africa', 'Europe', 'America', 'Asia', 'Oceania'];
  selectedRegion: string = '';
  inputValue: string = '';
  data: any[] = [];

  constructor(private nationService: NationServiceService) {}

  ngOnInit() {
    this.nationService.getData().subscribe(data => {
      this.data = data;
      console.log(this.data);
    });
  }

  onSelectChange(event: Event) {
    const selectedValue = (event.target as HTMLSelectElement).value;
    this.selectedRegion = selectedValue;

    this.nationService.filterRegion = this.selectedRegion === 'Select a Region' ? '' : this.selectedRegion === 'America' ? 'Americas' : this.selectedRegion;
    this.nationService.filterByRegion().subscribe(data => {
      this.data = data;
      console.log(this.data);
    });
  }

  onNameSearch(event: Event) {
    const value = (event.target as HTMLSelectElement).value;
    this.inputValue = value;

    let filtredData = []

    for (let country in this.data) {
    
    }
  }
}
