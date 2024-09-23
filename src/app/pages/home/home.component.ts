import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, InputTextModule, CommonModule], 
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  regioes: string[] = ['Africa', 'Europe', 'America', 'Asia', 'Oceania'];
  selectedRegion: string = '';
  inputValue: string = '';

  onSelectChange(event: Event) {
    const selectedValue = (event.target as HTMLSelectElement).value
    this.selectedRegion = selectedValue;
    console.log('Valor de Regiao selecionado:', this.selectedRegion);
  }

}
