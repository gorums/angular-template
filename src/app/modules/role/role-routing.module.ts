import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RoleCreateComponent } from './create/create.component';
import { RoleDetailComponent } from './detail/detail.component';
import { RoleListComponent } from './list/list.component';
import { RoleUpdateComponent } from './update/update.component';

const RoleRoutes: Routes = [
  { path: 'roles',
    children: [
    {
        path: '',
        component: RoleListComponent
    },
    {
        path: 'create',
        component: RoleCreateComponent
    },
    {
        path: 'update/:id',
        component: RoleUpdateComponent
    },
    {
        path: ':id',
        component: RoleDetailComponent
    }
    ]
}];

@NgModule({
  imports: [
    RouterModule.forChild(RoleRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class RoleRoutingModule { }
