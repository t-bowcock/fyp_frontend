import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { QueryComponent } from './query/query.component';
import { GraphComponent } from './graph/graph.component';

const routes: Routes = [
    { path: 'isaac/table', component: QueryComponent },
    { path: 'isaac/graph', component: GraphComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
