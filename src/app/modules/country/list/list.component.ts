import { Component, OnInit } from '@angular/core';

import { CountryService } from '../country.service';
import { Country } from 'src/app/shared/models/country.model';

@Component({
  selector: 'app-country-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
  })
export class CountryListComponent implements OnInit {

  countries: Country[];

  constructor(private countryService: CountryService) { }

  ngOnInit() {
    this.getCountries();
  }

  private getCountries(): void {
    this.countryService.getCountries()
      .subscribe(data => this.countries = data.result);
  }
}
