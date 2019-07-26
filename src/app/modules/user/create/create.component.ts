import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { UserService } from '../user.service';

import { CountryService } from '../../country/country.service';
import { Country } from 'src/app/shared/models/country.model';

import { RoleService } from '../../role/role.service';
import { Role } from 'src/app/shared/models/role.model';

@Component({
  selector: 'app-user-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
  })
export class UserCreateComponent implements OnInit {

  addUserForm: FormGroup;
  countries: Country[];
  roles: Role[];

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router,
              private userService: UserService,
              private countryService: CountryService,
              private roleService: RoleService,
  ) { }

  ngOnInit() {
    this.addUserForm = this.formBuilder.group({
      id: [],
      email: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      country: this.addCountryCombobox(),
      roles: this.addRolesCheckboxes(),
    });
  }

  onSubmit(): void {
    this.addUserForm.value.roles = this.getSelectedRoles();
    this.userService.createUser(this.addUserForm.value)
      .subscribe(data => {
        this.router.navigate(['/users']);
      });
  }

   private addRolesCheckboxes(): FormArray {
     const checkboxes = new FormArray([]);

     this.roleService.getRoles()
       .subscribe(data => {
         this.roles = data.result;
         this.roles.map(() => {
           const control = new FormControl(false);
           checkboxes.push(control);
         });
       });

     return checkboxes;
   }
 
   private getSelectedRoles(): Role[] {
     return this.addUserForm.value.roles
       .map((checked, index) => checked ? this.roles[index] : null)
       .filter(value => value !== null);
   }

  private addCountryCombobox(): FormControl {
    this.countryService.getCountries()
     .subscribe(data => {
       this.countries = data.result;
     });

    return new FormControl();
  }
}
