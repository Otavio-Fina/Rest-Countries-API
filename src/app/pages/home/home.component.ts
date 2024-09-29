import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { NationCardComponent } from '../../components/nation-card/nation-card.component';
import { NationServiceService } from '../../services/nation-service.service'; 
import { StringFormatterService } from '../../services/string-formatter.service';

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
  dataSOR: any[] = [];
  dataSpec: any[] = [];

  constructor(private nationService: NationServiceService, public stringFormatterService: StringFormatterService) {}

  ngOnInit() {
    this.nationService.getData().subscribe(data => {
      this.dataSOR = this.stringFormatterService.ordenacao(data);
      this.dataSpec = this.stringFormatterService.ordenacao(data)
      console.log(this.dataSOR);
    });
  }

  onSelectChange() {

    this.nationService.filterRegion = this.selectedRegion === 'Select a Region' ? '' : this.selectedRegion === 'America' ? 'Americas' : this.selectedRegion;
    this.nationService.filterByRegion().subscribe(data => {
      this.dataSOR = this.stringFormatterService.ordenacao(data); //como este codigo tbm volta a data ao normal prefiro atribuir o filtro ao sot pq é mais facil
      console.log(this.dataSOR);
      this.onNameSearch()
    });
  }

  onNameSearch() {

    this.dataSpec = this.dataSOR
    let filteredData = this.dataSOR.filter(country => 
      country.name.common.toLowerCase().startsWith(this.inputValue.toLowerCase())
    );

    this.dataSpec = filteredData;
  }
}
