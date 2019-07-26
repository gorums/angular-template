import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UserCreateComponent } from './create/create.component';
import { UserDetailComponent } from './detail/detail.component';
import { UserListComponent } from './list/list.component';
import { UserUpdateComponent } from './update/update.component';

import { UserRoutingModule } from './user-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    UserCreateComponent,
    UserDetailComponent,
    UserListComponent,
    UserUpdateComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UserRoutingModule,
    SharedModule
  ]
})
export class UserModule {}
