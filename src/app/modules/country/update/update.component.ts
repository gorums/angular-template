import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators} from '@angular/forms';
import { Observable } from 'rxjs';

import { ApiResponse } from 'src/app/core/api/api.response';

import { CountryService } from '../country.service';
import { Country } from 'src/app/shared/models/country.model';

@Component({
  selector: 'app-country-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class CountryUpdateComponent implements OnInit {

  editCountryForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router,
              private countryService: CountryService,
  ) { }

  ngOnInit() {
   this.getCountryDetails(this.route.snapshot.params.id)
      .subscribe(data => {
        const country = data.result;

        this.editCountryForm = this.formBuilder.group({
            id: [],
            name: ['', Validators.required],
      });

        this.editCountryForm.patchValue({
          id: country.id,
          name: country.name,
        });
      });
  }

  private getCountryDetails(id: string): Observable<ApiResponse<Country>> {
    return this.countryService.getCountry(id);
  }

  onSubmit(): void {
    this.countryService.updateCountry(this.editCountryForm.value.id, this.editCountryForm.value)
      .subscribe(data => {
        this.router.navigate(['/countries']);
      });
  }
}
