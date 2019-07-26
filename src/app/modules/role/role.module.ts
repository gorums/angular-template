import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RoleCreateComponent } from './create/create.component';
import { RoleDetailComponent } from './detail/detail.component';
import { RoleListComponent } from './list/list.component';
import { RoleUpdateComponent } from './update/update.component';

import { RoleRoutingModule } from './role-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    RoleCreateComponent,
    RoleDetailComponent,
    RoleListComponent,
    RoleUpdateComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RoleRoutingModule,
    SharedModule
  ]
})
export class RoleModule {}
