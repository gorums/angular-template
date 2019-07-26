import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators} from '@angular/forms';
import { Observable } from 'rxjs';

import { ApiResponse } from 'src/app/core/api/api.response';

import { UserService } from '../user.service';
import { User } from 'src/app/shared/models/user.model';

import { CountryService } from '../../country/country.service';
import { Country } from 'src/app/shared/models/country.model';

import { RoleService } from '../../role/role.service';
import { Role } from 'src/app/shared/models/role.model';

@Component({
  selector: 'app-user-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UserUpdateComponent implements OnInit {

  editUserForm: FormGroup;
  countries: Country[];
  roles: Role[];

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router,
              private userService: UserService,
              private countryService: CountryService,
              private roleService: RoleService,
  ) { }

  ngOnInit() {
   this.getUserDetails(this.route.snapshot.params.id)
      .subscribe(data => {
        const user = data.result;

        this.editUserForm = this.formBuilder.group({
            id: [],
            email: ['', Validators.required],
            username: ['', Validators.required],
            password: ['', Validators.required],
            country: this.addCountryCombobox(user),
            roles: this.addRolesCheckboxes(user),
      });

        this.editUserForm.patchValue({
          id: user.id,
          email: user.email,
          username: user.username,
          password: user.password,
        });
      });
  }

  private getUserDetails(id: string): Observable<ApiResponse<User>> {
    return this.userService.getUser(id);
  }

  onSubmit(): void {
    this.editUserForm.value.roles = this.getSelectedRoles();
    this.userService.updateUser(this.editUserForm.value.id, this.editUserForm.value)
      .subscribe(data => {
        this.router.navigate(['/users']);
      });
  }

  private addRolesCheckboxes(user: User): FormArray {
    const checkboxes = new FormArray([]);

    this.roleService.getRoles()
      .subscribe(data => {
        this.roles = data.result;
        this.roles.map((role) => {
          const control = new FormControl(user.roles.some((r) => r.name === role.name));
          checkboxes.push(control);
        });
      });

    return checkboxes;
  }

  private getSelectedRoles(): Role[] {
    return this.editUserForm.value.roles
      .map((checked, index) => checked ? this.roles[index] : null)
        .filter(value => value !== null);
  }

  private addCountryCombobox(user: User): FormControl {
    this.countryService.getCountries()
      .subscribe(data => {
        this.countries = data.result;
      });

    return new FormControl(user.country);
  }

  compareCountries(country1: Country, country2: Country): boolean {
    return country1.name === country2.name;
  }
}
