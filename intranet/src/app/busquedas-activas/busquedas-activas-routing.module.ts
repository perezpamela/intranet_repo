import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BusquedasActivasPage } from './busquedas-activas.page';

const routes: Routes = [
  {
    path: '',
    component: BusquedasActivasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BusquedasActivasPageRoutingModule {}
