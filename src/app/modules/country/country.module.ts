import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CountryCreateComponent } from './create/create.component';
import { CountryDetailComponent } from './detail/detail.component';
import { CountryListComponent } from './list/list.component';
import { CountryUpdateComponent } from './update/update.component';

import { CountryRoutingModule } from './country-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    CountryCreateComponent,
    CountryDetailComponent,
    CountryListComponent,
    CountryUpdateComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CountryRoutingModule,
    SharedModule
  ]
})
export class CountryModule {}
