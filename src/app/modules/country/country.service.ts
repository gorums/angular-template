import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Country } from 'src/app/shared/models/country.model';
import { ApiService } from 'src/app/core/api/api.service';
import { ApiResponse } from 'src/app/core/api/api.response';

@Injectable({
  providedIn: 'root',
})
export class CountryService {

  relativeURL = 'countries';

  constructor(private apiService: ApiService) {
  }

  getCountries(): Observable<ApiResponse<Country[]>> {
    return this.apiService.get<Country[]>(this.relativeURL);
  }

  getCountry(id: string): Observable<ApiResponse<Country>> {
    return this.apiService.getById<Country>(this.relativeURL, id);
  }

  createCountry(country: Country): Observable<ApiResponse<any>> {
    return this.apiService.create<any>(this.relativeURL, country);
  }

  updateCountry(id: string, country: Country): Observable<ApiResponse<any>> {
    return this.apiService.update<any>(this.relativeURL, id, country);
  }

  deleteCountry(id: string): Observable<ApiResponse<any>> {
    return this.apiService.delete<any>(this.relativeURL, id);
  }
}
