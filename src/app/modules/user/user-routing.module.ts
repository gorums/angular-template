import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserCreateComponent } from './create/create.component';
import { UserDetailComponent } from './detail/detail.component';
import { UserListComponent } from './list/list.component';
import { UserUpdateComponent } from './update/update.component';

const UserRoutes: Routes = [
  { path: 'users',
    children: [
    {
        path: '',
        component: UserListComponent
    },
    {
        path: 'create',
        component: UserCreateComponent
    },
    {
        path: 'update/:id',
        component: UserUpdateComponent
    },
    {
        path: ':id',
        component: UserDetailComponent
    }
    ]
}];

@NgModule({
  imports: [
    RouterModule.forChild(UserRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class UserRoutingModule { }
