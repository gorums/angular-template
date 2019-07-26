import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CountryService } from '../country.service';
import { Country } from 'src/app/shared/models/country.model';

@Component({
  selector: 'app-country-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class CountryDetailComponent implements OnInit {

  country: Country = {
    id: '',
    name: '',
  };

  constructor(private route: ActivatedRoute, private router: Router, private countryService: CountryService) { }

  ngOnInit() {
    this.getCountryDetails(this.route.snapshot.params.id);
  }

  private getCountryDetails(id: string) {
    this.countryService.getCountry(id)
      .subscribe(data => {
        this.country = data.result;
      });
  }

  onDeleteCountry(id: string) {
    if (confirm('Are you sure to delete this country')) {
      this.countryService.deleteCountry(id)
        .subscribe(data => {
          this.router.navigate(['/countries']);
        });
    }
  }
}
