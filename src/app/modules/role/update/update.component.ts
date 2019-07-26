import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators} from '@angular/forms';
import { Observable } from 'rxjs';

import { ApiResponse } from 'src/app/core/api/api.response';

import { RoleService } from '../role.service';
import { Role } from 'src/app/shared/models/role.model';

@Component({
  selector: 'app-role-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class RoleUpdateComponent implements OnInit {

  editRoleForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router,
              private roleService: RoleService,
  ) { }

  ngOnInit() {
   this.getRoleDetails(this.route.snapshot.params.id)
      .subscribe(data => {
        const role = data.result;

        this.editRoleForm = this.formBuilder.group({
            id: [],
            name: ['', Validators.required],
      });

        this.editRoleForm.patchValue({
          id: role.id,
          name: role.name,
        });
      });
  }

  private getRoleDetails(id: string): Observable<ApiResponse<Role>> {
    return this.roleService.getRole(id);
  }

  onSubmit(): void {
    this.roleService.updateRole(this.editRoleForm.value.id, this.editRoleForm.value)
      .subscribe(data => {
        this.router.navigate(['/roles']);
      });
  }
}
