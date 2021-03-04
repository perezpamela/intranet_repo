import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DatosUtilesPage } from './datos-utiles.page';

const routes: Routes = [
  {
    path: '',
    component: DatosUtilesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DatosUtilesPageRoutingModule {}
