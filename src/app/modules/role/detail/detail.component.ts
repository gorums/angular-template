import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { RoleService } from '../role.service';
import { Role } from 'src/app/shared/models/role.model';

@Component({
  selector: 'app-role-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class RoleDetailComponent implements OnInit {

  role: Role = {
    id: '',
    name: '',
  };

  constructor(private route: ActivatedRoute, private router: Router, private roleService: RoleService) { }

  ngOnInit() {
    this.getRoleDetails(this.route.snapshot.params.id);
  }

  private getRoleDetails(id: string) {
    this.roleService.getRole(id)
      .subscribe(data => {
        this.role = data.result;
      });
  }

  onDeleteRole(id: string) {
    if (confirm('Are you sure to delete this role')) {
      this.roleService.deleteRole(id)
        .subscribe(data => {
          this.router.navigate(['/roles']);
        });
    }
  }
}
