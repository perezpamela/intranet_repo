import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RedesSocialesPage } from './redes-sociales.page';

const routes: Routes = [
  {
    path: '',
    component: RedesSocialesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RedesSocialesPageRoutingModule {}
