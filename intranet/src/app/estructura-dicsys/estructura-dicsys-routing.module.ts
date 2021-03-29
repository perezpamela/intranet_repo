import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EstructuraDicsysPage } from './estructura-dicsys.page';

const routes: Routes = [
  {
    path: '',
    component: EstructuraDicsysPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EstructuraDicsysPageRoutingModule {}
