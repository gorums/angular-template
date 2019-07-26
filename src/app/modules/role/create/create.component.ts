import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { RoleService } from '../role.service';

@Component({
  selector: 'app-role-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
  })
export class RoleCreateComponent implements OnInit {

  addRoleForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router,
              private roleService: RoleService,
  ) { }

  ngOnInit() {
    this.addRoleForm = this.formBuilder.group({
      id: [],
      name: ['', Validators.required],
    });
  }

  onSubmit(): void {
    this.roleService.createRole(this.addRoleForm.value)
      .subscribe(data => {
        this.router.navigate(['/roles']);
      });
  }
}
