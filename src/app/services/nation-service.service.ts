import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'; 
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NationServiceService {

  filterRegion = "";
  filterName = "";
  url = "https://restcountries.com/v3.1/independent?status=true&fields=languages,capital,name,capital,region,population,flags";
  regionUrl = `https://restcountries.com/v3.1/region/${this.filterRegion}?status=true&fields=languages,capital,name,capital,region,population,flags`;
  data: Observable<any>;


  constructor(private http: HttpClient) { 
    this.data = http.get(this.url)
  }

  testeConsoleLog() {
    this.data.subscribe((r) => console.log(JSON.stringify(r)));
  }

  filterByRegion() {
    if (this.filterRegion == "") {
      this.data = this.http.get(this.url)
    } else {
      this.data = this.http.get("https://restcountries.com/v3.1/region/" + this.filterRegion + "?status=true&fields=languages,capital,name,capital,region,population,flags")
    }
  }

}

