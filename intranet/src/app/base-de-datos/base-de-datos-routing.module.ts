import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BaseDeDatosPage } from './base-de-datos.page';

const routes: Routes = [
  {
    path: '',
    component: BaseDeDatosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BaseDeDatosPageRoutingModule {}
