import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { CountryService } from '../country.service';

@Component({
  selector: 'app-country-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
  })
export class CountryCreateComponent implements OnInit {

  addCountryForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router,
              private countryService: CountryService,
  ) { }

  ngOnInit() {
    this.addCountryForm = this.formBuilder.group({
      id: [],
      name: ['', Validators.required],
    });
  }

  onSubmit(): void {
    this.countryService.createCountry(this.addCountryForm.value)
      .subscribe(data => {
        this.router.navigate(['/countries']);
      });
  }
}
