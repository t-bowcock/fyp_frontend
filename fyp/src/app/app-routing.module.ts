import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { QueryComponent } from './query/query.component';
import { ManageComponent } from './manage/manage.component';

const routes: Routes = [
  { path: '', component: QueryComponent },
  { path: 'management', component: ManageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
