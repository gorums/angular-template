import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CountryCreateComponent } from './create/create.component';
import { CountryDetailComponent } from './detail/detail.component';
import { CountryListComponent } from './list/list.component';
import { CountryUpdateComponent } from './update/update.component';

const CountryRoutes: Routes = [
  { path: 'countries',
    children: [
    {
        path: '',
        component: CountryListComponent
    },
    {
        path: 'create',
        component: CountryCreateComponent
    },
    {
        path: 'update/:id',
        component: CountryUpdateComponent
    },
    {
        path: ':id',
        component: CountryDetailComponent
    }
    ]
}];

@NgModule({
  imports: [
    RouterModule.forChild(CountryRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class CountryRoutingModule { }
