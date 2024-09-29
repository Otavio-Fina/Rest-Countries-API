import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringFormatterService {

  constructor() { }

  populationFormatter(population:number){
    if (population.toString().length > 9) {
      return (population / 1000000000).toFixed(1) + "B";
    } else if (population.toString().length > 6) {
      return (population / 1000000).toFixed(1) + "M";
    } else if (population.toString().length > 3) {
      return (population / 1000).toFixed(1) + "K";
    } else {
      return population.toString();
    }
  }

  ordenacao(data: any){
    return data.sort((a:any, b:any) => a.name.common.localeCompare(b.name.common)); 
  }
}
