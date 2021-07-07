import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TesSofPage } from './tes-sof.page';

const routes: Routes = [
  {
    path: '',
    component: TesSofPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TesSofPageRoutingModule {}
