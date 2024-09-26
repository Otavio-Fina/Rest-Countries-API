import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NationServiceService {

  filterRegion = "";
  url = "https://restcountries.com/v3.1/independent?status=true&fields=languages,capital,name,capital,region,population,flags";
  regionUrl = `https://restcountries.com/v3.1/region/${this.filterRegion}?status=true&fields=languages,capital,name,capital,region,population,flags`;


  constructor() { }
}
