import { Component, OnInit } from '@angular/core';

import { RoleService } from '../role.service';
import { Role } from 'src/app/shared/models/role.model';

@Component({
  selector: 'app-role-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
  })
export class RoleListComponent implements OnInit {

  roles: Role[];

  constructor(private roleService: RoleService) { }

  ngOnInit() {
    this.getRoles();
  }

  private getRoles(): void {
    this.roleService.getRoles()
      .subscribe(data => this.roles = data.result);
  }
}
