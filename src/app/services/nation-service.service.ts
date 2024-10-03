import { Injectable } from '@angular/core';
import { Observable, lastValueFrom } from 'rxjs'; 
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NationServiceService {

  filterRegion = "";
  url = "https://restcountries.com/v3.1/independent?status=true&fields=languages,capital,name,region,population,flags";
  urlByName = "https://restcountries.com/v3.1/name/";

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

  getDetailedData(queryName: string | null) {
    return this.http.get(this.urlByName + queryName)
  }

  codeToName(code: string | null): Promise<string> {
    return lastValueFrom(
      this.http.get<any>(`https://restcountries.com/v3.1/alpha/${code}?fields=name`)
    ).then(data => {
      console.log(data.name.common);
      return data.name.common;
    }).catch(error => {
      console.error('Erro ao buscar nome do país', error);
      return 'Unknown';
    });
  }
}
