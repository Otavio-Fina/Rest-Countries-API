import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'; 
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NationServiceService {

  filterRegion = "";
  url = "https://restcountries.com/v3.1/independent?status=true&fields=languages,capital,name,region,population,flags";

  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    return this.http.get(this.url);
  }

  filterByRegion(): Observable<any> {
    const regionUrl = this.filterRegion === ''
      ? this.url
      : `https://restcountries.com/v3.1/region/${this.filterRegion}?status=true&fields=languages,capital,name,region,population,flags`;

    return this.http.get(regionUrl);
  }
}
