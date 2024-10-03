import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { OnInit } from '@angular/core';
import { NationServiceService } from '../../services/nation-service.service';
import { CommonModule, Location } from '@angular/common';
import { StringFormatterService } from '../../services/string-formatter.service';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss'
})
export class DetailComponent implements OnInit {

  queryName: string | null = '';
  data: any;
  borderNames: any[]= [];

  constructor(private route: ActivatedRoute,public router: Router, public nationService: NationServiceService, public stringFormatterService: StringFormatterService, public location : Location) { 
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.queryName = params.get('queryName');
      if (this.queryName) {
        this.nationService.getDetailedData(this.queryName).subscribe(data => {
          this.data = data
          console.log(this.data);
          this.loadBorderNames();
        })
      }
    });
  }

  get backButtonImage() {
    return document.body.classList.contains('darkMode')
      ? '../../../assets/back-svgrepo-com-dark.svg'
      : '../../../assets/back-svgrepo-com.svg';
  }

  keyAleatoria(obj: any)  {
    const keys = Object.keys(obj);
    const randomIndex = Math.floor(Math.random() * keys.length);
    return keys[randomIndex];
  }

  keyFirts(obj: any)  {
    const keys = Object.keys(obj);
    return keys[0];
  }

  getValues(obj: any): string[] {
    return Object.values(obj); // Retorna os valores das linguagens
  }

  loadBorderNames() {
    const borders: string[] = this.data[0].borders || []; // Definir o tipo de borders como array de strings
    this.borderNames = []
  
    if (borders.length === 0) {
      console.log('No border countries found');
      return;
    }
  
    borders.forEach((borderCode: string) => { // Declarar explicitamente o tipo de borderCode como string
      this.nationService.codeToName(borderCode).then(name => {
        if (!this.borderNames.includes(name)) { // Verificar se o nome já existe na lista
          this.borderNames.push(name);
        }
      }).catch(error => {
        console.error('Error loading border name for', borderCode, error);
        if (!this.borderNames.includes('Unknown')) {
          this.borderNames.push('Unknown');
        }
      });
    });
  }

}
