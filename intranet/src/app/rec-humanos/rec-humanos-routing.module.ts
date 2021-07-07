import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecHumanosPage } from './rec-humanos.page';

const routes: Routes = [
  {
    path: '',
    component: RecHumanosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecHumanosPageRoutingModule {}
