import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { UserService } from '../user.service';
import { User } from 'src/app/shared/models/user.model';
import { Country } from 'src/app/shared/models/country.model';
import { Role } from 'src/app/shared/models/role.model';

@Component({
  selector: 'app-user-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  user: User = {
    id: '',
    email: '',
    username: '',
    password: '',
    country: new Country(),
    roles: Role[''],
  };

  constructor(private route: ActivatedRoute, private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.getUserDetails(this.route.snapshot.params.id);
  }

  private getUserDetails(id: string) {
    this.userService.getUser(id)
      .subscribe(data => {
        this.user = data.result;
      });
  }

  onDeleteUser(id: string) {
    if (confirm('Are you sure to delete this user')) {
      this.userService.deleteUser(id)
        .subscribe(data => {
          this.router.navigate(['/users']);
        });
    }
  }
}
