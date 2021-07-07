import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DicsyanosPage } from './dicsyanos.page';

const routes: Routes = [
  {
    path: '',
    component: DicsyanosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DicsyanosPageRoutingModule {}
